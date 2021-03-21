import React, { useState } from "react";
//Data
import Patients from "../PatientData";
// one patient
import Patient from "../components/Patient";
// styles
import { ListWrapper } from "../components/styles";
//SearchBar
import SearchBar from "./searchPatient";
//import from store
import patientStore from "../store/patientStore";

import PatientModal from "../Modals/PatientModal";

import { observer } from "mobx-react";
import AddPatient from "./buttons/createPatient";

const PatientList = (props) => {
  const [query, setQuery] = useState("");

  const patientList = patientStore.Patients.filter((patient) =>
    patient.patientName.includes(query)
  ).map((patient) => (
    <Patient patient={patient} key={patient.id} setPatient={props.setPatient} />
  ));

  // const patientList = patientStore.Patients.map((patient) => (
  //   <Patient patient={patient} key={patient.id} setPatient={props.setPatient} />
  // ));

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{patientList}</ListWrapper>
      <AddPatient />
    </div>
  );
};

export default observer(PatientList);
