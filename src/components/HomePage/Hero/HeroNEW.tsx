import { BackgroundPaths } from "@/components/ui/shadcn-io/background-paths"

export default function HeroNEW() {
  return (
    <section id="home" className="relative overflow-hidden
      h-[80vh]
      md:h-[90vh]
   ">
        {/* <FloatingIcons /> */}
        <BackgroundPaths  />
        <div className="container h-full absolute inset-0 top-0
          pt-24
          lg:pt-44 lg:pb-24 
          xl:pt-52
        ">
          <div className="px-4 h-full flex flex-col items-center justify-center">
              <h3 className="text-secondary dark:text-darkSecondary
                text-base
                md:text-lg 
                xl:text-2xl" 
                style={{ wordSpacing: "5px" }}
              >Hi, I'm</h3>
              <h1 className="mb-3 text-primaryIconColor dark:text-darkPrimary font-bold
              text-4xl
                text-[2rem] 
                sm:text-4xl
                lg:text-6xl
                2xl:text-7xl
              ">
                Muhammad Renaldi
              </h1>
              <p className="mb-12 text-center text-secondary dark:text-darkSecondary leading-relaxed
                text-base
                lg:text-lg
                xl:text-xl
              ">
                A Bachelor of Informatics Engineering from Darma Persada University
              </p>
              
              {/* <a href="#contact" className="btn px-16 lg:px-5 py-2 rounded-full">Contact Me</a> */}

              <a href="#portfolio" className="flex p-1 gap-2 items-center rounded-full hover:opacity-80 transition-all duration-500 
               border bg-white
              dark:border-darkSecondary/50 dark:bg-bgDarkSecondary
              "> 
                <span className="rounded-full px-3 py-1 text-white transition-all duration-500
                  bg-primaryIconColor dark:text-black dark:bg-darkPrimary
                    text-sm
                    md:text-base
                ">
                    My works
                </span>
                <span className="pr-3 transition-all duration-500 text-secondaryIconColor dark:text-darkPrimaryIconColor
                    text-sm
                    md:text-base
                ">
                    See all my projects &rarr;
                </span>
              </a>
          </div>
        </div>

    </section>
  )
}

// function FloatingIcons(){
//   type IconType = {icon: string, title: string, className: string}

//   const leftIcons: IconType[] = [
//     {
//       icon: "./img/hero/icons/firebase-1.png",
//       title: "firebase",
//       className: "h-20 bottom-[40%] right-[70%] bg-gray-800"
//     },
//     {
//       icon: "./img/hero/icons/bootstrap-1.png",
//       title: "bootstrap",
//       className: "h-14 bottom-[60%] right-[30%] bg-purple-200"
//     },
//     {
//       icon: "./img/hero/icons/tailwind-1.png",
//       title: "tailwind",
//       className: "h-14 bottom-[70%] right-[60%] bg-gray-900"
//     },
//     {
//       icon: "./img/hero/icons/php-1.png",
//       title: "php",
//       className: "h-24 bottom-0 right-0 bg-blue-100"
//     },
//     {
//       icon: "./img/hero/icons/laravel-1.png",
//       title: "laravel",
//       className: "h-20 bottom-[20%] right-[12%]"
//     },
//     // {
//     //   icon: "./img/hero/icons/postgre-1.png",
//     //   className: "h-10 bottom-[5%] right-[50%]"
//     // },
//     {
//       icon: "./img/hero/icons/mysql-1.png",
//       title: "mysql",
//       className: "h-10 bottom-[10%] right-[80%] bg-gray-600"
//     },
//     {
//       icon: "./img/hero/icons/mongoDB-1.png",
//       title: "mongodb",
//       className: "h-10 bottom-[20%] right-[70%] bg-emerald-400"
//     },

//   ]
//   const rightIcons: IconType[] = [
//     {
//       icon: "./img/hero/icons/nextjs-1.png",
//       title: "next.js",
//       className: "h-24 bottom-[0%] left-[0%] bg-gray-600"
//     },
//     {
//       icon: "./img/hero/icons/nodejs-1.png",
//       title: "node.js",
//       className: "h-10 bottom-[5%] left-[50%] bg-gray-800"
//     },
//     {
//       icon: "./img/hero/icons/expressjs-1.png",
//       title: "express.js",
//       className: "h-10 bottom-[10%] left-[80%] bg-gray-200"
//     },
//     {
//       icon: "./img/hero/icons/nestjs-1.png",
//       title: "nest.js", 
//       className: "h-10 bottom-[20%] left-[70%]"
//     },
//     {
//       icon: "./img/hero/icons/reactjs-1.png",
//       title: "react.js",
//       className: "h-20 bottom-[20%] left-[12%] bg-cyan-800"
//     },
//     // {
//     //   icon: "",
//     //   title: "",
//     //   className: "h-32 bottom-[40%] left-[80%]"
//     // },
//     {
//       icon: "./img/hero/icons/js-1.png",
//       title: "javascript",
//       className: "h-14 bottom-[60%] left-[30%]"
//     },
//     {
//       icon: "./img/hero/icons/ts-1.png",
//       title: "typescript",      
//       className: "h-14 bottom-[70%] left-[60%]"
//     },
//   ]

//   function FloatingIconsItem({icons}: {icons: IconType[]}){
//     return (
//       <div className="relative w-1/6
//         hidden        
//         md:block md:scale-50
//         lg:scale-75
//         2xl:scale-100
//       ">
//         {icons.map((icon, index) => (
//           <div 
//             key={index} 
//             className={`
//               absolute p-2 flex items-center justify-center rounded-md aspect-square animate-float-slow overflow-hidden
//               ${icon.className}
//             `}
//           >
//             <img src={icon.icon} alt="icon" className="w-full h-auto" />
//           </div>
//         ))}
//       </div>
//     )
//   }

//   return (
//     <div className="absolute top-0 inset-0 flex justify-between z-0">
//       {FloatingIconsItem({icons: leftIcons})}
//       {FloatingIconsItem({icons: rightIcons})}
//     </div>
//   )
// }
