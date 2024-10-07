import styles from './NotableMembers.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ProductDataset } from "../../api/MockData.js";

import "swiper/css";
import "swiper/css/navigation"; // Import Swiper navigation styles

const MemberCard = ({ img }) => {
    return (
        <div className='shadow-lg m-4 p-6 bg-white'>
            <img src={img} alt='Notable Alumni' className="w-full h-auto object-cover" /> {/* Ensure image is responsive */}
        </div>
    );
};

const MemberLayout = () => {
    return (
        <div className='2xl:container bg-gray-100 px-4 py-6'> {/* Add padding for better spacing on mobile */}
            <div className=' p-4'>
                <div className="text-left mb-4"> {/* Center text for better readability on mobile */}
                    <h1 className="  font-poppins text-xl md:text-2xl font-medium tracking-widest text-blue-700 uppercase">Notable Members</h1>
                </div>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={20}
                    breakpoints={{
                        0: { slidesPerView: 1, spaceBetween: 10 },  // Single slide on very small screens
                        480: { slidesPerView: 2, spaceBetween: 10 }, // 2 slides on mobile
                        768: { slidesPerView: 3, spaceBetween: 15 }, // 3 slides on tablets
                        1024: { slidesPerView: 4, spaceBetween: 20 }, // 4 slides on medium screens
                        1200: { slidesPerView: 5, spaceBetween: 20 }  // 5 slides on large screens
                    }}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    pagination={{ clickable: true }}  // Enable pagination for better mobile experience
                    navigation
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                    {ProductDataset.map((e, index) => (
                        <SwiperSlide key={index}>
                            <MemberCard img={e.image_url} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

const NotableMembers = () => {
    return (
        <>
            <MemberLayout />
        </>
    );
};

export default NotableMembers;
