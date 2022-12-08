import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent {

  
  constructor(private api:ApiService){

    api.BookView().subscribe(

      (response:any)=>
      {
        console.log(response)

        this.books=response
      }
    )
  }

  books:any=[]

}
