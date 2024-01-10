import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicine } from '../medicine';
import { HmsService } from '../hms.service';


@Component({
  selector: 'app-createmedicine',
  templateUrl: './createmedicine.component.html',
  styleUrls: ['./createmedicine.component.css']
})
export class CreatemedicineComponent implements OnInit {

  medicine: Medicine = new Medicine();
  constructor(private medicineService: HmsService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveMedicine() {
    this.medicineService.createMedicine(this.medicine).subscribe(data => {
      console.log(data);
      this.goToMedicineList();
    }, 
    error => console.log(error));
  }

  goToMedicineList() {

    this.router.navigate(['/medicinelist']);

  }

  onSubmit() {
    
    console.log(this.medicine);
    this.saveMedicine();
  }

}
