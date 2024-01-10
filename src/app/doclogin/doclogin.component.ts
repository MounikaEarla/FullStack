import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HmsService } from '../hms.service';

@Component({
  selector: 'app-doclogin',
  templateUrl: './doclogin.component.html',
  styleUrls: ['./doclogin.component.css']
})
export class DocloginComponent implements OnInit {

  username : any;
    password : any;
    invalidLogin = false

  constructor(private router:Router, public loginservice: HmsService) { }

  ngOnInit(): void {
  }

  checkLogin() {

    if (this.username==="user" && this.password==="user") {
      this.router.navigate(['docdash'])
      
      this.invalidLogin = false
    }

    // if (this.loginservice.authenticate(this.username, this.password)
    // ) {
    //   this.router.navigate(['docdash'])
      
    //   this.invalidLogin = false
    // } else
    // {
    //   this.invalidLogin = true
    //   alert("Wrong Credentials");
    //   this.router.navigate(['home'])
    // }
      
  }

}
