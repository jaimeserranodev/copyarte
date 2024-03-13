"use client";


//import swiper react components
import {Swiper, SwiperSlide} from "swiper/react";

// import swiper styles;
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {
RxCrop,
RxPencil2,
RxDesktop,
RxReader,
RxRocket,
RxArrowTopRight,
} from "react-icons/rx";

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';



// data
const serviceData = [
{
    icon: <RxCrop />,
    title: 'Front-End',
    description: 'Developing the user-facing part of websites with HTML, CSS, JS.',
},
{
    icon: <RxReader />,
    title: 'Back-End',
    description: 'Server, database, and application logic behind the scenes.',
},
{
    icon: <RxDesktop />,
    title: 'Git Control',
    description: 'Manage versioning and collaboration in source code with Git.',
},
{
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Crafting visual aesthetics and user interfaces for digital products.',
},
{
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Optimize website visibility and ranking in search engine results.',
},
];

const ServiceSlider = () => {
return (
    <div className="mx-auto " style={{ width: '1000px' }}> {/* Agrega esta línea para envolver el componente Swiper con un div que tiene margen */}
    <Swiper
        breakpoints={{
        320: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        }}
        freeMode={true}
        pagination={{
        clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="h-[240px] sm:h-[340px]"
    >
        {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
            <div 
                className="bg-tangerine-300 h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.5)] transition-all duration-300"
                style={{ width: '250px' }} // Aplicar ancho específico aquí
            >
            {/* icon */}
            <div className="text-4xl text-accent mb-4">{item.icon}</div>
            {/* title & desc */}
            <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal ">
                {item.description}
                </p>
            </div>
            {/* arrow */}
            <div className="text-3xl ">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
            </div>
            </div>
        </SwiperSlide>
        ))}
    </Swiper>
    </div>
);
};


export default ServiceSlider;
