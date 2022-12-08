import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-books-entry',
  templateUrl: './books-entry.component.html',
  styleUrls: ['./books-entry.component.css']
})
export class BooksEntryComponent {

  bookName = ""
  author = ""
  publisherName =""
  genre =""
  totalPages = ""
  price =""
  yearOfPublish = ""

  constructor(private api:ApiService){}

  readValues=() =>
  {
    let data:any={
      "bookName":this.bookName,
      "author":this.author,
      "publisherName":this.publisherName,
      "genre":this.genre,
      "totalPages":this.totalPages,
      "price":this.price,
      "yearOfPublish":this.yearOfPublish
      
    }

    console.log(data)

    this.api.BookAdd(data).subscribe(

      (response:any)=>
      {
        console.log(response)

        if(response.status=="success")
        {
          alert("book added to db")
        }
        else
        {
          alert("Something went wrong")
        }
      }
    )
  }

}
