import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forum-topics',
  templateUrl: './forum-topics.component.html',
  styleUrls: ['./forum-topics.component.scss']
})
export class ForumTopicsComponent implements OnInit {

  topics: Array<any> = [

    {

      topicTitle: "Random Topic",

      date:  new Date(Date.now()),

      content:"Random Content",

      userName:"Random User"

    },

    {

      topicTitle: "Random Topic",

      date:  new Date(Date.now()),

      content:"Random Content",

      userName:"Random User"

    },

    {

      topicTitle: "Random Topic",

      date:  new Date(Date.now()),

      content:"Random Content",

      userName:"Random User"

    }]
    
  constructor() { }

  ngOnInit(): void {
  }

}
