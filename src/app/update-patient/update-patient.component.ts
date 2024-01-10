import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient';
import { HmsService } from '../hms.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {

  id: number;
  patient: Patient = new Patient();
  constructor(private patientService: HmsService,
    private route: ActivatedRoute,
    private router: Router) { }

 

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.patientService.getPatientById(this.id).subscribe(data => {
      this.patient = data;
    }, error => console.log(error) );


  }
  
  onSubmit() {
    console.log(this.patient);
    this.patientService.updatePatient(this.patient).subscribe((data: any) => {console.log(data);});
      this.goToPatientlist();
    }
  goToPatientlist() {
    this.router.navigate(['/docdash']);
  }
}

