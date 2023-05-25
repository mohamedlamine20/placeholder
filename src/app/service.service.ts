import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  public get():Observable<Post[]>{
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
  }
}
