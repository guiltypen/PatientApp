import React, { useState } from "react";
import Modal from "react-modal";
import patientStore from "../store/patientStore";
const PatientModal = (props) => {
  const oldPatient = props.oldPatient;
  const [patient, setPatient] = useState(
    oldPatient ?? {
      name: "",
      age: 0,
      case: "",
      // HospitalName: "",
      // DoctorName: "",
    }
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    patientStore[oldPatient ? "UpdatePatient" : "createPatient"](patient);
    console.log(patient);
    props.closeModal();
  };

  const handleChange = (event) => {
    setPatient({ ...patient, [event.target.name]: event.target.value });
  };
  return (
    <Modal
      isOpen={props.IsOpen}
      onRequestClose={props.closeModal}
      contentLabel="Example Modal"
    >
      <h3>New Patient</h3>
      <form>
        <div className="form-group row">
          <div className="col-6">
            <label>patientName</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={patient.name}
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label>PatientAge</label>
            <input
              type="number"
              defaultValue={patient.age}
              className="form-control"
              onChange={handleChange}
              name="age"
            />
          </div>
        </div>
        <div className="form-group">
          <label>CaseDescription</label>
          <input
            type="text"
            value={patient.case}
            className="form-control"
            onChange={handleChange}
            name="case"
          />
        </div>
        <div className="form-group">
          <label> HospitalName</label>
          {/* <input
            type="text"
            value={patient.name}
            className="form-control"
            onChange={handleChange}
            name="HospitalName"
          /> */}
        </div>
        <div className="form-group">
          <label> DoctorName</label>
          {/* <input
            type="text"
            value={patient.DoctorName}
            className="form-control"
            onChange={handleChange}
            name="DoctorName"
          /> */}
        </div>
        <button onClick={handleSubmit}>Update</button>
      </form>
    </Modal>
  );
};

export default PatientModal;
