import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  Name=""
  AadhaarNo=""
  Address=""
  Pincode=""
  DOB=""
  EmailId=""
  PhoneNo=""
  username=""
  password=""
  ConfirmPassword=""

  readValues=() =>
  {
    let data:any=
    {
      "Name":this.Name,
      "AadhaarNo":this.AadhaarNo,
      "Address":this.Address,
      "Pincode":this.Pincode,
      "DOB":this.DOB,
      "EmailId":this.EmailId,
      "PhoneNo":this.PhoneNo,
      "username":this.username,
      "password":this.password,
      "ConfirmPassword":this.ConfirmPassword
    }

    console.log(data)
  }


}
