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
        <p className="patientlName">{patient.name}</p>
        <p className="patientAge">{patient.age}</p>
        <p className="description">{patient.case}</p>
        <p className="hospitalName">{patient.hospital.name}</p>
        {/* <p className="hospitalName">{patient.DoctorName}</p> */}
      </DetailWrapper>
      <DeleteButton patientId={patient.id} />
    </div>
  );
};

export default observer(PatientDetail);
