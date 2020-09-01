/* eslint-disable require-jsdoc */
import React, { useState } from "react";
import "./App.scss";
import PersonForm from "./components/PersonForm";
import FormResults from "./components/FormResults";

function App() {
  const [inputs, setInputs] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <>
      <PersonForm inputs={inputs} setInputs={setInputs} />
      <FormResults data={inputs} />
    </>
  );
}

export default App;
