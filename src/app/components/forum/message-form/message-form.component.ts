import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {
  forumForm: FormGroup;
  submitted: Boolean = false;
  @Output() sendMessage = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.forumForm = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  get controls() { return this.forumForm.controls; }

  public onSubmit() {
    this.submitted = true;
    if (this.forumForm.invalid) {
      return;
    }

    this.sendMessage.emit({title: this.forumForm.get('title').value, body: this.forumForm.get('body').value});
    this.forumForm.reset();
    this.submitted = false;

  }

}
