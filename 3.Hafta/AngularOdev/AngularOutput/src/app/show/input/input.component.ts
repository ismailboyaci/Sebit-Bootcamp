
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent implements OnInit {
  userForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    surname: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.required])
  });


  @Output() UserEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  AddUser() {
    this.UserEvent.emit(this.userForm.value);
    this.userForm.reset();
  }


}
