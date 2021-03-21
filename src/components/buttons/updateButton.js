import React from "react";
import { useState } from "react";
import PatientModal from "../../Modals/PatientModal";

const UpdatePatient = (props) => {
  const [IsOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <div>
      <button onClick={openModal}>Update</button>
      <PatientModal
        // createPatient={props.createPatient}
        IsOpen={IsOpen}
        closeModal={closeModal}
        oldPatient={props.patient}
      />
    </div>
  );
};

export default UpdatePatient;
