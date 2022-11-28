import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { SignUpComponent } from './sign-up/sign-up.component';                       
import { UserLoginComponent } from './user-login/user-login.component';
import { BooksEntryComponent } from './books-entry/books-entry.component';
import { IssueBookComponent } from './issue-book/issue-book.component';
import { ViewBooksComponent } from './view-books/view-books.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"usersignup",
    component:SignUpComponent
  },
  {
    path:"userlogin",
    component:UserLoginComponent
  },
  {
    path:"booksentry",
    component:BooksEntryComponent
  },
  {
    path:"issuebooks",
    component:IssueBookComponent
  },
  {
    path:"viewbooks",
    component:ViewBooksComponent
  },
  {
    path:"booksearch",
    component:BookSearchComponent
  },
  {
    path:"bookdelete",
    component:BookDeleteComponent
  },
  {
    path:"editbook",
    component:EditBookComponent
  }
  
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    SignUpComponent,
    UserLoginComponent,
    BooksEntryComponent,
    IssueBookComponent,
    ViewBooksComponent,
    BookSearchComponent,
    BookDeleteComponent,
    EditBookComponent,
    NavBarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
