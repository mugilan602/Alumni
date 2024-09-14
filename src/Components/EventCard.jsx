import React from 'react';
import { useNavigate } from 'react-router-dom';

const EventCard = ({ image, eventName, eventDate, id }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/event/${eventName}`);
    };

    return (
        <div
            className="bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 w-full max-w-md"
            onClick={handleClick}
        >
            <img
                src={image}
                alt={eventName}
                className="rounded-t-lg w-full h-[200px] object-cover"
            />
            <div className="p-6 text-center">
                <h3 className="text-xl font-semibold">{eventName}</h3>
                <p className="text-gray-600 text-lg">{eventDate}</p>
            </div>
        </div>
    );
};

export default EventCard;
