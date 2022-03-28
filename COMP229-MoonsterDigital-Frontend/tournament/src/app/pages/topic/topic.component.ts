import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  topicTitle:string ="Random Topic";

  date:Date = new Date(Date.now());

  content:string="Random Content";

  userName:string = "Random User";

  constructor() { }

  ngOnInit(): void {
  }

}
