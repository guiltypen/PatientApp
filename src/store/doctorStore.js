// import Patients from "../PatientData";
import { makeObservable, observable, action } from "mobx";
import axios from "axios";
class DoctorStore {
  Doctors = [];
  constructor() {
    makeObservable(this, {
      Doctors: observable,
      createDoctor: action,
      deleteDoctor: action,
      UpdatedDoctor: action,
      fetchDoctor: action,
    });
  }
  createDoctor = async (newDoctor) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/hospital/1/doctors",
        newDoctor
      );
      this.Doctor.push(res.data);
    } catch (error) {
      console.error("DoctorStore -> createDoctor -> error", error);
    }
  };
  deleteDoctor = async (doctorId) => {
    try {
      await axios.delete(`http://localhost:8000/docotrs/${doctorId}`);
      this.Doctors = this.Doctors.filter((doctor) => doctor.id !== +doctorId);
    } catch (error) {
      console.error("DoctorStore -> deleteDoctor -> error", error);
    }
  };
  UpdatedDoctor = async (updateddoctor) => {
    try {
      await axios.put(
        `http://localhost:8000/doctor/${updateddoctor.id}`,
        updateddoctor
      );
      const doctor = this.Doctor.find(
        (doctor) => doctor.id === updateddoctor.id
      );
      for (const key in doctor) doctor[key] = updateddoctor[key];
    } catch (error) {
      console.error("DoctorStore -> UpdatedDoctor -> error", error);
    }
  };
  fetchDoctor = async () => {
    try {
      const response = await axios.get("http://localhost:8000/doctors");
      this.Doctors = response.data;
      console.log(response.data);
    } catch (error) {
      console.error("DoctorStore -> fetchDoctor -> error", error);
    }
  };
}
const doctorStore = new DoctorStore();
doctorStore.fetchDoctor();
export default doctorStore;
