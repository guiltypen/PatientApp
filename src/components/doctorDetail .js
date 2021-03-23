import React from "react";
import { useParams, Redirect } from "react-router-dom";
//Styles
import { Button } from "@material-ui/core";
import { DetailWrapper, ButtonWrapper, DetailWrapperName } from "./styles";
//Delete
import DeleteButton from "./buttons/deletebutton";
// Stores
import doctorStore from "../store/doctorStore";

import UpdateButtonDoctor from "./buttons/updateButtonDoctor";

import { observer } from "mobx-react";

const DoctorDetail = () => {
  const { doctorSlug } = useParams();
  const doctor = doctorStore.Doctors.find(
    (doctor) => doctor.slug === doctorSlug
  );

  if (!doctor) return <Redirect to="/doctors" />;
  return (
    <div>
      <DetailWrapper>
        <DetailWrapperName>{doctor.DoctorName}</DetailWrapperName>
        <p className="description">
          Doctor Qualitfication: {doctor.DoctorQualitfication}
        </p>
        {/* <p className="hospitalName">{doctor.hospital.name}</p> */}
        {/* <p className="hospitalName">{doctor.DoctorName}</p> */}
        <ButtonWrapper style={{ display: "flex" }}>
          <UpdateButtonDoctor doctor={doctor} />
          <DeleteButton doctorId={doctor.id} />
        </ButtonWrapper>
      </DetailWrapper>
    </div>
  );
};

export default observer(DoctorDetail);
