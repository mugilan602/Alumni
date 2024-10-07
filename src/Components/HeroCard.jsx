import React from "react";

const HeroCard = () => {
    return (
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden max-w-sm">
            {/* Header */}
            <div className="bg-blue-700 w-full py-4 px-6 flex items-center justify-center">
                <div className="flex flex-col items-center">
                    <h2 className="text-white text-xl font-bold text-center">SAIRAM</h2>
                    <h2 className="text-white text-xl font-bold text-center">ALUMNI ASSOCIATION</h2>

                </div>
            </div>

            {/* List of options */}
            <div className="bg-blue-500 text-white py-6 px-8 text-center w-full">
                <ul className="list-none space-y-4 text-lg">
                    <li>• CREATE YOUR PROFILE</li>
                    <li>• POST JOBS AND INTERNSHIPS</li>
                    <li>• SHARE MEMORIES</li>
                    <li>• EXCHANGE OPPORTUNITIES</li>
                </ul>
            </div>

            {/* Explore button */}
            <div className="w-full flex justify-center py-6 bg-white">
                <button className="bg-blue-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
                    EXPLORE
                </button>
            </div>
        </div>
    );
};

export default HeroCard;
