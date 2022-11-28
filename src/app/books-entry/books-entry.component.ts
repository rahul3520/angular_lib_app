import { Component } from '@angular/core';

@Component({
  selector: 'app-books-entry',
  templateUrl: './books-entry.component.html',
  styleUrls: ['./books-entry.component.css']
})
export class BooksEntryComponent {


  image=""
  title=""
  description=""
  price=""
  author=""
  publisher=""
  language=""
  distributor=""
  releaseYear=""

  readValues=() =>
  {
    let data:any={
      "image":this.image,
      "title":this.title,
      "description":this.description,
      "price":this.price,
      "author":this.author,
      "publisher":this.publisher,
      "language":this.language,
      "distributor":this.distributor,
      "releaseYear":this.releaseYear
    }

    console.log(data)
  }

}
