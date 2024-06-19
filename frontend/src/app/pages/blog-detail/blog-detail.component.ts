import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { SingleBlog } from '../../../network/Network';
// import { singleBlog } from '../../../redux/actions/AuthActions';
// import { AppState } from '../../../redux/app.state';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
})
export class BlogDetailsComponent implements OnInit {
  Singleblog$: Observable<any>;
  load: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router // private store: Store<AppState>
  ) {
    // this.Singleblog$ = this.store.select(state => state.AuthReducer.Singleblog);
  }

  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id');
    // SingleBlog(id).then(res => {
    //   this.store.dispatch(singleBlog(res?.data?.data));
    // }).catch(err => {
    //   console.log(err);
    // });
    // setTimeout(() => {
    //   this.load = false;
    // }, 2000);
  }

  navigateBack() {
    this.router.navigate(['/blog']);
  }
}
