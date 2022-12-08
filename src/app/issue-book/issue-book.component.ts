import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css']
})
export class IssueBookComponent {

  bookName=""
  // title=""
  // IssueDate=""
  // MembershipNo=""

  constructor(private api:ApiService){}

  searchData:any=[]

  readValues=() =>
  {
    let data:any=
    {
      "bookName":this.bookName,
      
    }

    console.log(data)

    this.api.BookIssue(data).subscribe(

      (response:any)=>
      {
        console.log(response)

        if(response.length==0)
        {
          alert("Book not available for issue")
          window.location.reload()
        }
        else
        {
          alert("Book available for issue")
          this.searchData=response
        }
      }
    )
  }

}
