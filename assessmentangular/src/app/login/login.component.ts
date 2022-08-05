import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private userservice: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  getdata() {
    console.log(this.loginForm.value);

    const userlogged = this.userservice.ValidateUser(this.loginForm.value);
    console.log(userlogged);

    if (userlogged) {
      this.router.navigate(['/home']);
    } else {
      alert('Enter valid credentials or Register with new details');
    }
    this.loginForm.reset();
  }
}
