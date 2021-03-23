import React from "react";
import { useState } from "react";
import DoctorModal from "../../Modals/DoctorModal";
import { Button } from "@material-ui/core";
import { UpdateButton } from "../styles";

const UpdateDoctor = (props) => {
  const [IsOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <div>
      <UpdateButton>
        <Button
          variant="contained"
          style={{
            color: "#15080B",
            fontSize: "10px",
            fontWeight: "bold",
            backgroundColor: "#90CAF9",
          }}
          color="primary"
          onClick={openModal}
        >
          Update
        </Button>
      </UpdateButton>
      <DoctorModal
        IsOpen={IsOpen}
        closeModal={closeModal}
        oldDoctor={props.doctor}
      />
    </div>
  );
};

export default UpdateDoctor;
