import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';
import { Medicine } from './medicine';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class HmsService {

  constructor(private router: Router,private httpClient: HttpClient) { }

  // adminauth.service  , authentication.service
  authenticate(username2: string, password2: string) {
    if (username2 === "Rishi" && password2 === "Prem@13") {
      sessionStorage.setItem('username2', username2)
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username2')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username2')
  }

  // adminauthgaurd.service  auth-guard.service
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot
    ): boolean | Promise<boolean> | Observable<boolean>{
    if (this.isUserLoggedIn()) 
    {
      return true;
    }

    else{

    this.router.navigate(['home']);
    return false;

    }
  }

  // appointment.service

  getAppointmentslist(): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>('/appointments');
  }

  createAppointment(appointment: Appointment): Observable<Appointment> {
    return this.httpClient.post<Appointment>('/appointments', appointment);
    // return this.httpClient.post('registerEmployee', emp);
  }

  getAppointmentById(id: number): Observable<Appointment> {   
    return this.httpClient.get<Appointment>('/appointments/'+ id);
  }

  deleteAppointment(id: number): Observable<Object> {
    return this.httpClient.delete('/appointmentsdel/'+ id);
  }

  //medicine.service


  getMedicinesList(): Observable<Medicine[]>{
    return this.httpClient.get<Medicine[]>('/medicines');
  }

  createMedicine(medicine: Medicine): Observable<Medicine> {
    return this.httpClient.post<Medicine>('/medicines', medicine);
  }

  getMedicineById(id: number): Observable<Medicine> {
    return this.httpClient.get<Medicine>('/medicines/'+ id);
  }

  updateMedicine(medicine: any): Observable<Object> {
    return this.httpClient.put('/medicines/', medicine);
  }

  deleteMedicine(id: number): Observable<Object> {
    return this.httpClient.delete('/medicines/'+ id);
  }

  // patient.service

  
  getPatientslist(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>('/patients');
  }

  createPatient(patient: Patient): Observable<Patient> {
    return this.httpClient.post<Patient>('/patients', patient);
  }

  getPatientById(id: number): Observable<Patient> {   
    return this.httpClient.get<Patient>('/patients/'+ id);
  }

  updatePatient(patient: Patient): any{
    return this.httpClient.put('/updatePatient/', patient);
  }

  deletePatient(id: number): Observable<Object> {
    return this.httpClient.delete('/patientsdel/'+ id);
  }


}
