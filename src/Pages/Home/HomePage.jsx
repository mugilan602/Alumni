import React, { useState } from "react";
import styles from "./Home.module.css";
import Aheader from "../Aheader/Aheader";
import Navbar2 from "../Navbar/Navbar2";
import Carousel from "../../Components/Carousel";
import CustomModal from "../../Components/Modal";
import NotableMembers from "../Notable Members/NotableMembers";
import home from '../../assets/home.jpg';

function HomePage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [principalModalIsOpen, setPrincipalModalIsOpen] = useState(false);

  const handleOpenModal = () => setModalIsOpen(true);
  const handleCloseModal = () => setModalIsOpen(false);
  const handleOpenPrincipalModal = () => setPrincipalModalIsOpen(true);
  const handleClosePrincipalModal = () => setPrincipalModalIsOpen(false);

  const fullContent = (
    <>
      <h1 className="mb-5 ml-5 text-2xl font-bold">CEO Message:</h1>
      <div className="flex bg-white">
        <div className="w-[50%]">
          <img className={`${styles.modalImage} +`} src={"https://sairamuba.com/images/home-page-images/ceo.webp"} alt="" />
        </div>
        <div className={`${styles.modalRight} w-[50%] flex`}>
          <div className={`${styles.modalText} + justify-center items-center`}>
            <h4 className="text-xl font-semibold text-center text-black">
              Sri Sai Prakash Leo Muthu
            </h4>
            <p className="text-lg text-center">Chairman & CEO</p>
            <p className="text-lg text-center">Sairam Group of Institutions</p>
          </div>
        </div>
      </div>
      <p className="text-justify">
        Our alumni, who once walked these corridors as students, have soared to great heights, becoming beacons of inspiration in every field imaginable. I am filled with a sense of pride in observing their glorious growth and contribution in their chosen spheres. We connect with immense value for being SAIRAMITES forever. <br /> <br />
        Amongst us, we have luminaries like Dr. Veera Muthuvel, the esteemed director of the Chandrayaan mission, the distinguished individuals who have been serving with distinction as IASs, IPSs, CEOs and acclaimed Entrepreneurs. Their achievements are a testament to their individual brilliance as well as the reflection of the solid foundation our institution has provided. <br /> <br />
        What is truly heart-warming is the way our alumni have been consistently giving back to their alma mater, inspiring our current students. Their engagement in our academic and extracurricular activities has been invaluable for fostering, nurturing and motivating an environment that encourages our present day learners to strive for excellence. <br /> <br />
        The bond between the institution and our alumni is unbreakable, growing stronger with each passing year. This enduring and endearing relationship is a cornerstone of our institution, a perpetual source of strength and inspiration. As we move forward, let us continue to uphold these bonds and build a future that is even brighter than our illustrious past. <br /> <br />
        Thank you for carrying the flag of Sri Sairam Engineering College with such dignity and for being a constant source of inspiration to us all!!
      </p>
    </>

  );
  const principalFullContent = (
    <>
      <h1 className="mb-5 ml-5 text-2xl font-bold">Principal's Message:</h1>
      <div className="flex">
        <div className="w-[50%]">
          <img className={`${styles.modalImage}`} src="https://sairamuba.com/images/home-page-images/new-principal.webp" alt="Principal" />
        </div>
        <div className={`${styles.modalRight} w-[50%] flex`}>
          <div className={`${styles.modalText} justify-center items-center`}>
            <h4 className="text-xl font-semibold text-center">
              Dr. k.Raja
            </h4>
            <p className="text-lg text-center">Principal</p>
            <p className="text-lg text-center">Sairam Engineering College</p>
          </div>
        </div>
      </div>
      <p className="text-justify">
        It gives us immense pleasure to observe that SAIRAM ALUMNI FRATERNITY who emerged from
        the hallowed halls of our esteemed institution is gathering to rejoice and share at the same
        campus on 18 th November 2023.
        Our alumni, the pride of Sri Sairam Engineering College, have etched their names in the annals of
        success across various domains. Their journeys from these classrooms to the zenith of their
        careers exemplify the caliber of education and values imparted here.
        We take immense pleasure in our alumni whose contributions from their specific roles and as
        individuals have inspired not only our nation but also the global community. Our alumni in public
        services, owning companies and being educators continue to safeguard and uplift our society,
        embodying the ethos of service and integrity that we cherish. We could certainly feel the
        ONENESS in their lives and achievements.
        The way our alumni mentor and guide our current students is commendable. They have created a
        legacy of inspiration, motivating our students to dream big and work tirelessly.
        towards those dreams. This mentorship has been a catalyst for many of our students, shaping
        them into future leaders and innovators.
        The relationship between our alumni and the privileged institution is exhibiting a testimony to the
        everlasting mission of our institution. It is a relationship based on mutual respect, adulation,
        admiration, and a shared vision for a better world. As we celebrate their achievements, we are
        reminded that each one of the alumni is a pivotal part of our continuous
        journey towards excellence.
        Thank you for being an integral part of our journey!!
      </p>
    </>
  );
  return (
    <>
      <Aheader />
      <Navbar2 />



      <section className="pt-10 pl-10 pr-10 bg-white">
        {/* First section  */}
        <div className="flex">
          <Carousel />
          {/* <div className={`${styles.right}`}>
          <div className={`${styles.gradientBackground} mt-5 ml-20`}>
            <h4>Connect with your college through Alumni Portal</h4>
            <p>-Create your Profile</p>
            <p>-Post Jobs and Internships</p>
            <p>-Exchange opportunities</p>
          </div>
        </div> */}
          <div className={`${styles.right} + bg-white`}>
            <img
              className={`${styles.image}`}
              src={home}
              alt=""
            />
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="p-6 bg-white ">
        <h1 className="mb-4 text-2xl font-bold tracking-widest text-gray-700 uppercase text-center md:text-left">
          CEO Message
        </h1>
        <div className="flex flex-col md:flex-row items-center p-6 bg-white rounded-lg">
          <div className="flex-shrink-0 w-full md:w-1/5 text-center mb-6 md:mb-0">
            <img
              className="w-40 h-auto mx-auto md:w-full mt-2"
              src="https://sairamuba.com/images/home-page-images/ceo.webp"
              alt="CEO"
            />
            <h4 className="mt-4 font-semibold tracking-widest text-gray-900 uppercase">
              Sri Sai Prakash Leo Muthu
            </h4>
            <p className="font-medium text-gray-700">Chairman & CEO</p>
            <p className="font-medium text-gray-700">Sairam Group of Institutions</p>
          </div>
          <div className="w-full md:w-4/5 mt-6 md:mt-0 md:ml-10 flex items-center">
            <div className="font-medium text-center md:text-left">
              <p className="font-medium text-justify  font-poppins">
                Our alumni, who once walked these corridors as students, have soared to great heights, becoming beacons of inspiration in every field imaginable. I am filled with a sense of pride in observing their glorious growth and contribution in their chosen spheres. We connect with immense value for being SAIRAMITES forever. <br /><br />
                Amongst us, we have luminaries like Dr. Veera Muthuvel, the esteemed director of the Chandrayaan mission, the distinguished individuals who have been serving with distinction as IASs, IPSs, CEOs and acclaimed Entrepreneurs. Their achievements are a testament to their individual brilliance as well as the reflection of the solid foundation our institution has provided.
              </p>
              <button onClick={handleOpenModal} className="mt-4 font-medium text-blue-700 hover:text-blue-500">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>



      {/* Principal's Message */}
      <section className="p-6 bg-white font-poppins">
        <h1 className="mb-4 text-2xl font-bold tracking-widest text-gray-700 uppercase text-center md:text-left">
          Principal's Message:
        </h1>
        <div className="flex flex-col md:flex-row items-center p-6 bg-white rounded-lg">
          <div className="flex-shrink-0 w-full md:w-1/5 text-center mb-6 md:mb-0">
            <img
              className="w-40 h-auto mx-auto md:w-full mt-2"
              src="https://sairamuba.com/images/home-page-images/new-principal.webp"
              alt="Principal"
            />
            <h4 className="mt-4 font-semibold tracking-widest text-gray-900 uppercase">
              Dr. K. Raja
            </h4>
            <p className="font-medium text-gray-700">Principal</p>
            <p className="font-medium text-gray-700">Sairam Engineering College</p>
          </div>
          <div className="w-full md:w-4/5 mt-6 md:mt-0 md:ml-10 flex items-center">
            <div className="font-medium text-gray-700 text-center md:text-left">
              <p className="text-justify">
                It gives us immense pleasure to observe that SAIRAM ALUMNI FRATERNITY, who emerged from
                the hallowed halls of our esteemed institution, is gathering to rejoice and share at the same
                campus on 18th November 2023.
                <br /><br />
                Our alumni, the pride of Sri Sairam Engineering College, have etched their names in the annals of
                success across various domains. Their journeys from these classrooms to the zenith of their
                careers exemplify the caliber of education and values imparted here.
                <br /><br />
                We take immense pleasure in our alumni whose contributions from their specific roles and as
                individuals have inspired not only our nation but also the global community.
              </p>
              <button onClick={handleOpenPrincipalModal} className="mt-4 text-blue-700 hover:text-blue-500">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      <CustomModal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        content={fullContent}
      />
      <CustomModal
        isOpen={principalModalIsOpen}
        onRequestClose={handleClosePrincipalModal}
        content={principalFullContent}
      />

      {/* Events and About Sairam Alumni Association */}

      <section className="p-10 text-gray-700 bg-white font-poppins">
        <div className="flex gap-5">
          {/* About Sairam Alumni Association Card */}
          <div className="w-[70%] bg-white rounded-lg p-6 ">
            <h1 className="mb-4 text-2xl tracking-widest uppercase underline-offset-8">About Sairam Alumni Association</h1>
            <p className="mt-5 text-justify">
              The Alumni Association of Sairam Engineering College is proudly managed by a dedicated Alumni Committee. The association plays a pivotal role in fostering strong relationships among alumni, faculty, and the college administration. Beyond supporting our alumni in various ways, the association actively contributes to the college's pursuit of its goals, vision, and mission. <br /> <br />
              Sairam Engineering College is delighted to cultivate a vibrant and engaged Alumni Network. We warmly invite you to join this network, which serves as a platform for seamless communication among SEC alumni. This initiative offers a wonderful opportunity for our alumni to reconnect with their alma mater and continue to be a part of our extended family.
            </p>
          </div>

          {/* Events Card */}
          <div className="w-[30%] bg-white  rounded-lg p-6 ">
            <h1 className="mb-4 text-2xl tracking-widest uppercase underline-offset-8">Events</h1>
            <ul className="mt-5 space-y-4">
              <li>
                <a href="http://localhost:5173/event1" className="text-blue-500 hover:underline">Chandrayaan 3 Celebration</a>
              </li>
              <li>
                <a href="http://localhost:5173/event1" className="text-blue-500 hover:underline">Alumni Meet 2023</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Notable Members */}
      <section>
        <NotableMembers />
      </section>

    </>
  );
}

export default HomePage;
