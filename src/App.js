import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

//Homepage
import Homepage from "./components/homepage";
//Data
// import Patients from "../src/PatientData";
// Patients List
import PatientList from "./components/PatientList";
//styles
import { GlobalStyle, ListDetailWrapper } from "./components/styles";
import PatientDetail from "./components/patientDetail";
import patientStore from "./store/patientStore";

function App() {
  const [selected_Item, setSelected] = useState(null);
  console.log(selected_Item);
  return (
    <div>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/patients" exact>
          <PatientList />
        </Route>
        <Route path="/patients/:patientSlug">
          <ListDetailWrapper>
            <PatientList setSelected={setSelected} />
            <PatientDetail />
          </ListDetailWrapper>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
