import React from 'react'

export default function EducationPath() {
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
              Selain di pendidikan formal, dalam lebih dari 2 tahun terakhir saya juga terus mempelajari materi-materi pemrograman melalui pembelajaran online untuk mengembangkan kemampuan pemrograman saya. Berikut adalah daftar teknologi
              pemrograman yang saya pelajari
            </p>

            <div className="flex flex-wrap pt-7">
              <ul className="w-1/2">
                <li><img src="./img/education/js3.png" alt="js logo" />JavaScript</li>
                <li><img src="./img/education/ts1.png" alt="js logo" />TypeScript</li>
                <li><img src="./img/education/react1.png" alt="react logo" />React.js</li>
                <li><img src="./img/education/nextjs1.png" alt="react logo" />Next.js</li>
                <li><img src="./img/education/nestjs1.png" alt="nest.js logo" />Nest.js</li>
                <li><img src="./img/education/nodejs1.png" alt="node.js logo" />Node.js</li>
                <li><img src="./img/education/expressjs.png" alt="express.js logo" />Express.js</li>
              </ul>

              <ul className="w-1/2">
                <li><img src="./img/education/php6.png" alt="php logo" />PHP</li>
                <li><img src="./img/education/laravel1.png" alt="laravel logo" />Laravel</li>
                <li><img src="./img/education/mongoDB.png" alt="mongoDB logo" />MongoDB</li>
                <li><img src="./img/education/mysql1.png" alt="mysql logo" />MySQL</li>
                <li><img src="./img/education/css1.png" alt="css logo" />CSS</li>
                <li><img src="./img/education/bootstrap1.png" alt="bootstrap logo" />Bootstrap</li>
                <li><img src="./img/education/tailwind1.png" alt="tailwind logo" />Tailwind CSS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
