import { Component, OnInit } from '@angular/core';
// import { PageData } from '../../../network/Network';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css'],
})
export class PrivacyPolicyComponent implements OnInit {
  privacy: any = {};
  spinLoad: boolean = false;

  constructor() {}

  ngOnInit(): void {
    // this.spinLoad = true;
    // let data = "Privacy Policy";
    // PageData(data)
    //   .then((res) => {
    //     this.privacy = res?.data?.data?.pages;
    //     this.spinLoad = false;
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // window.scroll(0, 0);
  }
}
