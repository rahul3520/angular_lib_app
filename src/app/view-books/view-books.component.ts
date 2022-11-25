import { Component } from '@angular/core';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent {

  books:any=[
    {
      "image":"https://images-na.ssl-images-amazon.com/images/I/71Ui-NwYUmL.jpg",
      "title":"Harry potter",
      "description":"The novels chronicle the lives of a young wizard, and his friends Hermione Granger and Ron Weasley.Wriiten by JK Rowling.",
      "price":678
    },
    {
      "image":"https://www.bing.com/th?id=OSK.78c5f174a9c0f02b9949c02371ce853a&w=180&h=270&c=4&rs=1&qlt=80&o=6&dpr=1.3&pid=SANGAM",
      "title":"2 States",
      "description":"Story of a Couple coming from 2 states in India who face hardships in convincing their parents to approve of their marriage.",
      "price":274
    },
    {
      "image":"https://th.bing.com/th/id/OIP.u1jvgQh_S5zIR3e4uX5oNwHaLH?pid=ImgDet&rs=1",
      "title":"The Hobbit",
      "description":"Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely travelling further than the pantry of his hobbit-hole.",
      "price":227
    },
    {
      "image":"https://m.media-amazon.com/images/I/51tK519fUHL._SY346_.jpg",
      "title":"Catching Fire (Hunger Games Trilogy, Book 2)",
      "description":"Katniss has won annual Games with fellow district Peeta Mellark. But it was a victory won by defiance of the Capitol and their harsh rules.",
      "price":285
    },
    {
      "image":"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1375596592i/6186357.jpg",
      "title":"The Maze Runner",
      "description":"When Thomas wakes up in the lift, the only thing he can remember is his name. He is surrounded by strangers in same situation.",
      "price":395
    },
    {
      "image":"https://cdn2.penguin.com.au/covers/original/9780141924403.jpg",
      "title":"Percy Jackson",
      "description":"Percy Jackson & the Olympians is a pentalogy of fantasy novels written by American author Rick Riordan, and the first book series in the Camp Half-Blood Chronicles.",
      "price":205
    },
    {
      "image":"https://m.media-amazon.com/images/I/51i+R7TVLBL.jpg",
      "title":"Hitchhiker's Guide to Galaxy",
      "description":"It's an ordinary Thursday lunchtime for Arthur Dent until his house gets demolished.The Earth follows shortly afterwards.",
      "price":235
    },
    {
      "image":"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1344263637i/179174.jpg",
      "title":"The Secret of the Unicorn",
      "description":"Tintin stumbles across a model ship at the Old Street Market. Only it isn't just any model ship-it's the Unicorn and it holds a clue to finding pirate treasure!",
      "price":199
    },
    {
      "image":"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1618526890i/13335037.jpg",
      "title":"The Divergent",
      "description":"Society is divided into five factions, dedicated to cultivation of a particular virtues- honesty, selflessness, Dauntless, Amity and Erudite.",
      "price":499
    },
    {
      "image":"https://m.media-amazon.com/images/I/410llGwMZGL._SX328_BO1,204,203,200_.jpg",
      "title":"The Alchemist",
      "description":"Story is about a shepherd boy named Santiago who travels from his homeland in Spain to the Egypt in search of a treasure buried in Pyramids.",
      "price":159
    }
  ]
}
