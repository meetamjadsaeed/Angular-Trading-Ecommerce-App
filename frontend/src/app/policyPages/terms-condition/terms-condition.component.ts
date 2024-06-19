import { Component, OnInit } from '@angular/core';
// import { PageData } from '../../../network/Network';

@Component({
  selector: 'app-terms-condition',
  templateUrl: './terms-condition.component.html',
  styleUrls: ['./terms-condition.component.css'],
})
export class TermsConditionComponent implements OnInit {
  terms: any = {};
  spinLoad: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.spinLoad = true;
    let data = 'Terms And Conditions';
    // PageData(data)
    //   .then((res) => {
    //     this.terms = res?.data?.data?.pages;
    //     this.spinLoad = false;
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     this.spinLoad = false;
    //   });

    window.scroll(0, 0);
  }
}
