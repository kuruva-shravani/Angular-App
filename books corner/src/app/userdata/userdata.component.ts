import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { userinterface } from '../user';
import { UserHttpdataService } from '../userhttpdata.service';
import { ViewChild } from '@angular/core';
// import { userdatainterface } from '../userdata';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css'],
})
export class UserdataComponent implements OnInit {
  public bookdetails: userinterface[];
  bookInfo: FormGroup;
  // showmodal = false;
  editusermodal = false;
  errormsg = '';
  public bookDataObject: {
    id: number;
    bookname: string;
    genre: string;
    author: string;
    publisher: string;
  };
  constructor(private userdata: UserHttpdataService) {
    this.bookInfo = new FormGroup({
      bookname: new FormControl(null, [Validators.required]),
      genre: new FormControl(null, [Validators.required]),
      author: new FormControl(null, [Validators.required]),
      publisher: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit() {
    console.log('fetching userdata!');
    this.getusers();
  }

  openeditmodal(data) {
    this.bookDataObject = { ...data };
    this.editusermodal = true;
  }

  closeeditmodal() {
    this.editusermodal = false;
  }
  // openmodal() {
  //   this.showmodal = true;
  // }
  // closemodal(post) {
  //   this.showmodal = false;
  // }

  public getusers() {
    this.userdata.getfetchdata().subscribe(
      (book) => {
        this.bookdetails = book;
        console.log(this.bookdetails);
      },
      (error: any) => {
        console.log('Error Found' + error);
        this.errormsg = error;
      }
    );
  }

  // postData(postdata) {
  //   console.log(postdata);
  //   this.userdata.posthttpdata(postdata).subscribe({
  //     next: (res) => {
  //       console.log(res);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //     complete: () => {
  //       this.getusers();
  //     },
  //   });
  //   this.showmodal = false;
  // }

  deleteuser(userid) {
    console.log(userid);
    this.userdata.deletedata(userid).subscribe({
      next: (deleteUser) => {
        console.log(deleteUser);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        alert('Are you sure,you want to delete the book 👍');
        this.getusers();
      },
    });
  }

  updateuser() {
    console.log(this.bookDataObject);
    this.userdata
      .putupdateddata(this.bookDataObject, this.bookDataObject.id)
      .subscribe({
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          alert('updated book sucessfully😊');
          this.getusers();
        },
      });
    this.editusermodal = false;
  }
}
