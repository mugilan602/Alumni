import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from './data.json'; // Import the data.json file
import Navbar2 from '../Navbar/Navbar2';
import { Campus } from '../Campus/Campus';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';

const EventDetails = () => {
    const { name } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        // Find the event that matches the name from the URL
        const foundEvent = data.find(event => event.name === name);
        if (foundEvent) {
            setEvent(foundEvent);
        }
    }, [name]);

    if (!event) {
        return <div className="flex justify-center items-center min-h-screen ">Loading...</div>;
    }

    return (
        <>
            <Navbar2 />
            <Campus />
            <div className="container mx-auto p-6 ">
                {/* Event Name Heading */}
                <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center underline text-[#005D99] p-4 rounded-md">
                    {event.name}
                </h1>

                {/* Carousel Section */}
                <div className="relative w-full max-w-xl mx-auto ">
                    <Carousel
                        autoPlay
                        interval={3000}
                        infiniteLoop
                        showThumbs={false}
                        showStatus={false}
                        showIndicators={true}
                        dynamicHeight={false}
                        showArrows={false}
                        stopOnHover={false}
                    >
                        {event.images.map((image, index) => (
                            <div key={index}>
                                <img
                                    src={image}
                                    alt={`Event image ${index + 1}`}
                                    className="rounded-lg object-contain"
                                    style={{ height: '450px', width: '100%' }}
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>

                {/* Description Heading */}
                <div className='flex justify-center '>
                    <div className="mt-6  text-center w-[90%] sm:text-left">
                        <h2 className="text-2xl sm:text-3xl font-semibold mb-4  text-[#005D99]  rounded-md">
                            Description
                        </h2>
                        <p className="text-lg  text-justify leading-relaxed">{event.description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventDetails;
