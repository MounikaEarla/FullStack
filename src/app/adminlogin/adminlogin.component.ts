import { Component, OnInit } from '@angular/core';
import { HmsService } from '../hms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  username2 : any;
  password2 : any;
  invalidLogin = false

  constructor(private router:Router, public loginservice: HmsService) { }

  ngOnInit(): void {
  }

  checkLogin() {
    if (this.username2==="user" && this.password2==="user") {
      this.router.navigate(['admindash'])
      
      this.invalidLogin = false
    }

    // if (this.loginservice.authenticate("USER", "USER")
    // ) {
    //   this.router.navigate(['admindash'])
      
    //   this.invalidLogin = false
    // }
    // else if (this.loginservice.authenticate(this.username2, this.password2)
    // ) {
    //   this.router.navigate(['admindash'])
      
    //   this.invalidLogin = false
    // } else
    // {
    //   this.invalidLogin = true
    //   alert("Wrong Credentials");
    //   this.router.navigate(['home'])
    // }
      
  }

}
