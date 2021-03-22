// import Patients from "../PatientData";
import { makeObservable, observable, action } from "mobx";
import axios from "axios";
class PatientStore {
  Patients = [];
  constructor() {
    makeObservable(this, {
      Patients: observable,
      createPatient: action,
      deletePatient: action,
      UpdatePatient: action,
      fetchPatients: action,
    });
  }
  createPatient = async (newpatient) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/hospital/1/patients",
        newpatient
      );
      this.Patients.push(res.data);
    } catch (error) {
      console.error("PatientStore -> CreatePatient -> error", error);
    }
  };
  deletePatient = async (patientId) => {
    try {
      await axios.delete(`http://localhost:8000/patients/${patientId}`);
      this.Patients = this.Patients.filter(
        (patient) => patient.id !== +patientId
      );
    } catch (error) {
      console.error("PatientStore -> DeletePatient -> error", error);
    }
  };
  UpdatePatient = async (updatedpatient) => {
    try {
      await axios.put(
        `http://localhost:8000/patients/${updatedpatient.id}`,
        updatedpatient
      );
      const patient = this.Patients.find(
        (patient) => patient.id === updatedpatient.id
      );
      for (const key in patient) patient[key] = updatedpatient[key];
    } catch (error) {
      console.error("PatientStore -> UpdatePatient -> error", error);
    }
  };
  fetchPatients = async () => {
    try {
      const response = await axios.get("http://localhost:8000/patients");
      this.Patients = response.data;
      console.log(response.data);
    } catch (error) {
      console.error("PatientStore -> fetchPatient -> error", error);
    }
  };
}
const patientStore = new PatientStore();
patientStore.fetchPatients();
export default patientStore;
