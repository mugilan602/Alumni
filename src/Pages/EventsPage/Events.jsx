import React from 'react';
import EventCard from '../../Components/EventCard';
import { Campus } from '../Campus/Campus';
import Navbar2 from "../Navbar/Navbar2";

function Events() {
    // Array of sample events
    const events = [
        {
            id: 1,
            image: '/images/Future skills for employment/image001.png',
            name: 'Future Skills for Employment',
            date: '2020-05-29 to 2020-05-31',
        },
        {
            id: 2,
            image: '/images/Alumni Meet 2018/image011.png',
            name: 'Alumni Meet 2018',
            date: '2018-06-16 10:00 AM',
        },
        {
            id: 3,
            image: '/images/Alumni Talk CSE/image070.gif',
            name: 'Career and Academic Opportunities',
            date: '2020-10-17 12:00 PM',
        },
        {
            id: 4,
            image: '/images/Alumni Talk CSE/image072.jpg',
            name: 'Optimization With Linear Programming',
            date: '2022-05-23 10:00 AM',
        },
        {
            id: 5,
            image: '/images/Alumni Talk CSE/image087.png',
            name: 'Alumni Talk on Production Management',
            date: '2020-06-12 6:00 PM',
        },
        {
            id: 6,
            image: '/images/Alumni Talk CSE/image037.png',
            name: 'Webinar On Service Industry',
            date: '2020-08-29 6:30 PM',
        },
        {
            id: 7,
            image: '/images/Alumni Talk CSE/image042.gif',
            name: 'Webinar On Cloud Computing',
            date: '2020-08-29 6:30 PM',
        },
        {
            id: 8,
            image: '/images/Alumni Talk CSE/image046.gif',
            name: 'Webinar On Devops Engineering',
            date: '2020-08-29 6:30 PM',
        },
        {
            id: 9,
            image: '/images/Alumni Talk CSE/image082.gif',
            name: 'Workshop on Mobile App Development',
            date: '2020-08-29 6:30 PM',
        }
    ];


    return (
        <>
            <Navbar2 />
            <Campus />
            {/* Heading for the Alumni Events */}
            <h1 className="text-center  text-[#005D99] text-3xl font-bold my-8">Sri Sairam Engineering College - Alumni Events</h1>

            {/* Event Cards Section */}
            <div className="flex justify-center px-4 ">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 ">
                    {events.map((event, index) => (
                        <EventCard
                            key={index}
                            id={event.id}
                            image={event.image}
                            eventName={event.name}
                            eventDate={event.date}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Events;
