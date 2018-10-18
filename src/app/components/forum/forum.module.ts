import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ForumComponent } from './forum.component';
import { MessageFormComponent } from './message-form/message-form.component';
import { MessagesDisplayComponent } from './messages-display/messages-display.component';
import { ForumRoutingModule } from './forum.routing';
import { ForumService } from './forum.service';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ForumRoutingModule
  ],
  declarations: [
    ForumComponent,
    MessageFormComponent,
    MessagesDisplayComponent
  ],
  entryComponents: [
  ],
  providers: [
    ForumService
  ]
})
export class ForumModule {}
