import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ModalBox from '../ui/ModalBox';
import { createPortal } from 'react-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

type ProjectCardProps = {
   image: string
   verticalImage?: string
   url?: string
   showImages?: Array<string>
   description: {
      title: string
      techStack: string
      detail: React.ReactElement
   }
}

export default function ProjectCard(props: ProjectCardProps) {
   const { image, verticalImage, url, showImages, description } = props
   const [showModal, setShowModal] = useState(false);
   
  return (
   <>
      <div 
         className="mb-8 max-w-[350px] mx-auto border border-indigo-50 bg-white text-secondary shadow-lg rounded-xl overflow-hidden transition-all duration-500
         dark:text-darkSecondary dark:bg-bgDarkSecondary dark:shadow-md dark:shadow-black dark:border-black"
      >
         <div 
            className="relative flex items-center justify-center h-[290px] px-1 py-2 transition-all duration-500 
            bg-slate-100 dark:bg-slate-800
            md:h-[250px]
            lg:h-[290px]"
         >
            {!verticalImage && <img src={image} alt={description.title} />}
            {verticalImage && (
               <>
                  <img 
                     src={image} 
                     alt={description.title} 
                     className="absolute left-7 z-10 max-w-[80%] max-h-[80%] shadow-portfolioImg rounded-xl object-cover
                     sm:max-w-[70%] sm:max-h-[80%]
                     xl:w-[75%]" 
                  />
                  <img 
                     src={verticalImage} 
                     alt={description.title} 
                     className="absolute w-[45%] h-full top-0 right-0 object-cover object-top" 
                  />
               </>
            )}

            {url && (
               <a href={url} target="blank" className="absolute z-20 opacity-0 w-full h-full flex items-center justify-center cursor-pointer transition-all duration-300 
               bg-white/80 backdrop-blur-sm font-light hover:opacity-100
               dark:bg-black/70 dark:text-darkPrimary m-auto">
                  <p>Visit Website</p>
               </a>
            )}
            {showImages && (
               <button 
                  onClick={() => setShowModal(true)}
                  className="absolute z-20 opacity-0 w-full h-full flex items-center justify-center cursor-pointer transition-all duration-300 
                  bg-white/80 backdrop-blur-sm font-light hover:opacity-100
                  dark:bg-black/70 dark:text-darkPrimary m-auto"
               >
                  <p>View Images</p>
               </button>
            )}

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

      {/* create portal = ngerender langsung ke document.body, skip hirarki parent */}
      {showModal && createPortal(
         <ModalBox onClose={() => setShowModal(false)}>
            <Swiper
               modules={[Navigation, Pagination]}
               slidesPerView={1}
               loop={true}
               navigation={true}
               pagination={{ clickable: true }}
               breakpoints={{ 
                  640: {
                     spaceBetween: 20,
                  },
                  768: {
                     spaceBetween: 40,
                  },
                  1024: {
                     spaceBetween: 50,
                  },
                }}
               className='pb-10'
            >
               {showImages?.map((image, index) => (
                  <SwiperSlide 
                     key={index}
                     className='rounded-xl flex items-center justify-center
                     h-auto
                     
                     '
                  >
                     <img 
                        src={image} 
                        alt={description.title}
                        className="max-h-full object-contain rounded-xl shadow-lg
                        lg:max-h-[500px]"
                     />
                  </SwiperSlide>
               ))}
            </Swiper>
         </ModalBox>,
         document.body
      )}
   </>
  )
}
