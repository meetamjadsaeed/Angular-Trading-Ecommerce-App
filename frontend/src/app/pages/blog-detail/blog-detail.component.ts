import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogDetailService } from '../../services/blog-detail.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
})
export class BlogDetailsComponent implements OnInit {
  Singleblog: any;
  load: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogDetailService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.blogService.getBlogDetail(id).subscribe(
      (res) => {
        this.Singleblog = res.data; // Adjust as per your API response structure
        this.load = false;
      },
      (err) => {
        console.error(err);
        this.load = false;
      }
    );
  }

  navigateBack() {
    this.router.navigate(['/blog']);
  }
}
