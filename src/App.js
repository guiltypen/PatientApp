import React from "react";
import { Route, Switch } from "react-router-dom";

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
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/patients">
          <PatientList />
        </Route>
        <Route path="/patients/:patientId">
          <PatientDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
