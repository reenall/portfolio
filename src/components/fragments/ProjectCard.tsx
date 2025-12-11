import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ModalBox from '../ui/ModalBox';
import { createPortal } from 'react-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

type ProjectCardProps = {
   horizontalImage?: string
   verticalImage?: string
   mobileImages?: {
      mainImage: string,
      verticalImage: string
   }
   webUrl?: string
   description: {
      title: string
      techStack: string
      detail: React.ReactElement
   }
   modalBoxMedia?: {
      images?: Array<string>
      videos?: Array<{poster: string, video: string}>
   }
   onDevelopment?: boolean
}

export default function ProjectCard(props: ProjectCardProps) {
   const { horizontalImage, verticalImage, mobileImages, webUrl, modalBoxMedia, description, onDevelopment=false } = props
   const [showModal, setShowModal] = useState(false);
   
  return (
   <>
      <div 
         className="mb-8 max-w-[350px] mx-auto border border-indigo-50 bg-white text-secondary shadow-lg rounded-xl overflow-hidden transition-all duration-500
         dark:text-darkSecondary dark:bg-bgDarkSecondary dark:shadow-md dark:shadow-black dark:border-black"
      >
         {/* Project Image */}
         <div 
            className="relative flex items-center justify-center h-[290px] px-1 py-2 transition-all duration-500 overflow-hidden
            bg-slate-100 dark:bg-slate-800
            md:h-[250px]
            lg:h-[290px]"
         >
            {horizontalImage && !verticalImage && 
               <img src={horizontalImage} alt={description.title} 
            />}
            {verticalImage && (
               <>
                  <img 
                     src={horizontalImage} 
                     alt={description.title} 
                     className="absolute left-7 z-10 max-w-[80%] max-h-[80%] shadow-portfolioImg rounded-xl object-cover object-top
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
            {mobileImages && (
               <>
                  <img 
                     src={mobileImages?.mainImage} 
                     alt={description.title} 
                     className="absolute left-7 z-10 max-w-[70%] shadow-portfolioImg rounded-t-xl object-cover object-top border-t-2 border-r-2 border-slate-300 dark:border-slate-800 top-20 transition-all duration-500
                     sm:max-w-[70%]
                     xl:w-[75%]" 
                  />
                  <img 
                     src={mobileImages?.verticalImage} 
                     alt={description.title} 
                     className="absolute w-[45%] h-full top-0 right-0 object-cover object-top" 
                  />
               </>
            )}

            {webUrl ? (
               <a href={webUrl} 
                  target="blank" 
                  className="absolute w-full h-full flex items-center justify-center z-20 opacity-0 hover:opacity-100 transition-all duration-300 bg-white/80 backdrop-blur-sm font-light
                  dark:bg-black/70 dark:text-darkPrimary"
               >
                  <p>Visit Website</p>
               </a>
            ) : (
               <button 
                  onClick={() => setShowModal(true)}
                  className="absolute w-full h-full z-20 opacity-0 hover:opacity-100 transition-all duration-300 bg-white/80 backdrop-blur-sm font-light
                  dark:bg-black/70 dark:text-darkPrimary"
               >
                  {!modalBoxMedia?.videos && (
                     <p>View Images</p>
                  )}
                  {modalBoxMedia?.videos && (
                     <p>View 
                        <span className='block'>Images & Videos</span>
                     </p>
                  )}
               </button>
            )}
         </div>
         {/* Project Detail */}
         <div className="project-detail">
            <div className='flex items-center justify-between mt-3 mb-5'>
               <a 
                  href={webUrl} 
                  target="_blank"
                  className={`card-title w-max 
                     ${!webUrl && 'cursor-default'}
                  `}
               >
                  {description.title}
               </a>

               {onDevelopment && (
                  <div className='relative flex items-center px-2 bg-primaryIconColor rounded-full animate-pulse'>
                     <p className='text-white'>on development</p>
                  </div>
               )}
            </div>
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
               spaceBetween={20}
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
            >
               {modalBoxMedia?.images?.map((image, index) => (
                  <SwiperSlide 
                     key={index}
                     className='max-h-[80vh] h-auto pb-10 overflow-hidden rounded-xl flex items-center justify-center'
                  >
                     <img 
                        src={image} 
                        alt={description.title}
                        className="max-h-full object-contain rounded-xl shadow-lg dark:shadow-slate-800
                        lg:max-h-[500px]"
                     />
                  </SwiperSlide>
               ))}
               {modalBoxMedia?.videos?.map((item, index) => (
                  <SwiperSlide 
                     key={index}
                     className='max-h-[80vh] h-auto pb-10 overflow-hidden rounded-xl flex items-center justify-center'
                  >
                     <video 
                        preload="none"
                        controls
                        muted 
                        src={item.video} 
                        poster={item.poster}
                        className="max-h-full object-contain rounded-xl shadow-lg dark:shadow-slate-800
                        lg:max-h-[500px]"
                     >
                        <p className='text-red-500'>
                           your browser does not support the video element
                        </p>
                     </video>
                  </SwiperSlide>
               ))}
            </Swiper>
         </ModalBox>,
         document.body
      )}
   </>
  )
}
