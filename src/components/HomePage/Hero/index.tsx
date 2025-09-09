export default function Hero() {
  return (
    <section id="home" className="pt-24 lg:pt-44 lg:pb-24 xl:pt-52">
      <div className="container">
        <div className="flex flex-wrap justify-center lg:flex-nowrap">
          <div className="order-2 pb-14 sm:text-center lg:text-start self-center px-4 lg:-order-1 lg:w-1/2 lg:pb-0">
            <h3 className="text-base text-secondary dark:text-darkSecondary md:text-lg xl:text-xl" style={{ wordSpacing: "5px" }}>Hello, I'm</h3>
            <h1 className="text-primaryIconColor dark:text-darkPrimary text-4xl font-bold my-1 xl:text-5xl">Muhammad Renaldi</h1>

            <p className="mb-9 text-secondary dark:text-darkSecondary leading-relaxed lg:text-lg">Bachelor of Informatics Engineering from Darma Persada University</p>

            <h3 className="mb-8 text-secondary dark:text-darkSecondary">Front-end & Back-end web developer</h3>

            <a href="#contact" className="btn px-16 lg:px-5 py-2 rounded-full">Contact</a>
          </div>

          <div className="relative flex w-full mb-14 mx-4 overflow-hidden lg:w-1/2 lg:mt-0 lg:mb-0 lg:right-0 lg:justify-end">
            <img src="./img/avatar1.png" alt="Avatar" className="relative z-20 mx-auto max-w-[70%] sm:max-w-[300px] lg:mx-0 xl:max-w-[65%]" />
            <span className="absolute z-10 -bottom-32 left-[45%] -translate-x-1/2 rotate-[-170deg] md:scale-[1.3] lg:scale-[1.1] lg:left-[60%] xl:scale-[1.3] xl:left-full xl:right-5">
              <svg width="400" height="400" viewBox="0 0 200 200">
                <path
                  fill="#e5e7eb"
                  d="M24.6,-35.9C33.2,-27.6,42.5,-22.2,51.7,-12.4C60.9,-2.7,70,11.5,70.5,26.9C71,42.2,62.9,58.8,49.7,64C36.5,69.2,18.3,63.1,4.7,56.7C-8.9,50.2,-17.8,43.4,-32,38.6C-46.3,33.7,-66,30.8,-76.8,19.7C-87.7,8.6,-89.9,-10.7,-82.5,-24.8C-75.2,-39,-58.4,-48.1,-43,-54.3C-27.7,-60.4,-13.9,-63.6,-2.9,-59.6C8,-55.5,15.9,-44.2,24.6,-35.9Z"
                  transform="translate(100 100)"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
