import React, { useState } from "react";
import styles from "./Home.module.css";
import Aheader from "../Aheader/Aheader";
import Navbar2 from "../Navbar/Navbar2";
import Carousel from "../../Components/Carousel";
import CustomModal from "../../Components/Modal";
import NotableMembers from "../Notable Members/NotableMembers";
import HeroCard from "../../Components/HeroCard";
function HomePage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [principalModalIsOpen, setPrincipalModalIsOpen] = useState(false);

  const handleOpenModal = () => setModalIsOpen(true);
  const handleCloseModal = () => setModalIsOpen(false);
  const handleOpenPrincipalModal = () => setPrincipalModalIsOpen(true);
  const handleClosePrincipalModal = () => setPrincipalModalIsOpen(false);

  const events = [
    {
      id: 1,
      image: '/images/Future skills for employment/image001.png',
      name: 'Future Skills for Employment',
      date: '2020-05-29 to 2020-05-31',
      href: "event/Future%20Skills%20for%20Employment"
    },
    {
      id: 2,
      image: '/images/Alumni Meet 2018/image011.png',
      name: 'Alumni Meet 2018',
      date: '2018-06-16 10:00 AM',
      href: "event/Alumni%20Meet%202018"
    },
    {
      id: 3,
      image: '/images/Alumni Talk CSE/image070.gif',
      name: 'Career and Academic Opportunities',
      date: '2020-10-17 12:00 PM',
      href: "event/Career%20and%20Academic%20Opportunities"
    },
    {
      id: 4,
      image: '/images/Alumni Talk CSE/image072.jpg',
      name: 'Optimization With Linear Programming',
      date: '2022-05-23 10:00 AM',
      href: "event/Optimization%20With%20Linear%20Programming"
    },
    {
      id: 5,
      image: '/images/Alumni Talk CSE/image087.png',
      name: 'Alumni Talk on Production Management',
      date: '2020-06-12 6:00 PM',
      href: "event/Alumni%20Talk%20on%20Production%20Management"
    },
    // {
    //   id: 6,
    //   image: '/images/Alumni Talk CSE/image037.png',
    //   name: 'Webinar On Service Industry',
    //   date: '2020-08-29 6:30 PM',
    // },
    // {
    //   id: 7,
    //   image: '/images/Alumni Talk CSE/image042.gif',
    //   name: 'Webinar On Cloud Computing',
    //   date: '2020-08-29 6:30 PM',
    // },
    // {
    //   id: 8,
    //   image: '/images/Alumni Talk CSE/image046.gif',
    //   name: 'Webinar On Devops Engineering',
    //   date: '2020-08-29 6:30 PM',
    // },
    // {
    //   id: 9,
    //   image: '/images/Alumni Talk CSE/image082.gif',
    //   name: 'Workshop on Mobile App Development',
    //   date: '2020-08-29 6:30 PM',
    // },
    // {
    //   id: 10,
    //   image: '/images/Alumni Talk CSE/image080.gif',
    //   name: 'Insights on Google IO',
    //   date: '2023-07-05 11:00 AM',
    // },
    // {
    //   id: 11,
    //   image: '/images/Alumni Talk CSE/image084.gif',
    //   name: 'Placement Motivation',
    //   date: '2023-08-01 06:30 PM',
    // },
    // {
    //   id: 12,
    //   image: '/images/Alumni Talk CSE/image085.png',
    //   name: 'Webinar on Engineering Education',
    //   date: '2020-09-05 05:00 PM',
    // }
  ];

  const fullContent = (
    <>
      <h1 className="mb-5 ml-5 text-xl md:text-2xl font-bold">CEO's Message:</h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-[50%]">
          <img className={`${styles.modalImage}`} src={"https://sairamuba.com/images/home-page-images/ceo.webp"} alt="CEO" />
        </div>
        <div className={`${styles.modalRight} w-full md:w-[50%] flex`}>
          <div className={`${styles.modalText} justify-center items-center`}>
            <h4 className="text-lg md:text-xl font-semibold text-center">Sri Sai Prakash Leo Muthu</h4>
            <p className="text-md md:text-lg text-center">Chairman & CEO</p>
            <p className="text-md md:text-lg text-center">Sairam Group of Institutions</p>
          </div>
        </div>
      </div>
      <p className="text-justify mt-4 md:mt-6">
        Our alumni, who once walked these corridors as students, have soared to great heights, becoming beacons of inspiration in every field imaginable. I am filled with a sense of pride in observing their glorious growth and contribution in their chosen spheres. We connect with immense value for being SAIRAMITES forever. <br /> <br />
        Amongst us, we have luminaries like Dr. Veera Muthuvel, the esteemed director of the Chandrayaan mission, the distinguished individuals who have been serving with distinction as IASs, IPSs, CEOs, and acclaimed Entrepreneurs. Their achievements are a testament to their individual brilliance as well as the reflection of the solid foundation our institution has provided. <br /> <br />
        What is truly heartwarming is the way our alumni have been consistently giving back to their alma mater, inspiring our current students. Their engagement in our academic and extracurricular activities has been invaluable for fostering, nurturing, and motivating an environment that encourages our present-day learners to strive for excellence. <br /> <br />
        The bond between the institution and our alumni is unbreakable, growing stronger with each passing year. This enduring and endearing relationship is a cornerstone of our institution, a perpetual source of strength and inspiration. As we move forward, let us continue to uphold these bonds and build a future that is even brighter than our illustrious past. <br /> <br />
        Thank you for carrying the flag of Sri Sairam Engineering College with such dignity and for being a constant source of inspiration to us all!!
      </p>
    </>
  );

  const principalFullContent = (
    <>
      <h1 className="mb-5 ml-5 text-xl md:text-2xl font-bold">Principal's Message:</h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-[50%]">
          <img className={`${styles.modalImage}`} src="https://sairamuba.com/images/home-page-images/new-principal.webp" alt="Principal" />
        </div>
        <div className={`${styles.modalRight} w-full md:w-[50%] flex`}>
          <div className={`${styles.modalText} justify-center items-center`}>
            <h4 className="text-lg md:text-xl font-semibold text-center">Dr. K. Raja</h4>
            <p className="text-md md:text-lg text-center">Principal</p>
            <p className="text-md md:text-lg text-center">Sairam Engineering College</p>
          </div>
        </div>
      </div>
      <p className="text-justify mt-4 md:mt-6">
        It gives us immense pleasure to observe that SAIRAM ALUMNI FRATERNITY who emerged from
        the hallowed halls of our esteemed institution is gathering to rejoice and share at the same
        campus on 18th November 2023. Our alumni, the pride of Sri Sairam Engineering College, have etched their names in the annals of
        success across various domains. Their journeys from these classrooms to the zenith of their
        careers exemplify the caliber of education and values imparted here. We take immense pleasure in our alumni whose contributions from their specific roles and as individuals have inspired not only our nation but also the global community. Our alumni in public services, owning companies, and being educators continue to safeguard and uplift our society, embodying the ethos of service and integrity that we cherish. <br /> <br />
        The way our alumni mentor and guide our current students is commendable. They have created a legacy of inspiration, motivating our students to dream big and work tirelessly towards those dreams. This mentorship has been a catalyst for many of our students, shaping them into future leaders and innovators. <br /> <br />
        Thank you for being an integral part of our journey!!
      </p>
    </>
  );

  return (
    <>
      <Aheader />
      <Navbar2 />

      <section className="p-4 bg-gray-100">
        <div className="flex flex-col md:items-center gap-8 md:flex-row sm:w-full h-full">
          <div className="lg:w-3/4 md:w-full flex justify-center">
            {/* Carousel full width on mobile */}
            <Carousel />
          </div>
          <div className={`${styles.right} bg-gray-100 md:mt-0 md:block md:h-full hidden w-1/4 flex-grow`}>
            {/* <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden"> {/* Set h-full here */}
            {/* Header *
              <div className="bg-blue-700 w-full flex items-center justify-center">
                <img src="https://ik.imagekit.io/clwpujdp2/Alumni%20Website/logo.PNG?updatedAt=1712849907292" alt="" />
              </div>

              {/* List of options *
              <div className="bg-blue-500 text-white py-10 px-8 text-center w-full flex-grow"> {/* Use flex-grow for full height 
                <ul className="list-none space-y-4 text-lg">
                  <li>• CREATE YOUR PROFILE</li>
                  <li>• POST JOBS AND INTERNSHIPS</li>
                  <li>• SHARE MEMORIES</li>
                  <li>• EXCHANGE OPPORTUNITIES</li>
                </ul>
              </div>

              {/* Explore button *
              <div className="w-full flex justify-center py-6 bg-white">
                <button className="bg-blue-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
                  EXPLORE
                </button>
              </div>
            </div> */}
            <img src="home.jpg" className="h-full object-cover" alt="" />
          </div>
        </div >
      </section >



      {/* CEO's Message */}
      <section section className="p-4 md:p-6 bg-gray-100 font-poppins pt-5" >
        <div className="bg-white rounded-lg shadow-lg p-6 mt-5">
          <h1 className=" text-xl md:text-2xl font-medium tracking-widest text-blue-700 uppercase">CEO's Message</h1>
          <div className="flex flex-col md:flex-row p-4">
            <div className="w-full md:w-1/5 text-center mb-4">
              <img className="w-3/4 h-auto mx-auto mt-2" src="https://sairamuba.com/images/home-page-images/ceo.webp" alt="CEO" />
              <h4 className="mt-2 font-semibold tracking-widest text-gray-900 uppercase">Sri Sai Prakash Leo Muthu</h4>
              <p className="text-sm font-medium  ">Chairman & CEO</p>
              <p className="text-sm font-medium ">Sairam Group of Institutions</p>
            </div>
            <div className="w-full md:w-4/5 flex  items-center ml-0 md:ml-10 ">
              <p className="text-justify text-lg p-2 pr-4">
                Our alumni, who once walked these corridors as students, have soared to great heights, becoming beacons of inspiration in every field imaginable. I am filled with a sense of pride in observing their glorious growth and contribution in their chosen spheres. We connect with immense value for being SAIRAMITES forever.
                What is truly heartwarming is the way our alumni have been consistently giving back to their alma mater, inspiring our current students.
                <span> <br /><button onClick={handleOpenModal} className="mt-2 p-2 text-lg text-blue-700 hover:text-blue-500">Read More</button></span>
              </p>


            </div>
          </div>
        </div>
      </section >

      {/* Principal's Message */}
      <section section className="p-4 md:p-6 bg-gray-100 font-poppins" >
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-xl md:text-2xl font-medium tracking-widest text-blue-700 uppercase">Principal's Message</h1>
          <div className="flex flex-col md:flex-row p-4">
            <div className="w-full md:w-1/5 text-center mb-4">
              <img className="w-3/4 h-auto mx-auto mt-2" src="https://sairamuba.com/images/home-page-images/new-principal.webp" alt="Principal" />
              <h4 className="mt-2 font-semibold tracking-widest text-gray-900 uppercase">Dr. K. Raja</h4>
              <p className="text-sm font-medium text-gray-700">Principal</p>
              <p className="text-sm font-medium text-gray-700">Sairam Engineering College</p>
            </div>
            <div className="w-full md:w-4/5 flex  items-center ml-0 md:ml-10">
              <p className="text-justify text-lg p-2 pr-8">
                It gives us immense pleasure to observe that SAIRAM ALUMNI FRATERNITY, who emerged from
                the hallowed halls of our esteemed institution, is gathering to rejoice and share at the same
                campus on 18th November 2023.
                Our alumni, the pride of Sri Sairam Engineering College, have etched their names in the annals of
                success across various domains.
                <br />
                <span> <button onClick={handleOpenPrincipalModal} className="mt-2 p-2 text-lg text-blue-700 hover:text-blue-500">Read More</button></span>
              </p>
            </div>
          </div>
        </div>
      </section >



      <CustomModal
        isOpen={modalIsOpen}
        onClose={handleCloseModal}
        title="CEO's Message"
        content={fullContent}
      />
      <CustomModal
        isOpen={principalModalIsOpen}
        onClose={handleClosePrincipalModal}
        title="Principal's Message"
        content={principalFullContent}
      />

      {/* Events and About Sairam Alumni Association */}
      <section className="p-4 md:p-6  bg-gray-100 font-poppins">
        <div className="flex flex-col md:flex-row gap-5">
          {/* About Sairam Alumni Association Card */}
          <div className="w-full md:w-[70%] bg-white rounded-lg p-6 shadow-lg">
            <h1 className="mb-4 text-xl md:text-2xl tracking-widest uppercase underline-offset-8 text-blue-700">About Sairam Alumni Association</h1>
            <p className="mt-5 text-justify">
              The Alumni Association of Sairam Engineering College is proudly managed by a dedicated Alumni Committee. The association plays a pivotal role in fostering strong relationships among alumni, faculty, and the college administration. Beyond supporting our alumni in various ways, the association actively contributes to the college's pursuit of its goals, vision, and mission. <br /> <br />
              Sairam Engineering College is delighted to cultivate a vibrant and engaged Alumni Network. We warmly invite you to join this network, which serves as a platform for seamless communication among SEC alumni. This initiative offers a wonderful opportunity for our alumni to reconnect with their alma mater and continue to be a part of our extended family.
            </p>
          </div>

          {/* Events Card */}
          {/* Events Card */}
          <div className="w-full md:w-[30%] bg-white rounded-lg p-6 shadow-lg overflow-y-auto h-66">
            <h1 className="mb-4 text-xl md:text-2xl tracking-widest uppercase underline-offset-8">Events</h1>
            <ul className="mt-5 space-y-4">
              {events.map((event) => (
                <li key={event.id}>
                  <a href={event.href} className="text-blue-500 hover:underline">
                    {event.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </section>

      <NotableMembers />
      <div className="pb-5 bg-gray-100"></div>
    </>
  );
}

export default HomePage;
