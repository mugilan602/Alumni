import React, { useState } from 'react';
import styles from './Visionmission.module.css';

function VisionMission() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={styles.vmbody}>
        <div className={styles.container2xl}>
          <div className={styles.sContainer}>
            <h2 className={styles.vmHeading}>VISION MISSION</h2>

            <h3 className={styles.vmSubheading}>Vision</h3>
            <p className={styles.vmParagraph}>
              The Vision of Sri Sai Ram Alumni Association is to create a strong bond between the institute and its alumni through a mutually beneficial network.
            </p>

            <h3 className={styles.vmSubheading}>Mission</h3>
            <ul className={styles.vmList}>
              <li>To build a strong Alumni network to help more young minds.</li>
              <li>To act as a hub between Alumni and the Institute.</li>
              <li>To encourage Alumni to contribute to the Institution's development.</li>
            </ul>

            <h3 className={styles.vmSubheading}>Goals</h3>
            <ul className={styles.vmList}>
              <li>Identifying potential Alumni firms for current students' training, internships, and placements.</li>
              <li>Job offers through Alumni firms.</li>
              <li>Increasing the institution's values through better Alumni connect.</li>
            </ul>

            <h2 className={styles.vmHeading}>ALUMNI NETWORK</h2>
            <p className={styles.vmParagraph}>
              We endeavor to create a strong network of alumni that can be navigated for mutual benefits.
            </p>

            <h3 className={styles.vmSubheading}>Alumni Meet</h3>
            <ul className={styles.vmList}>
              <li>Our primary objective for the alumni meet is to have the alumni reconnect with their fellow colleagues, exchange their memories and experiences of college life.</li>
              <li>Experienced alumni have a forum to share their ideas with attendees and also provide tips on how to break barriers and reach career goals.</li>
            </ul>

            <h3 className={styles.vmSubheading}>College Website</h3>
            <p className={styles.vmParagraph}>
              All our alumni are registered on our college website to maintain a seamless connection.
            </p>

            <h3 className={styles.vmSubheading}>Social Media</h3>
            <p className={styles.vmParagraph}>
              We help our alumni to expand their professional and personal networks through social media, events, activities, and online platforms.
            </p>

            <h3 className={styles.vmSubheading}>Mentors/Alumni Coordinators</h3>
            <p className={styles.vmParagraph}>
              Our coordinators and mentors facilitate the maintenance of groups between alumni and corresponding classes/mentees to maintain a stable network.
            </p>

            <h2 className={styles.vmHeading}>ALUMNI CONTRIBUTION</h2>
            <p className={styles.vmParagraph}>
              Engage in sharing your experience, knowledge, and the paths taken after graduation with fellow alumni as they too do the same.
            </p>

            <h3 className={styles.vmSubheading}>Knowledge Sharing</h3>
            <p className={styles.vmParagraph}>
              Our distinguished alumni participate in several academic initiatives, including guest lectures and department advisory boards, among others, to provide their expertise.
            </p>

            <h3 className={styles.vmSubheading}>Placement and Higher Studies Facilitate</h3>
            <p className={styles.vmParagraph}>
              Through the alumni network, we facilitate enhanced opportunities for our students to pursue higher studies, placements, and internships.
            </p>

            <h3 className={styles.vmSubheading}>Projects and Startups Mentoring</h3>
            <p className={styles.vmParagraph}>
              Our network of alumni provides guidance, mentorship, and funding opportunities for in-house projects and startups.</p>

            <h3 className={styles.vmSubheading}>Financial Support and Equipment Donation</h3>
            <p className={styles.vmParagraph}>
              We help students from deprived socio-economic backgrounds by providing support, including printers, displays, and other equipment donations for our campus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default VisionMission;
