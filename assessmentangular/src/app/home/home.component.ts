import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user-service.service';

declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private userservice: UserService) {}
  homeform: FormGroup;
  showmodal = false;
  detailsObject: { username: string; email: string; password: string };
  tabledetails: any;
  ngOnInit(): void {
    this.tabledetails = this.userservice.userdetails;

    this.homeform = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
    });
  }

  ondelete(email: string) {
    this.userservice.deleteuser(email);
    console.log(email);
  }

  // onedit(data: any) {
  //   console.log(data);
  // }

  openmodal(details) {
    this.detailsObject = { ...details };
    const length = this.detailsObject.username.length;
    console.log(length);

    this.showmodal = true;
  }

  closeModal() {
    this.showmodal = false;
  }

  updateUserData() {
    this.tabledetails = this.userservice.replaceUser(this.detailsObject);
    this.showmodal = false;
  }
}
