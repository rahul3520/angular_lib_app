import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  username=""
  password=""

  constructor(private route:Router){}

  readValues=() =>
  {
    let data:any=
    {
      "username":this.username,
      "password":this.password


    }

    console.log(data)

    if (data.username=="admin" && data.password == "12345") {

      alert("valid login")
      this.route.navigate(["/adminpage"])
      
    } else {

      alert("invalid login")
      
    }
  }

}
