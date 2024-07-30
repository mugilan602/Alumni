import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { EventDataset } from "../../api/MockData1.js";
import "swiper/css";
import Navbar2 from "../Navbar/Navbar2.jsx";
import { Campus } from "../Campus/Campus.jsx";

const EventsCard = ({ img }) => {
  return (
    <div className="shadow-lg m-4 p-6">
      <img
        src={img}
        alt="product"
        className="h-[500px] w-[450px] object-cover rounded-lg"
      />
    </div>
  );
};

const EventsLayout = () => {
  return (
    <div className="2xl:container bg-white">
      <div className=" m-5 p-6">
        <div className="w-[100%] grid grid-cols-1 space-y-3">
          <h1 className="w-[100%] mx-auto bg-white font-semibold text-[#0c6cb1] text-xl m-3 p-4">
            EVENTS
          </h1>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 20 },
            599: { slidesPerView: 2, spaceBetween: 10 },
            799: { slidesPerView: 3, spaceBetween: 10 },
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: false }}
          navigation
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {EventDataset.map((e) => (
            <SwiperSlide key={e.team_id}>
              <EventsCard img={e.image_url} />
              <div className="font-semibold m-6 text-base lg:text-xl">
                <p>
                  {e.para}
                </p>
              </div>
              <div className="flex space-x-7 m-6">
                <a href="#">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                    style={{ borderRadius: "20px" }} // Adjust the value to make the button more oval
                  >
                    Event Date
                  </button>
                </a>
                <a href={e.href}>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                    style={{ borderRadius: "20px" }} // Adjust the value to make the button more oval
                  >
                    Explore
                  </button>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const EventsPageLayout = () => {
  return (
    <>
      <Navbar2 />
      <Campus />
      <EventsLayout />
    </>
  );
};

export default EventsPageLayout;