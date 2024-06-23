// hotdeals.component.ts

import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HotDealsService } from '../../services/hot-deals.service';

@Component({
  selector: 'app-hotdeals',
  templateUrl: './hotdeals.component.html',
  styleUrls: ['./hotdeals.component.css'],
})
export class HotdealsComponent implements OnInit {
  bannerData: any[] = [];
  loading = false;

  constructor(
    private hotdealsService: HotDealsService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.fetchBannerData();
  }

  fetchBannerData(): void {
    this.loading = true;
    this.hotdealsService.getBannerData().subscribe(
      (data) => {
        this.bannerData = data?.filter(
          (item) => item.banner_type === 'product_page'
        );
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching banner data', error);
        this.toastr.error('Failed to fetch banner data');
        this.loading = false;
      }
    );
  }
}
