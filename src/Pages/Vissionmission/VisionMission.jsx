import React, { useState } from 'react';
import styles from './Visionmission.module.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={styles.container2xl}>
        <div className={`${styles.sContainer}`}>

          <h2 className={styles.vmSubheading}>VISION</h2>
          <p className={styles.vmParagraph}>
            The Vision of Sri Sai Ram Alumni Association is to create a strong bond between the institute and its alumni through a mutually beneficial network.
          </p>

          <h2 className={styles.vmSubheading}>MISSION</h2>
          <ul className={styles.vmList}>
            <li>To build a strong Alumni network to help more young minds.</li>
            <li>To act as a hub between Alumni and the Institute.</li>
            <li>To encourage Alumni to contribute to the Institution's development.</li>
          </ul>

          <h2 className={styles.vmSubheading}>GOALS</h2>
          <ul className={styles.vmList}>
            <li>Identifying potential Alumni firms for current students training, internships and Placements.</li>
            <li>Job offers through Alumni firms Increasing institution's values through better Alumni connect.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
