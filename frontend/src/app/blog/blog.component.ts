// src/app/blog/blog.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
// import { AppState } from 'src/app/models/app-state.model';
// import { GetNews } from '../../network/Network';
// import { Blogs } from '../../redux/actions/AuthActions';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  vlogs: any;
  loading = true;
  pageCount: number;
  currentPage = 1;

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.loadBlogs();
  }

  loadBlogs(): void {
    // GetNews(this.currentPage).subscribe(
    //   (res: any) => {
    //     this.store.dispatch(Blogs({ blogs: res?.data?.data?.blogs }));
    //     const total = res?.data?.data?.blogs?.total;
    //     const limit = res?.data?.data?.blogs?.per_page;
    //     this.pageCount = Math.ceil(total / limit);
    //     this.loading = false;
    //   },
    //   (error) => {
    //     console.error(error);
    //   }
    // );
  }

  handlePageClick(event: any): void {
    this.currentPage = event?.selected + 1;
    this.loadBlogs();
  }

  navigateToBlogDetail(id: number): void {
    this.router.navigate(['/blog', id]);
  }
}
