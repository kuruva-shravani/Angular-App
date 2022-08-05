import { Component, OnInit } from '@angular/core';
import { UserHttpdataService } from '../userhttpdata.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css'],
})
export class AddbookComponent implements OnInit {
  constructor(private userdata: UserHttpdataService) {}

  ngOnInit(): void {}

  postData(postdata) {
    console.log(postdata);
    this.userdata.posthttpdata(postdata).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        alert('updated data successfully');
      },
    });
  }
}
