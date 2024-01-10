import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { HmsService } from '../hms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {

  appointment: Appointment = new Appointment();

  constructor(private appointmentService: HmsService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.appointment);
    this.appointmentService.createAppointment(this.appointment).subscribe(data => {
      console.log(data);
      this.router.navigate(['/appointmentlist']);
    },
    error => console.log(error));
  }

}
