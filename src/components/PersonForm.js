import React from "react";

import "./PersonForm.scss";

const PersonForm = props => {
  // variables for first name, last name, email, password
  const { inputs, setInputs } = props;

  const onChange = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  }

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
              onChange={onChange}
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
              onChange={onChange}
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
              onChange={onChange}
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
              onChange={onChange}
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
              onChange={onChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonForm;
