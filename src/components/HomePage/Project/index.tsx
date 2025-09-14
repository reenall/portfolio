import ProjectList from "../../ui/ProjectList";

export default function Project() {
  return (
    <section id="portfolio" className="py-44">
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
      </div>
    </section>
  )
}
