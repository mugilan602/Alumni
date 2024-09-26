import React from 'react';
import Navbar2 from '../Navbar/Navbar2';
import { Campus } from '../Campus/Campus';
import harivignesh from "./photos/harivignesh.png";
import Bhuvanapriya from "./photos/Bhuvanapriya.png";
import Sampath from "./photos/Sampath.png";
import Baradwaj from "./photos/Baradwaj.png";
import Rajakumar from "./photos/Rajakumar.png";

const Achievements = () => {
    const alumniList = [
        {
            name: 'P Veeramuthuvel',
            batch: 'Batch 2001',
            department: 'Mechanical Engineering',
            achievement: `Muthuvel joined Sri SaiRam Engineering College in 1997, later pursuing higher studies at IIT Chennai, conducting significant aerospace research. He joined ISRO, turning down offers from other organizations, focusing solely on his work there. With 30 years of experience in various projects, he became Director of Chandrayaan 3 in 2019, replacing Kavitha.`,
            photo: "https://images.cnbctv18.com/wp-content/uploads/2023/08/P-Veeramuthuvel.jpeg?impolicy=website&width=640&height=360"
        },
        {
            name: 'S S Mythraye',
            batch: 'Batch 2012',
            department: 'ECE DEPARTMENT',
            achievement: "Flight Lieutenant S.S. Mythraye (2012 batch) was honored to lead the Guard of Honor during the inspection of the  Vadsar base by Air Marshal H.S. Arora, AOC-in-C SWAC. Air Marshal Arora shared his experience as Air Defence Commander and DG Air Ops, praising the base’s operational readiness.",
            photo: 'https://ece.sairam.edu.in/wp-content/uploads/sites/4/2023/09/alumni20192.png',
        },
        {
            name: 'Hari Vignesh',
            batch: 'Batch 2012',
            department: 'IT DEPARTMENT',
            achievement: "Mr Hari Vignesh Iyer, our Alumni of 2012 batch received Unilever project Silver-Category Award for successfully leading the access Management transition of UNILEVER, which sold its spread business in the month of July to the new company",
            photo: harivignesh,
        },
        {
            name: 'Ms.Bhuvanapriya Ravindran',
            batch: 'Batch 2018',
            department: 'IT DEPARTMENT',
            achievement: `Ms.Bhuvanapriya Ravindran , Lead Business Analyst(Societe Generale), our Alumni of 2018 batch was honored with Monthly Spot Award for web migration project by BNP Societe Generale Company.`,
            photo: Bhuvanapriya,
        },
        {
            name: 'Sampath Veeraraghavan',
            department: 'CSE DEPARTMENT',
            achievement: "Senior Technical Program Manager, Amazon, Greater Boston Area, USA and Elected IEEE Eta Kappa Nu 2022 Global President-Elect :2005 ",
            photo: Sampath,
        },
        {
            name: 'Baradwaj Varadharajan',
            department: 'CSE DEPARTMENT',
            achievement: "Baradwaj Varadharajan Software Development Engineer Amazon india pvt Ltd 2018 Blogger/YouTuber - androidmonks.com & coder monk YouTube channel.",
            photo: Baradwaj,
        },
        {
            name: 'Mr. Rajakumar Sampathkumar',
            department: 'CSE DEPARTMENT',
            achievement: "Mr. Rajakumar Sampathkumar Senior Technical Account Manager, Amazon, Greater NewYork City Area, USA 2003 3 PUBLICATIONS - Disruptive Cloud Computing and IT, Vulnerability Management for Cloud Computing - 2014: A Cloud Computing Security Essential ENIAC and ARPANET to Cloud",
            photo: Rajakumar,
        },
        {
            name: 'S.Sairam',
            batch: 'Batch 2017',
            department: 'EEE DEPARTMENT',
            achievement: `Founder,<br />
            Smart Vidhyashram,<br />
            Munich, Germany`,
            photo: "https://eee.sairam.edu.in/wp-content/uploads/sites/5/2023/09/alumini-distinguished-sairam.png",
        },
    ];

    return (
        <>
            <div style={{ backgroundColor: 'white', minHeight: '100vh' }}>
                <Navbar2 />
                <Campus />
                <div className="max-w-4xl mx-auto p-6">
                    <h1 className="text-4xl font-bold text-center mb-8 text-black">Alumni Achievements</h1>
                    <div className="space-y-8">
                        {alumniList.map((alumni, index) => (
                            <div
                                key={index}
                                className="flex flex-col md:flex-row items-start bg-white shadow-md rounded-lg p-4"
                            >
                                {/* Alumni Photo */}
                                <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
                                    <img src={alumni.photo} alt={alumni.name} className="w-full h-full object-cover" />
                                </div>

                                {/* Remaining Content */}
                                <div className="md:ml-6 flex flex-col justify-center md:w-3/4">
                                    <h2 className="text-black text-xl font-semibold">{alumni.name}</h2>
                                    {alumni.batch && <p className="text-gray-600">{alumni.batch}</p>}
                                    <p className="text-gray-600">{alumni.department}</p>
                                    <p className="text-gray-700 mt-2" dangerouslySetInnerHTML={{ __html: alumni.achievement }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Achievements;
