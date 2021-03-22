import React from "react";
import { DeleteButtonStyled } from "../styles";

import patientStore from "../../store/patientStore";

const DeleteButton = (props) => {
  const handleDelete = (event) => {
    event.preventDefault();
    patientStore.deletePatient(props.patientId);
  };

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
