import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { DocdashComponent } from './docdash/docdash.component';
import { CreatepatientComponent } from './createpatient/createpatient.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { CreatemedicineComponent } from './createmedicine/createmedicine.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';

const routes: Routes = [
  {path:'admindash',  component:AdmindashComponent},
  {path:'docdash',  component:DocdashComponent},
  {path:'createpatient',  component:CreatepatientComponent},
  {path:'medicinelist',  component:MedicineListComponent},
  {path:'appointmentlist',  component:AppointmentListComponent},
  {path:'createappointment',  component:CreateAppointmentComponent},
  {path:'viewpatient',  component: ViewPatientComponent},
  {path:'updatepatient/:id',  component: UpdatePatientComponent},
  {path:'createmedicine',  component:CreatemedicineComponent},
  {path:'updatemedicine/:id',  component:UpdateMedicineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
