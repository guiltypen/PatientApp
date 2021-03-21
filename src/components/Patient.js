import React from "react";
import Patients from "../PatientData";
//styles
import { PatientWrapper } from "./styles";

const Patient = (props) => {
  const patient = props.patient;

  return (
    <PatientWrapper>
      <p className="patientlName" onClick={() => props.setPatient(patient)}>
        {patient.patientName}
      </p>
      {/* <p className="patientAge">{patient.PatientAge}</p> */}
      {/* <p className="description">{patient.CaseDescription}</p> */}
      <p className="hospitalName">{patient.HospitalName}</p>
      {/* <p className="hospitalName">{patient.DoctorName}</p> */}
    </PatientWrapper>
  );
};

export default Patient;
