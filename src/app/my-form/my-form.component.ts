import { Component } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { User } from '../../interface/user';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-my-form',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.scss'
})
export class MyFormComponent {

  submitted = false;
 newUser:  User={
    email: "",
    lastName: "",
    firstName: "",
    password: ""
 };
  OnSubmit(){
    this.submitted = true;
    console.log(this.newUser);

  }
}
