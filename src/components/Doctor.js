import React from "react";

import { observer } from "mobx-react";
//styles
import { PatientWrapper } from "./styles";
import UpdateButton from "./buttons/updateButton";

import { Link } from "react-router-dom";

const Doctor = (props) => {
  const doctor = props.doctor;

  return (
    <PatientWrapper>
      <Link
        style={{ textDecoration: "none", color: "white" }}
        to={`/doctors/${doctor.slug}`}
        onClick={() => console.log("In Doctor.js", doctor)}
      >
        <p onClick={props.setDoctor}>{doctor.DoctorName}</p>
      </Link>
    </PatientWrapper>
  );
};

export default observer(Doctor);
