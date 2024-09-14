import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from './data.json'; // Import the data.json file
import Navbar2 from '../Navbar/Navbar2';
import { Campus } from '../Campus/Campus';

const EventDetails = () => {
    const { name } = useParams();
    const [event, setEvent] = useState(null);
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        // Find the event that matches the name from the URL
        const foundEvent = data.find(event => event.name === name);
        if (foundEvent) {
            setEvent(foundEvent);
        }
    }, [name]);

    useEffect(() => {
        if (event && event.images.length > 1) {
            // Set up interval for automatic scrolling
            const intervalId = setInterval(() => {
                nextImage();
            }, 3000); // Change image every 3 seconds

            // Cleanup interval on component unmount
            return () => clearInterval(intervalId);
        }
    }, [event, currentImage]); // Only restart interval if event or currentImage changes

    // Function to go to the next image
    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % event.images.length);
    };

    // Function to go to the previous image
    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + event.images.length) % event.images.length);
    };

    if (!event) {
        return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
    }

    return (
        <>
            <Navbar2 />
            <Campus />
            <div className="container mx-auto p-6">
                <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">{event.name}</h1>

                {/* Carousel Section */}
                <div className="relative w-full max-w-4xl mx-auto">
                    <img
                        src={event.images[currentImage]}
                        alt={`Event ${currentImage + 1}`}
                        className="w-full h-auto object-contain max-h-96 sm:max-h-full rounded-lg shadow-md"
                    />

                    {/* Prev Button */}
                    <button
                        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={prevImage}
                    >
                        Prev
                    </button>

                    {/* Next Button */}
                    <button
                        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={nextImage}
                    >
                        Next
                    </button>

                    {/* Image Counter */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full shadow-md">
                        {currentImage + 1} / {event.images.length}
                    </div>
                </div>

                {/* Description Section */}
                <div className="mt-6 text-center sm:text-left">
                    <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Description</h2>
                    <p className="text-lg leading-relaxed">{event.description}</p>
                </div>
            </div>
        </>
    );
};

export default EventDetails;
