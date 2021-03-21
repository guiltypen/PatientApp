import React, { useState } from "react";
//Data
import Patients from "../PatientData";
// one patient
import Patient from "../components/Patient";
// styles
import { ListWrapper } from "../components/styles";
import SearchBar from "./searchPatient";

const PatientList = (props) => {
  const [query, setQuery] = useState("");
  //   const filteredPatient = Patients.filter((patient) =>
  //     patient.patientName.includes(query)
  //   );
  //   const patientList = filteredPatient.map((patient) => (
  //     <Patient patient={patient} key={patient.id} />
  //   ));

  const patientList = Patients.filter((patient) =>
    patient.patientName.includes(query)
  ).map((patient) => (
    <Patient patient={patient} key={patient.id} setPatient={props.setPatient} />
  ));

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{patientList}</ListWrapper>
    </div>
  );
};

export default PatientList;
