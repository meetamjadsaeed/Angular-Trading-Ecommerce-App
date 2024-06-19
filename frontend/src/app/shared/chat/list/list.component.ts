import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
// import { SellerImageUrl } from '../../../network/ApiUrl';
// import imageProoo from '../../../assets/img/profile-img.png';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() currentChat: any;
  @Input() isSeller: boolean;
  @Output() updateCurrentChat = new EventEmitter<number>();

  chats$: Observable<any[]>;
  currentUser$: Observable<any>;

  constructor(private store: Store<{ chat: any; auth: any }>) {
    this.chats$ = this.store.select((state) => state.chat.chats);
    this.currentUser$ = this.store.select((state) => state.auth.users);
  }

  onChatClick(chatId: number): void {
    this.updateCurrentChat.emit(chatId);
  }
}
