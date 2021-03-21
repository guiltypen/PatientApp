import React, { useState } from "react";

//Homepage
import Homepage from "./components/homepage";
//Data
// import Patients from "../src/PatientData";
// Patients List
import PatientList from "./components/PatientList";
//styles
import { GlobalStyle } from "./components/styles";
import Patients from "./PatientData";
import PatientDetail from "./components/patientDetail";

function App() {
  const [patient, setPatient] = useState(Patients[0]);
  return (
    <div>
      <GlobalStyle />
      <Homepage />

      <PatientList setPatient={setPatient} />
      <PatientDetail patient={patient} />
    </div>
  );
}

export default App;
