import React from "react";
import { Route } from "react-router";

//Homepage
import Homepage from "./components/homepage";
//Data
// import Patients from "../src/PatientData";
// Patients List
import PatientList from "./components/PatientList";
//styles
import { GlobalStyle } from "./components/styles";
import PatientDetail from "./components/patientDetail";
import patientStore from "./store/patientStore";
function App() {
  console.log(patientStore.Patients);
  return (
    <div>
      <GlobalStyle />
      <switch>
        <Route>
          <Homepage />
        </Route>
        <Route path="/Patients">
          <PatientList />
        </Route>
        <Route path="/Patients/:patientId">
          <PatientDetail />
        </Route>
      </switch>
    </div>
  );
}

export default App;
