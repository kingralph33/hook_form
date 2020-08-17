import React, { usetState } from "react";

import styles from "./PersonForm.module.scss";

const PersonForm = (props) => {
  // // variables for first name, last name, email, password
  // const [fName, setFName] = useState("");
  // const [lName, setLName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  return (
    <div>
      <div>
        <form className={styles.form}>
          <div className={styles.fields}>
            <label className={styles.label}>First Name</label>
            <input type="text" className={styles.input} />
          </div>
          <div className={styles.fields}>
            <label className={styles.label}>Last Name</label>
            <input type="text" className={styles.input} />
          </div>
          <div className={styles.fields}>
            <label className={styles.label}>Email</label>
            <input type="text" className={styles.input} />
          </div>
          <div className={styles.fields}>
            <label className={styles.label}>Password</label>
            <input type="password" className={styles.input} />
          </div>
          <div className={styles.fields}>
            <label className={styles.label}>Confirm Password</label>
            <input type="password" className={styles.input} />
          </div>
        </form>
      </div>
      <div>
        <section className={styles.showFormData}>
          <h1 className={styles.dataHeader}>Your Form Data</h1>
          <p>First Name</p>
          <p>Last Name</p>
          <p>Email</p>
          <p>Password</p>
          <p>Confirm Password</p>
        </section>
      </div>
    </div>
  );
};

export default PersonForm;
