import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  BookDelete=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/bookDelete",dataToSend)
  }

  BookSearch=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/bookSearch",dataToSend)
  }

  BookAdd=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/booksEntry",dataToSend)
  }

  BookIssue=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/booksIssue",dataToSend)
  }

  BookView=()=>
  {
    return this.http.get("http://localhost:8080/viewBooks")
  }
}
