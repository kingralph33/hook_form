import React from "react";

import "./PersonForm.scss";

const FormResults = (props) => {
    const { fName, lName, email, password, confirmPassword} = props.data

    return(
        <div>
            <section className="showFormData">
            <h1 className="dataHeader">Your Form Data</h1>
            <p>First Name: {fName}</p>
            <p>Last Name: {lName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
            </section>
        </div>
    );
};

export default FormResults;
