import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forum-comments',
  templateUrl: './forum-comments.component.html',
  styleUrls: ['./forum-comments.component.scss']
})
export class ForumCommentsComponent implements OnInit {

  comments:Array<any> = [

    {

      title: "Random title1",

      date: new Date(Date.now()),

      userName:"Random User1",

      content: "Random Content1"

    },

    {

      title: "Random title2",

      date: new Date(Date.now()),

      userName:"Random User2",

      content:"Random Content2"

    },

    {

      title:"Random title3",

      date:new Date(Date.now()),

      userName:"Random User3",

      content:"Random Content3"

    }]
  
  constructor() { }

  ngOnInit(): void {
  }

}
