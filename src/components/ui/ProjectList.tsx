import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import styles Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import ProjectCard from '../fragments/ProjectCard';
import { useRef } from 'react';

const ProjectList = () => {
  const swiperRef = useRef<any>(null);

  return (
    <div className='relative'>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay]}
        navigation={
          {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 60,
            }
          }}
        className='pb-10 lg:mx-20'
      >
        {/* Muse app (mobile) */}
        <SwiperSlide>
          <ProjectCard
            mobileImages={
              {
                mainImage: '/img/project/Muse-app/dashboard.PNG',
                verticalImage: '/img/project/Muse-app/home1.PNG'
              }
            }
            description={
              {
                title: "AI Video Platform - Mobile app",
                techStack: "React Native | Expo | Supabase",
                detail: 
                <>
                  <h4 className="card-sub-title">About</h4>
                  <h4>Mobile platform yang dirancang untuk berbagi video hasil generate AI. Dengan fitur ini, user dapat berbagi prompt yang digunakan dalam mengenerate video tersebut untuk dapat dipelajari oleh user lain</h4>
                </>
              }
            }
            modalBoxMedia={{ 
              images: [
                '/img/project/Muse-app/dashboard.PNG',
                '/img/project/Muse-app/home1.PNG',
                '/img/project/Muse-app/home2.PNG',
              ],
              videos: [
                {
                  poster: '/img/project/Muse-app/dashboard.PNG', 
                  video: '/img/project/Muse-app/video/muse app demo.MP4'
                },
              ]
            }}
          />
        </SwiperSlide>
        {/* DevClub UI */}
        <SwiperSlide>
          <ProjectCard
            horizontalImage="./img/project/DevClub-UI.png"
            webUrl="https://devclub-ui.vercel.app/"
            description={
              {
                title: "React Component Library",
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
        </SwiperSlide>
        {/* Mono Store */}
        <SwiperSlide>
          <ProjectCard
            horizontalImage="./img/project/mono-store-2.png" 
            webUrl="https://mono-store-seven.vercel.app/"
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
        </SwiperSlide>
        {/* E-Commerce */}
        <SwiperSlide>
          <ProjectCard
            horizontalImage="./img/project/next-store1.png"
            webUrl="https://reenall-next-store.vercel.app/"
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
        </SwiperSlide>
        {/* E-Commerce UI */}
        <SwiperSlide>
          <ProjectCard
            horizontalImage="/img/project/ecommerce1.png"
            verticalImage='/img/project/ecommerce2.png'
            webUrl="https://reenall.github.io/lorem-store/"
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
        </SwiperSlide>
        {/* MERN Blog */}
        <SwiperSlide>
          <ProjectCard
            horizontalImage="./img/project/mern-blog.png"
            webUrl="https://mern-blog-seven-sage.vercel.app/"
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
        </SwiperSlide>
        {/* Tic Tac Toe */}
        <SwiperSlide>
          <ProjectCard
            horizontalImage="/img/project/tic-tac-toe2.png"
            verticalImage='/img/project/tic-tac-toe-v-1.png'
            webUrl="https://reenall.github.io/tic-tac-toe/"
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
        </SwiperSlide>
        {/* Movie API */}
        <SwiperSlide>
          <ProjectCard
            horizontalImage="./img/project/movies-h-1.png"
            verticalImage='./img/project/movies-v-1.png'
            webUrl="https://reenall.github.io/movies-omdb/"
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
        </SwiperSlide>
        {/* Laravel Blog */}
        <SwiperSlide>
          <ProjectCard
            horizontalImage="/img/project/laravel-main-h.png"
            verticalImage='/img/project/laravel-main-v.png'
            modalBoxMedia={{ 
              images: [
                '/img/project/laravel-main-h.png',
                '/img/project/laravel-categories.png',
                '/img/project/laravel-dashboard.png',
              ]
             }}
            description={
              {
                title: "Blog Website",
                techStack: "Laravel | Bootstrap | MySQL",
                detail: 
                <>
                  <h4 className="card-sub-title">Features</h4>
                    <ul className="mb-3">
                      <li>Login Admin</li>
                      <li>Post Management</li>
                      <li>Terintegrasi dengan Database</li>
                    </ul>
                </>
              }
            }
          />
        </SwiperSlide>
      </Swiper>

      <div 
        className="swiper-button-next absolute -translate-y-5" 
        onClick={() => swiperRef.current?.swiper.slidePrev()}
      />
      <div 
        className="swiper-button-prev absolute -translate-y-5" 
        onClick={() => swiperRef.current?.swiper.slideNext()}
      />
    </div>
  );
};

export default ProjectList;