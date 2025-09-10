import ProjectList from "../../ui/ProjectList";

export default function Project() {
  return (
    <section id="project" className="py-44">
      <div className="container">
        <div className="w-full px-4">
          <div className="text-start mb-32">
            <h4 className="first-title-stripe">Portfolio</h4>
            <h2 className="second-title">Project List</h2>
          </div>
        </div>

        <div className="mb-10 ">
          <ProjectList />
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

          {/* <button
            className="group absolute flex left-0 top-1/2 -translate-y-7 z-[1001] w-12 h-12 justify-center items-center rounded-r-full bg-slate-200 hover:bg-slate-400 cursor-pointer transition-all duration-300 ease-in-out sm:-translate-x-1 lg:left-auto lg:right-14 lg:rounded-full xl:right-16"
            onclick="pageCloseBtn(projectLaravel)"
          >
            <p className="text-2xl font-light text-slate-500 group-hover:text-white">X</p>
          </button> */}
        </div>
        {/* <!-- END View images 1 --> */}
      </div>
    </section>
  )
}
