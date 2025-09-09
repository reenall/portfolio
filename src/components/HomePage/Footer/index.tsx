export default function Footer() {
  return (
    <footer className="py-28 md:py-20 bg-bgSecondary dark:bg-bgDarkSecondary transition-all duration-500">
      <div className="container">
        <div className="flex flex-wrap justify-center items-center w-full text-center px-4 mx-auto xl:justify-around">
          <h2 className="footer-title px-5 mx-auto mb-10 xl:mb-0 text-xl text-primaryIconColor xl:mx-0">This website was created using</h2>
          <div className="grid gap-10 md:flex md:flex-wrap justify-center items-center xl:mx-0">
            <TechList 
               title="React.js" 
               image="./img/footer/react icon.png" 
               url="https://react.dev/" 
            />
            <TechList 
               title="Tailwind CSS" 
               image="./img/footer/tailwind1.png" 
               url="https://tailwindcss.com/" 
            />
            <TechList 
               title="Swiper.js" 
               image="./img/footer/swiper js.png" 
               url="https://swiperjs.com/" 
               className="scale-[0.8]"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

function TechList({title, image, url, className}: {title: string, image: string, url: string, className?: string}) {
   return (
      <a href={url} target="_blank">
         <img 
            src={image} 
            alt={title}
            className={`inline-block max-w-[40px] pr-2 grayscale
              sm:max-w-[65px] sm:pl-5
              lg:pl-6 lg:max-w-[70px] ${className}`}
          />
         <span className="text-secondary dark:text-darkPrimary lg:text-[16px]">{title}</span>
      </a>
   )
}
