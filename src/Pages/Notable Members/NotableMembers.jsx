import styles from './NotableMembers.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ProductDataset } from "../../api/MockData.js";


import "swiper/css";

const MemberCard = ({ img }) => {
    return (
        <div className='shadow-lg m-4 p-6'>
            <img src={img} alt='product' />
        </div>
    );
};

const MemberLayout = () => {
    return (
        <div className='2xl:container bg-gray-100'>
            <div className='shadow-lg pt-6 p-6'>
                <div className="w-[100%] grid grid-cols-1 space-y-3">
                    <h1 className='w-[100%] mx-auto bg-gray-100 font-semibold text-[#0c6cb1] text-xl m-3 p-4 '>NOTABLE ALUMNI</h1>
                </div>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={20}
                    breakpoints={{
                        0: { slidesPerView: 1, spaceBetween: 20 },
                        480: { slidesPerView: 2, spaceBetween: 10 },
                        768: { slidesPerView: 3, spaceBetween: 10 },
                        1024: { slidesPerView: 4, spaceBetween: 50 },
                        1200: { slidesPerView: 5, spaceBetween: 50 }
                    }}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    pagination={{ clickable: false }}
                    navigation
                    modules={[Autoplay, Navigation]}
                    className="mySwiper">
                    {ProductDataset.map((e, index) => (
                        <SwiperSlide key={index + 1}>
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
