import React, { useState } from "react";
import Modal from "react-modal";
import doctorStore from "../store/doctorStore";
const DoctorModal = (props) => {
  const oldDoctor = props.oldDoctor;
  const [doctor, setDoctor] = useState(
    oldDoctor ?? {
      DoctorName: "",
      DoctorQualitfication: "",
    }
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    doctorStore[oldDoctor ? "UpdateDoctor" : "createDoctor"](doctor);
    console.log(doctor);
    props.closeModal();
  };
  const handleChange = (event) => {
    setDoctor({ ...doctor, [event.target.name]: event.target.value });
  };
  console.log(oldDoctor);
  return (
    <Modal
      isOpen={props.IsOpen}
      onRequestClose={props.closeModal}
      contentLabel="Example Modal"
    >
      <h3>New Doctor</h3>
      <form>
        <div className="form-group row">
          <div className="col-6">
            <label>Doctor Name</label>
            <input
              type="text"
              className="form-control"
              name="DoctorName"
              defaultValue={doctor.DoctorName}
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label>Doctor Qualitfication</label>
            <input
              type="text"
              defaultValue={doctor.DoctorQualitfication}
              className="form-control"
              onChange={handleChange}
              name="DoctorQualitfication"
            />
          </div>
        </div>

        <button onClick={handleSubmit}>Update</button>
      </form>
    </Modal>
  );
};

export default DoctorModal;
