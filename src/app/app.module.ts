import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { DocdashComponent } from './docdash/docdash.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CreatepatientComponent } from './createpatient/createpatient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { CreatemedicineComponent } from './createmedicine/createmedicine.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { HmsService } from './hms.service';

const routes: Routes = [
  { path: '', component: NewsfeedComponent },
  { path: 'doclogin', component: DocloginComponent },
  { path: 'adlogin', component: AdminloginComponent },
  { path: 'home', component: NewsfeedComponent },
  { path: 'createpatient', component: CreatepatientComponent, canActivate: [HmsService] },
  { path: 'docdash', component: DocdashComponent, canActivate: [HmsService] },
  { path: 'updatepatient/:id', component: UpdatePatientComponent, canActivate: [HmsService] },
  { path: 'admindash', component: AdmindashComponent, canActivate: [HmsService] },
  { path: 'medicinelist', component: MedicineListComponent, canActivate: [HmsService] },
  { path: 'createmedicine', component: CreatemedicineComponent, canActivate: [HmsService] },
  { path: 'updatemedicine/:id', component: UpdateMedicineComponent, canActivate: [HmsService] },
  { path: 'appointmentlist', component: AppointmentListComponent, canActivate: [HmsService] },
  { path: 'createappointment', component: CreateAppointmentComponent, canActivate: [HmsService] },
  { path: 'viewpatient/:id', component: ViewPatientComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    NewsfeedComponent,
    DocloginComponent,
    AdminloginComponent,
    DocdashComponent,
    AdmindashComponent,
    CreatepatientComponent,
    UpdatePatientComponent,
    MedicineListComponent,
    CreatemedicineComponent,
    UpdateMedicineComponent,
    AppointmentListComponent,
    CreateAppointmentComponent,
    ViewPatientComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
