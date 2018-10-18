import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../../models/Message.model';

@Component({
  selector: 'app-messages-display',
  templateUrl: './messages-display.component.html',
  styleUrls: ['./messages-display.component.css']
})
export class MessagesDisplayComponent implements OnInit {

  @Input() messages: Message[] = [];

  constructor() { }

  ngOnInit() {
  }
}
