import { Component, OnInit } from '@angular/core';
// import { PageData } from '../../../network/Network';

@Component({
  selector: 'app-refund-policy',
  templateUrl: './refund-policy.component.html',
  styleUrls: ['./refund-policy.component.css'],
})
export class RefundPolicyComponent implements OnInit {
  refund: any = {};
  spinLoad: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.spinLoad = true;
    let data = 'Refund Policy';
    // PageData(data)
    //   .then((res) => {
    //     this.refund = res?.data?.data?.pages;
    //     this.spinLoad = false;
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     this.spinLoad = false;
    //   });

    // window.scroll(0, 0);
  }
}
