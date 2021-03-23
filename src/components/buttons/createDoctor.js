import React from "react";
import { useState } from "react";
import DoctorModal from "../../Modals/DoctorModal";

const AddDoctor = () => {
  const [IsOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <div>
      <button onClick={openModal}>Add new</button>
      <DoctorModal
        // createPatient={props.createPatient}
        IsOpen={IsOpen}
        closeModal={closeModal}
      />
    </div>
  );
};

export default AddDoctor;
