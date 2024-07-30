import React, { useState, useEffect } from "react";
import "./Events.css";

function Events() {
   
    return (
        <div className="safety-container">
            <div className="card-container">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                    <div className="events-card flex-1 w-full lg:w-1/2">
                        <p className="font-bold px-4 py-4 md:px-6 md:py-5 lg:px-10 lg:py-6 font-Roboto tracking-widest text-lg md:text-xl lg:text-2xl text-blue-800">
                            EVENTS
                        </p>
                        <div className="font-Roboto flex justify-start border border-l-0 border-r-0 border-b-0 pt-4 pb-4 md:pt-6 md:pb-6 lg:pt-14 lg:pb-10 items-start w-full py-5 px-4 md:px-6 lg:px-10 text-start gap-4 scale-100 hover:bg-slate-200">
                            <div className="flex flex-col justify-center items-center">
                                <p className="font-Roboto text-sm md:text-base lg:text-lg">
                                    NOV
                                </p>
                                <p className="font-Roboto text-xl md:text-2xl lg:text-3xl">
                                    18
                                </p>
                            </div>
                            <div className="">
                                <a href="" className="font-Roboto">
                                    <button className="pl-20 pt-4 text-sm md:text-base lg:text-2xl font-semibold">
                                        Alumni Meet 2023
                                    </button>
                                </a>
                            </div>

                        </div>

                        <div className="font-Roboto flex justify-start border-l-0 border-r-0 pt-4 pb-4 md:pt-6 md:pb-6 lg:pt-14 lg:pb-10 items-start w-full py-5 px-4 md:px-6 lg:px-10 text-start gap-4 scale-100 border hover:bg-slate-200">
                            <div className="flex flex-col justify-center items-center">
                                <p className="font-Roboto text-sm md:text-base lg:text-lg">
                                    OCT
                                </p>
                                <p className="font-Roboto text-xl md:text-2xl lg:text-3xl">
                                    3
                                </p>
                            </div>
                            <a href="/event1" className="font-Roboto">
                                <button className="ml-11 pt-4 text-sm md:text-base lg:text-2xl font-semibold">
                                    Chandrayaan 3 Celebration
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="flex-1 w-full lg:w-1/2 shadow-2xl h-full">
                       <img src="https://admissionsinchennai.in/admissions///wp-content/uploads/2016/03/s.jpg?amp=1" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events;
