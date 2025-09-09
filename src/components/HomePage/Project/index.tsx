import ProjectCard from "../../fragments/ProjectCard";

export default function Project() {
  return (
    <section id="project" className="py-44">
      <div className="container">
        <div className="w-full px-4">
          <div className="text-start mb-20">
            <h4 className="first-title-stripe">Portfolio</h4>
            <h2 className="second-title">Project List</h2>
          </div>
        </div>

        <div className="swiper">
          <div className="projectList mb-10 overflow-hidden lg:mx-14">
            <div className="swiper-wrapper pt-10">

              {/* Project - 1 */}
              <ProjectCard
                image="./img/project/DevClub-UI.png"
                url="https://devclub-ui.vercel.app/"
                description={
                  {
                    title: "TESSSTING",
                    techStack: "Next.js | Tailwind CSS | TypeScript",
                    detail: 
                    <>
                      <h4 className="card-sub-title">About</h4>
                      <h4>Component library yang menyediakan component-component React.js yang reuseable untuk memudahkan developer dalam membuat UI.</h4>
                      <h4 className="mt-5">Website ini dirancang secara modular dan scalable, memungkinkan pertumbuhan dan penambahan content di masa depan.</h4>
                    </>
                  }
                }
              />

              <ProjectCard
                image="./img/project/mono-store-2.png" 
                url="https://mono-store-seven.vercel.app/"
                description={
                  {
                    title: "Public E-Commerce API",
                    techStack: "Next.js | Nest.js | MongoDB | Tailwind CSS | TypeScript  | Zod",
                    detail: 
                    <>
                      <h4 className="card-sub-title">About</h4>
                      <h4>Program ini menyediakan layanan API untuk membantu proses development Front-end, terutama untuk pengembangan fashion E-Commerce.</h4>
                      <ul className="mt-5">
                        <p className="mb-3">Links</p>
                        <li>Main Page: https://mono-store-seven.vercel.app/</li>
                        <li>API Documentation: https://mono-store-seven.vercel.app/api-docs/</li>
                      </ul>
                    </>
                  }
                }
              />

              <ProjectCard
                image="./img/project/next-store1.png"
                url="https://reenall-next-store.vercel.app/"
                description={
                  {
                    title: "E-Commerce",
                    techStack: "Next.js | TypeScript | Firebase | Midtrans | REST API | JWT | Sass",
                    detail: 
                    <>
                      <ul>
                        <h4 className="card-sub-title">Visitor Account</h4>
                        <li>E-mail: visitor@next-store.com</li>
                        <li>Password: visitor</li>
                        <li className="mt-3">
                          Hak akses tambahan:
                          <span className="block"> Dapat mengakses Admin Panel, namun tidak dapat melakukan perubahan data. </span>
                        </li>
                      </ul>
                      <ul>
                        <h4 className="card-sub-title">Payment Simulator</h4>
                        <li>Generate kode pembayaran pada halaman checkout.</li>
                        <li>Input kode pembayaran ke <a className="text-primaryIconColor" href="https://simulator.sandbox.midtrans.com" target="_blank">Midtrans simulator</a> sesuai dengan metode pembayaran yang dipilih.</li>
                      </ul>

                      <ul className="mt-5">
                        <p className="mb-3">Features</p>
                        <li>Login & Account Settings</li>
                        <li>User & Product Management</li>
                        <li>Payment Gateway</li>
                        <li>Order History</li>
                      </ul>
                    </>
                  }
                }
              />

              <ProjectCard
                image="./img/project/ecommerce1.png"
                url="https://reenall.github.io/lorem-store/"
                description={
                  {
                    title: "E-Commerce UI",
                    techStack: "React.js | React-Router | Tailwind CSS",
                    detail: 
                    <>
                      <h4 className="card-sub-title">About</h4>
                      <h4>Program ini dibuat menggunakan data product dan data users dari layanan <a href="https://fakestoreapi.com/" target="_blank" className="hover:text-blue-400">Fake Store API.</a></h4>

                      <ul className="mt-5">
                        <p className="mb-3">Notes</p>
                        <li>Karna batasan fitur dari github pages, fitur pengelolaan login dan view product detail pada program ini tidak dapat digunakan.</li>
                        <li className="mt-3">Gambar product pada halaman utama diubah dengan gambar static untuk keperluan kerapihan UI.</li>
                      </ul>
                    </>
                  }
                }
              />

              <ProjectCard
                image="./img/project/mern-blog.png"
                url="https://mern-blog-seven-sage.vercel.app/"
                description={
                  {
                    title: "MERN Blog",
                    techStack: "MongoDB | Express.js | React.js | Node.js | TypeScript | Tailwind CSS | Redux | React-Router | REST API | JWT",
                    detail: 
                    <>
                      <ul>
                        <h4 className="card-sub-title">Visitor Account</h4>
                        <li>E-mail: visitor@mern.com</li>
                        <li>Password: visitor</li>
                        <li className="mt-3">
                          Hak akses tambahan:
                          <span className="block">Dapat mengakses UI Create/Edit/Delete blog post, namun tidak dapat melakukan perubahan data.</span>
                        </li>
                      </ul>
                    </>
                  }
                }
              />

              <ProjectCard
                image="./img/project/tic-tac-toe2.png"
                url="https://reenall.github.io/tic-tac-toe/"
                description={
                  {
                    title: "Game Tic Tac Toe",
                    techStack: "React.js | Tailwind CSS",
                    detail: 
                    <>
                      <h4 className="card-sub-title">About</h4>
                      <h4 className="mb-5">
                        Algoritma permainan ini adalah, jika di antara player X dan O ada yang telah memenuhi 3 kolom dengan sejajar secara vertical, horizontal, ataupun diagonal tanpa terputus, maka ia dinyatakan sebagai pemenang dan
                        permainan dihentikan.
                      </h4>
                      <h4>Program ini juga memiliki fitur Time Travel yang dibuat menggunakan state pada React.js untuk dapat mengembalikan permainan ke keadaan sebelumnya untuk mengulang langkah permainan.</h4>
                    </>
                  }
                }
              />

              <ProjectCard
                image="./img/project/movies-h-1.png"
                url="https://reenall.github.io/movies-omdb/"
                description={
                  {
                    title: "Movies Web - API",
                    techStack: "jQuery | Tailwind CSS",
                    detail: 
                    <>
                      <h4 className="card-sub-title">About</h4>
                      <h4>
                        Program ini dibuat menggunakan public API dari
                        <a href="https://omdbapi.com/" target="blank" className="hover:text-blue-400">OMDb.</a>
                        Program ini menggunakan data film seperti judul, poster, plot, penulis, dan data film lainnya dari layanan tersebut.
                      </h4>
                    </>
                  }
                }
              />

              {/* <div className="swiper-slide">
                <div className="project-card-wrapper">
                  <div className="project-img">
                    <img src="./img/project/laravel-main-h.png" alt="Laravel Blog" className="horizontal-img brightness-110" />
                    <img src="./img/project/laravel-main-v.png" alt="Laravel Blog" className="vertical-img brightness-110" />
                    <button onclick="pageReadBtn(projectLaravel)" className="view-images-btn">
                      <p>View Images</p>
                    </button>
                  </div>

                  <div className="project-detail">
                    <button className="card-title hover:cursor-pointer w-full text-left" onclick="pageReadBtn(projectLaravel)">Blog Website</button>
                    <h4 className="pb-3 text-pretty" style="word-spacing: 5px">Laravel | Bootstrap | MySQL</h4>
                    <h4 className="card-sub-title">Features</h4>
                    <ul className="mb-3">
                      <li>Login Admin</li>
                      <li>Post Management</li>
                      <li>Terintegrasi dengan Database</li>
                    </ul>
                  </div>
                </div>
              </div> */}
            </div>

            <div className="swiper-button-next swiper-navBtn"></div>
            <div className="swiper-button-prev swiper-navBtn"></div>
            <div className="swiper-pagination"></div>
          </div>
        </div>

        {/* <!-- View images 1 (laravel)--> */}
        <div className="project-page-laravel hidden fixed items-center z-[1000] top-0 right-0 bottom-0 left-0 bg-slate-100/80 backdrop-blur-md dark:bg-bgDarkPrimary/30">
          <div className="flex mx-auto px-10 w-full sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%]">
            <img src="./img/project/laravel-blog.png" className="jumbo-img rounded-xl shadow-md" />
          </div>

          <div className="thumbnail-list absolute bottom-20 right-1/2 translate-x-[50%] flex gap-5 h-24 w-max max-w-full p-3 bg-slate-200 shadow-md rounded-xl dark:bg-bgDarkPrimary md:bottom-10 lg:bottom-5">
            <div className="group">
              <img src="./img/project/laravel-blog.png" className="thumbnail-img" />
            </div>
            <div className="group">
              <img src="./img/project/laravel-categories.png" className="thumbnail-img" />
            </div>
            <div className="group">
              <img src="./img/project/laravel-dashboard.png" className="thumbnail-img" />
            </div>
          </div>

          <button
            className="group absolute flex left-0 top-1/2 -translate-y-7 z-[1001] w-12 h-12 justify-center items-center rounded-r-full bg-slate-200 hover:bg-slate-400 cursor-pointer transition-all duration-300 ease-in-out sm:-translate-x-1 lg:left-auto lg:right-14 lg:rounded-full xl:right-16"
            onclick="pageCloseBtn(projectLaravel)"
          >
            <p className="text-2xl font-light text-slate-500 group-hover:text-white">X</p>
          </button>
        </div>
        {/* <!-- END View images 1 --> */}
      </div>
    </section>
  )
}
