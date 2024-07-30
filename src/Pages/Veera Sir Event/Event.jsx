import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import './Event.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar2 from '../Navbar/Navbar2';

const Event = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Speed in milliseconds
        pauseOnHover: false, // Pauses autoplay on hover
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className="full mb-8">
                <Navbar2 />
                <div className="hero-1">
                    <div className="hero-txt">
                        <h1 className="font-bold text-center text-white">Celebrating Our Proud Alumni</h1>
                        <p className=" text-center text-sm text-white"> The Glory of our Nation is the Pride of Sairam ! Veeramuthuvel - Chandrayan 3 <span><br /></span>
                            leading the way as the Mission Director. Our alma mater shines among the stars! <span><br /></span>
                            Celebrations at our Campus.</p>
                    </div>
                </div>
                <div className='2xl:container bg-white'>
                    <div className="w-[100%]  grid  grid-cols-1 space-y-3 ">
                        <h1 className='w-[100%] mx-auto bg-white font-semibold text-[#0c6cb1] text-xl m-5 p-4 shadow-lg'>GALLERY</h1>
                    </div>
                    <div className=" w-[100%] mx-auto">
                        <Slider {...settings}>
                            <div className="imag-box">
                                <img src="https://sairam.edu.in/wp-content/uploads/2023/10/Veera-Muthuvel-13.jpg" alt="img1" />
                            </div>
                            <div className="imag-box">
                                <img src="https://sairam.edu.in/wp-content/uploads/2023/10/Veera-Muthuvel-5.jpg" alt="img2" />
                            </div>
                            <div className="imag-box">
                                <img src="https://sairamgroup.in/wp-content/uploads/2023/10/Veera-Muthuvel-8.jpg" alt="img5" />
                            </div>
                            <div className="imag-box">
                                <img src="https://sairamgroup.in/wp-content/uploads/2023/10/Veera-Muthuvel-19.jpg" alt="img6" />
                            </div>
                            <div className="imag-box">
                                <img src="https://sairamgroup.in/wp-content/uploads/2023/10/Veera-Muthuvel-6.jpg" alt="img7" />
                            </div>
                            <div className="imag-box">
                                <img src="https://sairamgroup.in/wp-content/uploads/2023/10/Veera-Muthuvel-10.jpg" alt="img8" />
                            </div>
                            <div className="imag-box">
                                <img src="https://sairam.edu.in/wp-content/uploads/2023/10/Veera-Muthuvel-14.jpg" alt="img9" />
                            </div>
                            <div className="imag-box">
                                <img src="https://sairam.edu.in/wp-content/uploads/2023/10/Veera-Muthuvel-11.jpg" alt="img10" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Event;
