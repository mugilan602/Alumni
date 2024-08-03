import React, { useState } from "react";
import styles from "./Home.module.css";
import Aheader from "../Aheader/Aheader";
import Navbar2 from "../Navbar/Navbar2";
import Carousel from "../../Components/Carousel";
import CustomModal from "../../Components/Modal";
import NotableMembers from "../Notable Members/NotableMembers";
function HomePage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [principalModalIsOpen, setPrincipalModalIsOpen] = useState(false);

  const handleOpenModal = () => setModalIsOpen(true);
  const handleCloseModal = () => setModalIsOpen(false);
  const handleOpenPrincipalModal = () => setPrincipalModalIsOpen(true);
  const handleClosePrincipalModal = () => setPrincipalModalIsOpen(false);

  const fullContent = (
    <>
      <h1 className="text-2xl font-bold mb-5 ml-5">CEO Message:</h1>
      <div className="flex">
        <div className="w-[50%]">
          <img className={`${styles.modalImage} +`} src="https://sairamuba.com/images/home-page-images/ceo.webp" alt="" />
        </div>
        <div className={`${styles.modalRight} w-[50%] flex`}>
          <div className={`${styles.modalText} + justify-center items-center`}>
            <h4 className="text-xl text-center font-semibold">
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
      <h1 className="text-2xl font-bold mb-5 ml-5">Principal's Message:</h1>
      <div className="flex">
        <div className="w-[50%]">
          <img className={`${styles.modalImage}`} src="https://sairamuba.com/images/home-page-images/new-principal.webp" alt="Principal" />
        </div>
        <div className={`${styles.modalRight} w-[50%] flex`}>
          <div className={`${styles.modalText} justify-center items-center`}>
            <h4 className="text-xl text-center font-semibold">
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



      <section className="pt-10 pl-10 pr-10">
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
          <div className={`${styles.right} + `}>
            <img
              className={`${styles.image}`}
              src="https://ik.imagekit.io/xetccow0b/register.jpg?updatedAt=1722361346806"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* Chairman's Message */}


      <section className="p-10">
        <h1 className={`text-2xl font-bold mb-4 + ${styles.messageHeading} + underline underline-offset-8 decoration-blue-900 `}>Chairman's Message:</h1>
        <div className={`flex shadow-2xl p-4 ${styles.messageDiv}`}>
          <div className={`${styles.leftMessage} flex-shrink-0 w-[20%] ml-10`}>
            <img
              className={`${styles.chairman} + mt-2`}
              src="https://sairamuba.com/images/home-page-images/ceo.webp"
              alt="Chairman"
            />
            <h4 className="text-xl text-center font-semibold mt-4">
              Sri Sai Prakash Leo Muthu
            </h4>
            <p className="text-lg text-center">Chairman & CEO</p>
            <p className="text-lg text-center">Sairam Group of Institutions</p>
          </div>
          <div className={`${styles.message} w-[70%] ml-10 mt-5 `}>
            <p className="text-justify">
              Our alumni, who once walked these corridors as students, have
              soared to great heights, becoming beacons of inspiration in every
              field imaginable. I am filled with a sense of pride in observing
              their glorious growth and contribution in their chosen spheres. We
              connect with immense value for being SAIRAMITES forever. Amongst
              us, we have luminaries like Dr. Veera Muthuvel, the esteemed
              director of the Chandrayaan mission, the distinguished individuals
              who have been serving with distinction as IASs, IPSs, CEOs and
              acclaimed Entrepreneurs. Their achievements are a testament to
              their individual brilliance as well as the reflection of the solid
              foundation our institution has provided.
            </p>
            <button onClick={handleOpenModal} className="text-blue-500 mt-4">
              Read More
            </button>
          </div>
        </div>
      </section>



      {/* Principal's Message */}
      <section className="p-10">
        <h1 className={`text-2xl font-bold mb-4 + ${styles.messageHeading} + underline underline-offset-8 decoration-blue-900 `}>Principal's Message:</h1>
        <div className={`flex shadow-2xl p-4 ${styles.messageDiv}`}>
          <div className={`${styles.leftMessage} flex-shrink-0 w-[20%] ml-10`}>
            <img
              className={`${styles.chairman} + mt-2`}
              src="https://sairamuba.com/images/home-page-images/new-principal.webp"
              alt="Principal"
            />
            <h4 className="text-xl text-center font-semibold mt-4">
              Dr. k .Raja
            </h4>
            <p className="text-lg text-center">Principal</p>
            <p className="text-lg text-center">Sairam Engineering College</p>
          </div>
          <div className={`${styles.message} w-[70%] ml-10 mt-5 `}>
            <p className="text-justify items-center">
              It gives us immense pleasure to observe that SAIRAM ALUMNI FRATERNITY who emerged from
              the hallowed halls of our esteemed institution is gathering to rejoice and share at the same
              campus on 18 th November 2023.
              Our alumni, the pride of Sri Sairam Engineering College, have etched their names in the annals of
              success across various domains. Their journeys from these classrooms to the zenith of their
              careers exemplify the caliber of education and values imparted here.
              We take immense pleasure in our alumni whose contributions from their specific roles and as
              individuals have inspired not only our nation but also the global community
            </p>
            <button onClick={handleOpenPrincipalModal} className="text-blue-500 mt-4">
              Read More
            </button>
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

      <section className="p-10">
        <div className="flex">
          <div className="w-[70%]">
            <h1>About Sairam Alumni Association</h1>
            <p className="text-justify mt-5">
              Alumni Association
              The Alumni Association of Sairam Engineering College is proudly managed by a dedicated Alumni Committee. The association plays a pivotal role in fostering strong relationships among alumni, faculty, and the college administration. Beyond supporting our alumni in various ways, the association actively contributes to the college's pursuit of its goals, vision, and mission. <br /> <br />
              Sairam Engineering College is delighted to cultivate a vibrant and engaged Alumni Network. We warmly invite you to join this network, which serves as a platform for seamless communication among SEC alumni. This initiative offers a wonderful opportunity for our alumni to reconnect with their alma mater and continue to be a part of our extended family.
            </p>
          </div>
          <div className="ml-5">
            <h1>Events:</h1>
            <div className="mt-5">
              <ul>
                <li className={`${styles.listItem}`}>
                  <a href="">Chandrayaan 3 Celebration</a>
                </li>
                <li className={`${styles.listItem}`}>
                  <a href="">Alumni meet 2023</a>
                </li>
              </ul>
            </div>
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
