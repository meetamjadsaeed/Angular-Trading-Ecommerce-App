// terms-condition.component.ts

import { Component, OnInit } from '@angular/core';
import { PageDataService } from '../../services/page-data.service';

@Component({
  selector: 'app-terms-condition',
  templateUrl: './terms-condition.component.html',
  styleUrls: ['./terms-condition.component.css'],
})
export class TermsConditionComponent implements OnInit {
  terms: any = {};
  spinLoad: boolean = false;

  constructor(private pageDataService: PageDataService) {}

  ngOnInit(): void {
    this.spinLoad = true;
    let pageName = 'Terms And Conditions';
    this.pageDataService
      .getPageData(pageName)
      .then((res) => {
        this.terms = res?.data?.data?.pages;
        this.spinLoad = false;
      })
      .catch((err) => {
        console.error('Error fetching page data', err);
        this.spinLoad = false;
      });

    window.scroll(0, 0);
  }
}
