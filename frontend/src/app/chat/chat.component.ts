import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { GetAllChat, GetSingleChat } from '../../../network/ChatNetwork';
// import { ChatList } from '../../../redux/actions/ChatAction';
// import { toast } from 'react-toastify';
// import { AppState } from '../../../redux/app.state';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  isSeller$: Observable<boolean>;
  sellerToken$: Observable<string>;
  userToken$: Observable<string>;
  token: string = '';

  constructor(
    private route: ActivatedRoute // private store: Store<AppState>
  ) {
    // this.isSeller$ = this.store.select(state => state.SellerReducer.sellerIsLogin);
    // this.sellerToken$ = this.store.select(state => state.SellerReducer.sellerToken);
    // this.userToken$ = this.store.select(state => state.AuthReducer.token);
  }

  ngOnInit(): void {
    this.isSeller$.subscribe((isSeller) => {
      this.sellerToken$.subscribe((sellerToken) => {
        this.userToken$.subscribe((userToken) => {
          this.token = isSeller ? sellerToken : userToken;
        });
      });
    });
  }
}
