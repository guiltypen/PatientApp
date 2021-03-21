import React from "react";
import { useParams, Redirect } from "react-router-dom";
//Styles
import { DetailWrapper } from "../components/styles";
//Delete
import DeleteButton from "./buttons/deletebutton";
// Stores
import patientStore from "../store/patientStore";

import { observer } from "mobx-react";

const PatientDetail = () => {
  const { patientId } = useParams();
  console.log(patientId);
  const patient = patientStore.Patients.find(
    (patient) => patient.slug === patientId
  );
  if (!patient) return <Redirect to="/Patients" />;
  return (
    <div>
      <DetailWrapper>
        <p className="patientlName">{patient.patientName}</p>
        <p className="patientAge">{patient.PatientAge}</p>
        <p className="description">{patient.CaseDescription}</p>
        <p className="hospitalName">{patient.HospitalName}</p>
        <p className="hospitalName">{patient.DoctorName}</p>
      </DetailWrapper>
      <DeleteButton patientId={patient.id} />
    </div>
  );
};

export default observer(PatientDetail);
