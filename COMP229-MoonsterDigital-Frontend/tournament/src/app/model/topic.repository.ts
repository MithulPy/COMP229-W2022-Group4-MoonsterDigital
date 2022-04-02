import { Injectable } from '@angular/core';
import { Topic } from './topic.model';
import { StaticDataSource } from './static.datasource';
import { User } from './user.model';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class TopicRepo {
    private topics: Topic[] = [];

    constructor(private dataSource: RestDataSource) {
        dataSource.getTopics().subscribe(data => {
            this.topics = data;
        });
    }

    getTopics() {
        return this.topics;
    }

    getTopic(id: any)
    {
        return this.topics.find(b => b._id == id)!;
    }

    saveTopic(savedTopic: Topic): void {
        if (savedTopic._id === null || savedTopic._id === 0 || savedTopic._id === undefined) {
            this.dataSource.addTopic(savedTopic).subscribe(b => {
                this.topics.push(savedTopic);
            });
        }
    }

    get authenticated(): boolean
    {
      return this.dataSource.loggedIn();
    }
}
