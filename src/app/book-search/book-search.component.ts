import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent {

  bookName=""

  constructor(private api:ApiService){}

  searchData:any=[]

  readValues=() =>
  {
    let data:any=
    {
      "bookName":this.bookName
    }

    console.log(data)

    this.api.BookSearch(data).subscribe(

      (response:any)=>
      {
        console.log(response)

        if(response.length==0)
        {
          alert("Book not found")
          window.location.reload()
        }
        else
        {
          alert("Book found!")
          this.searchData=response

        }
      }
    )
  }
}
