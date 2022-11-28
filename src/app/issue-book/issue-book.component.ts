import { Component } from '@angular/core';

@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css']
})
export class IssueBookComponent {

  Name=""
  title=""
  IssueDate=""
  MembershipNo=""

  readValues=() =>
  {
    let data:any=
    {
      "Name":this.Name,
      "title":this.title,
      "IssueDate":this.IssueDate,
      "MembershipNo":this.MembershipNo
    }

    console.log(data)
  }

}
