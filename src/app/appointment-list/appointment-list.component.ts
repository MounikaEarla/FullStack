import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from '../appointment';
import { HmsService } from '../hms.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  appointments: Appointment[];

  constructor(private hmsService: HmsService,
    private router: Router) { }

  ngOnInit(): void {

    this.getAppointments();
  }

  private getAppointments() {
    this.hmsService.getAppointmentslist().subscribe(data => {this.appointments = data;
      });
  }

  deleteAppointment(id: number){ 
    this.hmsService.deleteAppointment(id).subscribe( data => { 
      console.log(data);
      this.getAppointments();
    })
  }

}
