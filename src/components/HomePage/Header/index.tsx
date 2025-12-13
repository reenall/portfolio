import { Fragment, useEffect, useRef, useState } from "react";

export default function Header() {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Scroll checker
  useEffect(() => {
    const header = document.querySelector('header');
    const backTop = document.querySelector('#back-top')

    window.onscroll = () => {
      if (window.scrollY > 0) {                                                // kalo posisinya di paling atas, value scrollY = 0, kalo discroll valuenya naik
          header?.classList.add('nav-fixed');
          // backTop?.classList.remove('hidden');
          // backTop?.classList.add('flex');
      } else {
          header?.classList.remove('nav-fixed');
          // backTop?.classList.remove('flex');
          // backTop?.classList.add('hidden');
      }
    }
  }, [])

  // handle hamburger click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if(navRef.current && !navRef.current.contains(event.target as Node)){
        setHamburgerActive(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [navRef])

  function handleDarkMode(){
    const darkToggle = document.querySelector('.dark-toggle');
    const html = document.querySelector('html');
    darkToggle?.classList.toggle('dark-toggle-animate');
    html?.classList.toggle('dark');

    (html?.classList.contains('dark')) ? localStorage.theme = 'dark' : localStorage.theme = 'light';

    // pindahin posisi toggle sesuai mode (in case kalo halaman direfresh)
    if (localStorage.theme === 'dark'){
      darkToggle?.classList.add('dark-toggle-animate');
    } 
  }

  const navList = [
    {href: '#home', name: 'Home'},
    {href: '#skills', name: 'Skills'},
    {href: '#portfolio', name: 'Portfolio'},
    {href: '#education', name: 'Education'},
    {href: '#contact', name: 'Contact'},
  ]

  return (
    <header className="absolute z-50 flex top-0 items-center w-full bg-transparent py-8 transition-all duration-500">
      <div className="container">
        <div className="relative flex items-center">
          <div className="px-4">
            <a href="#home" className="text-[31px] text-primaryIconColor dark:text-darkPrimaryIconColor">Ree</a>
          </div>

          <div className="absolute right-0 flex items-center px-4 lg:hidden" >
            <button 
              onClick={() => {setHamburgerActive(!hamburgerActive)}} 
              className={`${hamburgerActive && 'hamburger-active'}`}
              name="hamburger" 
              id="hamburger" 
              type="button"
            >
              <span className={`hamburger-line origin-top-right`} />
              <span className={`hamburger-line`} />
              <span className={`hamburger-line origin-bottom-right`} />
            </button>
          </div>

          <nav 
            ref={navRef}
            className={`absolute top-full right-0 bg-white border rounded-xl shadow-md max-w-[250px] w-full py-3
            dark:shadow-none dark:bg-bgDarkSecondary dark:border-slate-700
            lg:block lg:static lg:max-w-full lg:bg-transparent lg:dark:bg-transparent lg:border-none lg:shadow-none ${hamburgerActive ? 'block' : 'hidden'}`}
          >
              <ul className="block lg:flex lg:justify-end lg:items-center">
                {navList.map((item, index) => (
                  <Fragment key={index}>
                    {NavItem({href: item.href, title: item.name})}
                  </Fragment>
                ))}
                <li className="flex items-center justify-end lg:justify-center lg:border-l-2 lg:pl-4">
                    <div className="flex">
                      <button onClick={handleDarkMode} className="dark-toggle relative flex items-center w-12 h-6 mx-3 rounded-full bg-primary cursor-pointer">
                        <div className="circle-toggle absolute z-[999] w-5 h-5 ml-1 rounded-full bg-bgSecondary transition duration-500 ease-in-out"></div>

                        <div className="flex w-full">
                            <div className="flex w-1/2 justify-center">
                            <div className="w-[17px] pl-[3px]">
                              <svg
                                  width="100%"
                                  height="100%"
                                  version="1.0"
                                  id="Layer_1"
                                  viewBox="0 0 64 64"
                                  enableBackground="new 0 0 64 64"
                                  fill="#000000"
                              >
                                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                  <g id="SVGRepo_iconCarrier">
                                  <g>
                                    <circle fillRule="evenodd" clipRule="evenodd" fill="#231F20" cx="32.003" cy="32.005" r="16.001"></circle>
                                    <path fillRule="evenodd" clipRule="evenodd" fill="#231F20" d="M12.001,31.997c0-2.211-1.789-4-4-4H4c-2.211,0-4,1.789-4,4 s1.789,4,4,4h4C10.212,35.997,12.001,34.208,12.001,31.997z"></path>
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        fill="#231F20"
                                        d="M12.204,46.139l-2.832,2.833c-1.563,1.562-1.563,4.094,0,5.656 c1.562,1.562,4.094,1.562,5.657,0l2.833-2.832c1.562-1.562,1.562-4.095,0-5.657C16.298,44.576,13.767,44.576,12.204,46.139z"
                                    ></path>
                                    <path fillRule="evenodd" clipRule="evenodd" fill="#231F20" d="M32.003,51.999c-2.211,0-4,1.789-4,4V60c0,2.211,1.789,4,4,4 s4-1.789,4-4l-0.004-4.001C36.003,53.788,34.21,51.999,32.003,51.999z"></path>
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        fill="#231F20"
                                        d="M51.798,46.143c-1.559-1.566-4.091-1.566-5.653-0.004 s-1.562,4.095,0,5.657l2.829,2.828c1.562,1.57,4.094,1.562,5.656,0s1.566-4.09,0-5.656L51.798,46.143z"
                                    ></path>
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        fill="#231F20"
                                        d="M60.006,27.997l-4.009,0.008 c-2.203-0.008-3.992,1.781-3.992,3.992c-0.008,2.211,1.789,4,3.992,4h4.001c2.219,0.008,4-1.789,4-4 C64.002,29.79,62.217,27.997,60.006,27.997z"
                                    ></path>
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        fill="#231F20"
                                        d="M51.798,17.859l2.828-2.829c1.574-1.566,1.562-4.094,0-5.657 c-1.559-1.567-4.09-1.567-5.652-0.004l-2.829,2.836c-1.562,1.555-1.562,4.086,0,5.649C47.699,19.426,50.239,19.418,51.798,17.859z"
                                    ></path>
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        fill="#231F20"
                                        d="M32.003,11.995c2.207,0.016,4-1.789,4-3.992v-4 c0-2.219-1.789-4-4-4c-2.211-0.008-4,1.781-4,3.993l0.008,4.008C28.003,10.206,29.792,11.995,32.003,11.995z"
                                    ></path>
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        fill="#231F20"
                                        d="M12.212,17.855c1.555,1.562,4.079,1.562,5.646-0.004 c1.574-1.551,1.566-4.09,0.008-5.649l-2.829-2.828c-1.57-1.571-4.094-1.559-5.657,0c-1.575,1.559-1.575,4.09-0.012,5.653 L12.212,17.855z"
                                    ></path>
                                  </g>
                                  </g>
                              </svg>
                            </div>
                            </div>

                            <div className="flex w-1/2 justify-center">
                            <div className="w-[13px] -rotate-[30deg]">
                              <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                  <path
                                  fill="#fff"
                                  d="M12 10.999c1.437.438 2.562 1.564 2.999 3.001.44-1.437 1.565-2.562 3.001-3-1.436-.439-2.561-1.563-3.001-3-.437 1.436-1.562 2.561-2.999 2.999zm8.001.001c.958.293 1.707 1.042 2 2.001.291-.959 1.042-1.709 1.999-2.001-.957-.292-1.707-1.042-2-2-.293.958-1.042 1.708-1.999 2zm-1-9c-.437 1.437-1.563 2.562-2.998 3.001 1.438.44 2.561 1.564 3.001 3.002.437-1.438 1.563-2.563 2.996-3.002-1.433-.437-2.559-1.564-2.999-3.001zm-7.001 22c-6.617 0-12-5.383-12-12s5.383-12 12-12c1.894 0 3.63.497 5.37 1.179-2.948.504-9.37 3.266-9.37 10.821 0 7.454 5.917 10.208 9.37 10.821-1.5.846-3.476 1.179-5.37 1.179z"
                                  />
                              </svg>
                            </div>
                            </div>
                        </div>
                      </button>
                    </div>
                </li>
              </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

function NavItem({href, title}: {href: string, title: string}) {
  return (
    <li className="group py-3 lg:py-0">
      <a 
        href={href} 
        className="block mx-6 text-primary text-sm transition-all duration-500 lg:group-hover:text-primaryIconColor
        lg:group-hover:tracking-widest lg:group-hover:underline lg:group-hover:underline-offset-[15px]
        dark:text-darkSecondary dark:lg:group-hover:text-darkPrimaryIconColor"
      >
          {title}
      </a>
    </li>
  )
}
