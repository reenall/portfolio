import { Fragment } from "react/jsx-runtime";

export default function EducationPath() {
  const leftColumnTechs = [
    { icon: "./img/education/js3.png", name: "JavaScript", alt: "js logo" },
    { icon: "./img/education/ts1.png", name: "TypeScript", alt: "ts logo" },
    { icon: "./img/education/react1.png", name: "React Native", alt: "react logo" },
    { icon: "./img/education/react1.png", name: "React.js", alt: "react logo" },
    { icon: "./img/education/nextjs1.png", name: "Next.js", alt: "nextjs logo" },
    { icon: "./img/education/nestjs1.png", name: "Nest.js", alt: "nest.js logo" },
    { icon: "./img/education/nodejs1.png", name: "Node.js", alt: "node.js logo" },
    { icon: "./img/education/expressjs.png", name: "Express.js", alt: "express.js logo" }
  ];

  // Data untuk daftar teknologi - kanan
  const rightColumnTechs = [
    { icon: "./img/education/php6.png", name: "PHP", alt: "php logo" },
    { icon: "./img/education/laravel1.png", name: "Laravel", alt: "laravel logo" },
    { icon: "./img/education/mongoDB.png", name: "MongoDB", alt: "mongoDB logo" },
    { icon: "./img/education/mysql1.png", name: "MySQL", alt: "mysql logo" },
    { icon: "./img/education/postgre.png", name: "PostgreSQL", alt: "postgre logo" },
    { icon: "./img/education/css1.png", name: "CSS", alt: "css logo" },
    { icon: "./img/education/bootstrap1.png", name: "Bootstrap", alt: "bootstrap logo" },
    { icon: "./img/education/tailwind1.png", name: "Tailwind CSS", alt: "tailwind logo" }
  ];
  
  return (
    <section id="education" className="py-44">
      <div className="container">
        <div className="w-full px-4 mb-20">
          <div className="max-w-xl text-start">
            <h4 className="first-title-stripe">Learning Path</h4>
            <h2 className="second-title">Education History</h2>
          </div>
        </div>

        <div className="flex flex-wrap w-full px-4">
          <div className="w-full pb-20 flex gap-7 lg:pb-0 lg:w-1/2">
            <div className="mt-1 w-[2px] h-full bg-[#f1f1f1] dark:bg-darkSecondary transition-all duration-500"></div>
            <div>
              <div className="mb-12">
                <h3 className="dot-line text-lg font-medium text-primary dark:text-darkPrimary">Darma Persada University</h3>
                <p className="pt-2 text-secondary dark:text-darkSecondary">Bachelor's Degree - Informatics Engineering</p>
                <h3 className="pt-5 font-medium text-primary dark:text-darkPrimary">2017 - 2023</h3>
              </div>
              <div className="mb-12">
                <h3 className="dot-line text-lg font-medium text-primary dark:text-darkPrimary">SMK Global Prima Islamic School</h3>
                <p className="pt-2 text-secondary dark:text-darkSecondary">Computer and Network Engineering</p>
                <h3 className="pt-5 font-medium text-primary dark:text-darkPrimary">2014 - 2017</h3>
              </div>
            </div>
          </div>

          <div className="w-full pb-20 lg:pb-0 lg:w-1/2 text-secondary dark:text-darkSecondary">
            <p className="leading-7 text-pretty">
             For over 2 years, I've been deepening my knowledge in Full-Stack development alongside my formal studies by experimenting with new technologies and frameworks. Below is a list of my skills in both web and mobile development
            </p>

            <div className="flex flex-wrap pt-7">
              <ul className="w-1/2">
                {leftColumnTechs.map((tech, index) => (
                  <Fragment key={index}>
                    <TechItem icon={tech.icon} name={tech.name} />
                  </Fragment>
                ))}
              </ul>

              <ul className="w-1/2">
                {rightColumnTechs.map((tech, index) => (
                  <Fragment key={index}>
                    <TechItem icon={tech.icon} name={tech.name} />
                  </Fragment>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const TechItem = ({ icon, name }: { icon: string, name: string }) => (
  <li>
    <img src={icon} alt={`${name} icon`} />
    <span>{name}</span>
  </li>
);