type ProjectCardProps = {
   image: string
   url?: string
   description: {
      title: string
      techStack: string
      detail: React.ReactElement
   }
}

export default function ProjectCard(props: ProjectCardProps) {
   const { image, url, description } = props
   
  return (
      <div className="swiper-slide">
         <div className="project-card-wrapper">
            <div className="project-img">
               <img src={image} alt={description.title} />
               <a href={url} target="blank" className="view-images-btn flex m-auto">
                  <p>Visit Website</p>
               </a>
            </div>

            <div className="project-detail">
               <a href={url} className="card-title" target="_blank">
                  {description.title}
               </a>
               <h4 className="pb-3 text-pretty" style={{ wordSpacing: '5px' }}>
                  {description.techStack}
               </h4>
               {description.detail}
            </div>
         </div>
      </div>
  )
}
