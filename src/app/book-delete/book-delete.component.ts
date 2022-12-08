import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent {

  bookName=""

  constructor(private api:ApiService){}

  readValues=() =>
  {
    let data:any=
    {
      "bookName":this.bookName
    }

    console.log(data)

    this.api.BookDelete(data).subscribe(

      (response:any)=>
      {
        if(response.status=="success")
        {
          alert("book deleted successfuly!")
        }
        else
        {
          alert("Invalid book name")
        }

      }


    )


  
  
  }
}
