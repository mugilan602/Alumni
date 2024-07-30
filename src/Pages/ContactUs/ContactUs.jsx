import React from 'react';
import styles from './ContactUs.module.css';
import { Campus } from '../Campus/Campus';
import Navbar2 from "../Navbar/Navbar2";

function ContactUs() {
  return (
    <>
      <Navbar2 />
      <Campus />
      <div className={styles.container}>
        <div className={styles.contactContainer}>
          <div className={styles.infoSide}>
            <h3>Contact Us</h3>
            <div className={styles.contactInfo}>
              <p>
                <strong>Address</strong> <br />
                Sai Leo Nagar, West Tambaram, <br />
                Chennai - 600044, Tamil Nadu, India.
              </p>
              <p>
                <strong>Phone</strong> <br />
                +91-44-22512111 / 2251 2333 <br /> +91-44-22512444
              </p>
              <p>
                <strong>Email</strong> <br />
                <a href="mailto:sairam@sairam.edu.in">sairam@sairam.edu.in</a>
              </p>
              <p>
                <strong>Website</strong> <br />
                <a href="https://sairam.edu.in/">sairam.edu.in</a>
              </p>
            </div>
          </div>
          <div className={styles.formSide}>
            <img src="https://admissionsinchennai.in/admissions///wp-content/uploads/2016/03/s.jpg?amp=1" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
