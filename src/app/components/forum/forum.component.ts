import { Component, OnInit } from '@angular/core';
import { ForumService } from './forum.service';
import { Message } from '../../models/Message.model';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  messages: Array<Message>;

  constructor(private forumService: ForumService) { }

  ngOnInit() {
    this.forumService.getMessage().subscribe((res: Array<Message>) => {
      this.messages = res;
    });
  }

  public onSendMessage(params: Message) {
    this.forumService.createMessage(params).subscribe((res: Array<Message>) => {
      this.messages = res;
    });
  }

}
