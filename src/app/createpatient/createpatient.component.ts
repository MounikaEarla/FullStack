import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { HmsService } from '../hms.service';

@Component({
  selector: 'app-createpatient',
  templateUrl: './createpatient.component.html',
  styleUrls: ['./createpatient.component.css']
})
export class CreatepatientComponent implements OnInit {

  patient: Patient = new Patient();
  constructor(private patientService: HmsService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.patient);
    this.patientService.createPatient(this.patient).subscribe(data => {
      console.log(data);
      this.router.navigate(['/admindash']);
  }, 
  error => console.log(error));
  }

}
