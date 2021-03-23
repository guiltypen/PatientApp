import React from "react";
import { useParams, Redirect } from "react-router-dom";
//Styles
import { Button } from "@material-ui/core";
import {
  DetailWrapper,
  ButtonWrapper,
  DetailWrapperName,
} from "../components/styles";
//Delete
import DeleteButton from "./buttons/deletebutton";
// Stores
import patientStore from "../store/patientStore";

import UpdateButton from "./buttons/updateButton";

import { observer } from "mobx-react";

const PatientDetail = () => {
  const { patientSlug } = useParams();
  console.log(patientSlug);
  const patient = patientStore.Patients.find(
    (patient) => patient.slug === patientSlug
  );

  if (!patient) return <Redirect to="/patients" />;
  return (
    <div>
      <DetailWrapper>
        <DetailWrapperName>{patient.name}</DetailWrapperName>
        <p className="patientAge">Patient Age : {patient.age}</p>
        <p className="description">Patient Case Description : {patient.case}</p>
        {/* <p className="hospitalName">{patient.hospital.name}</p> */}
        {/* <p className="hospitalName">{patient.DoctorName}</p> */}
        <ButtonWrapper style={{ display: "flex" }}>
          <UpdateButton patient={patient} />
          <DeleteButton patientId={patient.id} />
        </ButtonWrapper>
      </DetailWrapper>
    </div>
  );
};

export default observer(PatientDetail);
