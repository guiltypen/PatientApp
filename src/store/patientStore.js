import Patients from "../PatientData";
import { makeObservable, observable, action } from "mobx";
import slugify from "react-slugify";
class PatientStore {
  Patients = Patients;
  constructor() {
    makeObservable(this, {
      Patients: observable,
      createPatient: action,
      deletePatient: action,
      UpdatePatient: action,
    });
  }
  createPatient = (patient) => {
    patient.id = this.Patients[this.Patients.length - 1].id + 1;
    patient.slug = slugify(patient.patientName);
    this.Patients.push(patient);
  };
  deletePatient = (patientId) => {
    this.Patients = this.Patients.filter((patient) => patient.id !== patientId);
  };
  UpdatePatient = (updatePatient) => {
    const patient = this.Patients.find(
      (patient) => patient.id === updatePatient.id
    );
    for (const key in patient) patient[key] = updatePatient[key];
    patient.slug = slugify(patient.name);
  };
}

const patientStore = new PatientStore();
export default patientStore;
