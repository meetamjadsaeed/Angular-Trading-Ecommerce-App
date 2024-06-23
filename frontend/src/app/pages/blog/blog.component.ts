import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BlogsService } from '../../services/blogs.service';
// import { AppState } from 'src/app/models/app-state.model';
// import { GetNews } from '../../network/Network';
// import { Blogs } from '../../redux/actions/AuthActions';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  loading = true;
  pageCount: number;
  currentPage = 1;
  blogs: any[] = [];
  totalBlogs: number = 20;
  limit = 10;

  constructor(private blogsService: BlogsService, private router: Router) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.loadBlogs();
  }

  loadBlogs(): void {
    this.blogsService.getBlogs().subscribe(
      (data) => {
        this.blogs = data;
        this.pageCount = Math.ceil(this.totalBlogs / this.limit);
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching blogs', error);
      }
    );
  }

  handlePageClick(event: any): void {
    this.currentPage = event?.selected + 1;
    this.loadBlogs();
  }

  navigateToBlogDetail(id: number): void {
    this.router.navigate(['/blog', id]);
  }
}
