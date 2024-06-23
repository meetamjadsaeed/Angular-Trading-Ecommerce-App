// privacy-policy.component.ts

import { Component, OnInit } from '@angular/core';
import { PageDataService } from '../../services/page-data.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css'],
})
export class PrivacyPolicyComponent implements OnInit {
  privacy: any = {};
  spinLoad: boolean = false;

  constructor(private pageDataService: PageDataService) {}

  ngOnInit(): void {
    this.spinLoad = true;
    let pageName = 'Privacy Policy';
    this.pageDataService
      .getPageData(pageName)
      .then((res) => {
        this.privacy = res?.data?.data?.pages;
        this.spinLoad = false;
      })
      .catch((err) => {
        console.error('Error fetching page data', err);
        this.spinLoad = false;
      });

    window.scroll(0, 0);
  }
}
