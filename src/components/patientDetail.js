import React from "react";
import { DetailWrapper } from "../components/styles";

const PatientDetail = (props) => {
  const patient = props.patient;
  return (
    <div>
      <DetailWrapper>
        <p className="patientlName">{patient.patientName}</p>
        <p className="patientAge">{patient.PatientAge}</p>
        <p className="description">{patient.CaseDescription}</p>
        <p className="hospitalName">{patient.HospitalName}</p>
        <p className="hospitalName">{patient.DoctorName}</p>
      </DetailWrapper>
      <button>Delete</button>
      <button>Update</button>
    </div>
  );
};

export default PatientDetail;
