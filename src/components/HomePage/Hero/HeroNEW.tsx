import { AuroraBackground } from "@/components/ui/shadcn-io/aurora-background";

export default function HeroNEW() {
  return (
    <section id="home" className="relative overflow-hidden
      h-[80vh]
      xl:h-[90vh]
   ">
      {/* <FloatingIcons /> */}
        <div className="container h-full z-10
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

              <a href="#portfolio" className="flex p-1 gap-2 items-center rounded-full hover:opacity-80 transition-all duration-100 border dark:border-darkSecondary
              "> 
                <span className="rounded-full px-3 py-1 text-white bg-primaryIconColor dark:text-black dark:bg-darkPrimaryIconColor
                    text-sm
                    md:text-base
                ">
                    My works
                </span>
                <span className="pr-3 text-secondaryIconColor dark:text-darkPrimaryIconColor
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
//   return (
//     <div className="absolute top-0 inset-0 flex justify-between">
//       <div>
//         {/* code */}
//       </div>
//       <div>
//         {/* code */}
//       </div>
//     </div>
//   )
// }

// export function FloatingIcons() {
//   const leftIcons = [
//     "./img/education/js3.png",
//     "./img/education/ts1.png",
//     "./img/education/react1.png",
//     "./img/education/react1.png",
//     "./img/education/nextjs1.png",
//     "./img/education/nestjs1.png",
//     "./img/education/nodejs1.png",
//     "./img/education/expressjs.png"
//   ];

//   // Data untuk daftar teknologi - kanan
//   const rightIcons = [
//     "./img/education/php6.png",
//     "./img/education/laravel1.png",
//     "./img/education/mongoDB.png",
//     "./img/education/mysql1.png",
//     "./img/education/postgre.png",
//     "./img/education/css1.png",
//     "./img/education/bootstrap1.png",
//     "./img/education/tailwind1.png"
//   ];

//   return (
//     <div className="absolute inset-0 top-0 pointer-events-none hidden md:flex justify-between">
      
//       {/* LEFT SIDE */}
//       <div className="relative w-[120px]">
//         {leftIcons.map((src, i) => (
//           <img
//             key={i}
//             src={src}
//             className={`
//               absolute w-12 h-12 object-contain p-2 bg-white/60 backdrop-blur rounded-xl shadow 
//               animate-float
//             `}
//             style={{
//               top: `${i * 120 + 40}px`, // jarak antar icon
//               left: `${i % 2 === 0 ? 0 : 20}px`,
//             }}
//           />
//         ))}
//       </div>

//       {/* RIGHT SIDE */}
//       <div className="relative w-[120px]">
//         {rightIcons.map((src, i) => (
//           <img
//             key={i}
//             src={src}
//             className={`
//               absolute w-12 h-12 object-contain p-2 bg-secondaryIconColor/60 backdrop-blur rounded-xl shadow 
//               animate-float-slow
//             `}
//             style={{
//               top: `${i * 110 + 80}px`,
//               right: `${i % 2 === 0 ? 0 : 20}px`,
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

export function FloatingIcons() {
  const leftIcons = [
    { src: "/icons/react.png", size: 70, offset: 0 },
    { src: "/icons/figma.png", size: 45, offset: 30 },
    { src: "/icons/next.png", size: 60, offset: 10 },
    { src: "/icons/tailwind.png", size: 48, offset: 25 },
  ];

  const rightIcons = [
    { src: "/icons/js.png", size: 65, offset: 15 },
    { src: "/icons/mongo.png", size: 50, offset: 0 },
    { src: "/icons/vue.png", size: 42, offset: 20 },
    { src: "/icons/css.png", size: 55, offset: 5 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none hidden md:flex justify-between">

      {/* LEFT SIDE */}
      <div className="relative w-[160px]">
        {leftIcons.map((icon, i) => (
          <img
            key={i}
            src={icon.src}
            className="absolute object-contain bg-white/70 backdrop-blur rounded-xl shadow animate-float"
            style={{
              width: icon.size,
              height: icon.size,
              top: `${i * 140 + 40}px`,
              left: `${icon.offset}px`,
            }}
          />
        ))}
      </div>

      {/* RIGHT SIDE */}
      <div className="relative w-[160px]">
        {rightIcons.map((icon, i) => (
          <img
            key={i}
            src={icon.src}
            className="absolute object-contain bg-white/70 backdrop-blur rounded-xl shadow animate-float-slow"
            style={{
              width: icon.size,
              height: icon.size,
              top: `${i * 130 + 60}px`,
              right: `${icon.offset}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
