import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  title:string = "Random title";

  date:Date = new Date(Date.now());

  userName:string ="Random User";

  content:string = "Random Content"

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
