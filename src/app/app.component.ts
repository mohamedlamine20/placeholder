import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  post :Post[]=[];
  showIt:boolean=false;
  constructor(private service :ServiceService){}
  ngOnInit(): void {
    this.service.get().
       subscribe(res=>this.post=res)
  }
  show(post:Post){
    this.showIt =!this.showIt;
  }
  title = 'placeholder';
  
}
