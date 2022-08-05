import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { userinterface } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  Registerform: FormGroup;
  users: any = {};

  public result: any;
  constructor(private _http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.Registerform = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onsubmit() {
    console.log('hello');
    console.log(this.Registerform.value);

    this.users = Object.assign(this.users, this.Registerform.value);
    this.addusers(this.users);
    this.Registerform.reset();
  }

  addusers(users) {
    let adddata = [];
    if (localStorage.getItem('adddata')) {
      adddata = JSON.parse(localStorage.getItem('adddata'));
      adddata = [users, ...adddata];
      console.log(adddata);
    } else {
      adddata = [users];
    }
    localStorage.setItem('adddata', JSON.stringify(adddata));
  }
}
