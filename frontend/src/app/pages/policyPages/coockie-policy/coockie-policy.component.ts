import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { PageDataService } from '../../services/page-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cookie-policy',
  templateUrl: './coockie-policy.component.html',
  styleUrls: ['./coockie-policy.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class CoockiePolicyComponent implements OnInit {
  cookie: any = {};
  spinLoad = false;
  data: any = [];

  constructor(
    private pageDataService: PageDataService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinLoad = true;
    this.spinner.show();
    this.pageDataService.getPageData('Cookie Policy').subscribe(
      (res) => {
        console.log('resres', res);
        this.cookie = res?.length > 0 ? res[0] : {};
        this.data = res;
        this.spinLoad = false;
        this.spinner.hide();
      },
      (err) => {
        console.log('resres', err);
        this.spinLoad = false;
        this.spinner.hide();
      }
    );

    window.scroll(0, 0);
  }
}
