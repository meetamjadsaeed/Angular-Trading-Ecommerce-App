import { Component, OnInit } from '@angular/core';
// import { GetFaqs } from '../../../network/Network';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css'],
})
export class FaqsComponent implements OnInit {
  loading: boolean = false;
  faqData: any[] = [];
  spinLoad: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.spinLoad = true;
    // GetFaqs()
    //   .then((res) => {
    //     this.faqData = res?.data?.data?.faqs;
    //     this.spinLoad = false;
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     this.spinLoad = false;
    //   });
  }
}
