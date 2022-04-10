import { Injectable } from '@angular/core';
import { Comment } from './comment.model';
import { StaticDataSource } from './static.datasource';
import { User } from './user.model';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class CommentRepo {
    private comments: Comment[] = [];

    constructor(private dataSource: RestDataSource) {
        this.refresh();
    }

    refresh(): void{
        this.dataSource.getComments().subscribe(data => {
            this.comments = data;
        });
    }

    getComments() {
        return this.comments;
    }

    getCommentsByTopicId(topicId: any){
        return this.comments.filter(a => a.topicId === topicId);
    }

    getComment(id: any)
    {
        return this.comments.find(b => b._id == id)!;
    }

    saveComment(savedComment: Comment): void {
        if (savedComment._id === null || savedComment._id === 0 || savedComment._id === undefined) {
            this.dataSource.addComment(savedComment).subscribe(b => {
                this.comments.push(savedComment);
            });
        }
    }
}
