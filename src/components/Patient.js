import React from "react";

import { observer } from "mobx-react";
//styles
import { PatientWrapper } from "./styles";
import UpdateButton from "./buttons/updateButton";

import { Link } from "react-router-dom";

const Patient = (props) => {
  const patient = props.patient;

  return (
    <PatientWrapper>
      <Link
        style={{ textDecoration: "none", color: "white" }}
        to={`/patients/${patient.slug}`}
        onClick={() => console.log("In Pateint.js", patient)}
      >
        <p className="patientlName" onClick={props.setPatient}>
          {patient.name}
        </p>
      </Link>
    </PatientWrapper>
  );
};

export default observer(Patient);
