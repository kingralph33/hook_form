import React, { useState } from "react";

import "./PersonForm.scss";

const PersonForm = (props) => {
  // variables for first name, last name, email, password
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div>
      <div>
        <form className="form">
          <div className="fields">
            <label htmlFor="fName" className="label">
              First Name
            </label>
            <input
              type="text"
              name="fName"
              className="input"
              onChange={(event) => setFName(event.target.value)}
            />
          </div>
          <div className="fields">
            <label htmlFor="lName" className="label">
              Last Name
            </label>
            <input
              type="text"
              name="lName"
              className="input"
              onChange={(event) => setLName(event.target.value)}
            />
          </div>
          <div className="fields">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="text"
              name="email"
              className="input"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="fields">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="input"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="fields">
            <label htmlFor="confirmPassword" className="label">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              className="input"
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </div>
        </form>
      </div>
      <div>
        <section className="showFormData">
          <h1 className="dataHeader">Your Form Data</h1>
          <p>First Name: {fName}</p>
          <p>Last Name: {lName}</p>
          <p>Email: {email}</p>
          <p>Password: password</p>
          <p>Confirm Password: password</p>
        </section>
      </div>
    </div>
  );
};

export default PersonForm;
