// refund-policy.component.ts

import { Component, OnInit } from '@angular/core';
import { PageDataService } from '../../services/page-data.service';

@Component({
  selector: 'app-refund-policy',
  templateUrl: './refund-policy.component.html',
  styleUrls: ['./refund-policy.component.css'],
})
export class RefundPolicyComponent implements OnInit {
  refund: any = {};
  spinLoad: boolean = false;

  constructor(private pageDataService: PageDataService) {}

  ngOnInit(): void {
    this.spinLoad = true;
    let pageName = 'Refund Policy';
    this.pageDataService
      .getPageData(pageName)
      .then((res) => {
        this.refund = res?.data?.data?.pages;
        this.spinLoad = false;
      })
      .catch((err) => {
        console.error('Error fetching page data', err);
        this.spinLoad = false;
      });

    window.scroll(0, 0);
  }
}
