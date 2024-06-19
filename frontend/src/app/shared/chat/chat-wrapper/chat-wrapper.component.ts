// chat-wrapper.component.ts
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
// import { ChatService } from 'src/app/services/chat.service';
// import { loadChats, setCurrentChat } from 'src/app/store/chat.actions';
// import Pusher from 'pusher-js';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-chat-wrapper',
  templateUrl: './chat-wrapper.component.html',
  styleUrls: ['./chat-wrapper.component.css'],
})
export class ChatWrapperComponent implements OnInit {
  token: string;
  isSeller: boolean;
  searchQuery: string | null;
  currentChat: any;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    // private chatService: ChatService,
    private toastr: ToastrService
  ) {
    this.token = 'YOUR_TOKEN';
    this.isSeller = false; // Set according to your logic
    this.searchQuery = this.route.snapshot.paramMap.get('search');
  }

  ngOnInit(): void {
    this.fetchChats();

    // const pusher = new Pusher('YOUR_PUSHER_APP_KEY', {
    //   cluster: 'YOUR_PUSHER_APP_CLUSTER',
    //   encrypted: true,
    // });

    // this.store.select('chat').subscribe((state) => {
    //   this.currentChat = state.currentChat;
    //   if (this.currentChat) {
    //     const channel = pusher.subscribe('chat.' + this.currentChat.id);
    //     channel.bind('App\\Events\\ChatEvents', (data: any) => {
    //       this.fetchSingleChat(data.data);
    //     });
    //   }
    // });
  }

  fetchChats(): void {
    // this.chatService.getAllChat(this.token, this.searchQuery, this.isSeller ? 'seller' : null).subscribe({
    //   next: (res: any) => {
    //     const responseResult = res?.data?.response?.data;
    //     let chatList = this.setDefaultActiveChat(responseResult);
    //     this.store.dispatch(loadChatsSuccess({ chats: chatList }));
    //   },
    //   error: (err) => {
    //     console.error(err);
    //   }
    // });
  }

  fetchSingleChat(id: number): void {
    // this.chatService.getSingleChat(this.token, id, this.isSeller ? 'seller' : null).subscribe({
    //   next: (res: any) => {
    //     const chat = res.data.response.data;
    //     this.store.dispatch(setCurrentChat({ chat }));
    //   },
    //   error: (err) => {
    //     console.error(err);
    //   }
    // });
  }

  setDefaultActiveChat(
    chatList: any[],
    chatExist: any = null,
    senderDetailPresent: any = null
  ): any[] {
    let currentChat = chatExist ?? chatList[0];
    let chatObject = {
      id: currentChat?.id ?? null,
      user_detail: this.isSeller
        ? currentChat?.user ?? senderDetailPresent
        : currentChat?.seller ?? senderDetailPresent,
      messages: currentChat?.messages ?? [],
    };
    // this.store.dispatch(setCurrentChat({ chat: chatObject }));
    return chatExist === null && senderDetailPresent !== null
      ? [chatObject, ...chatList]
      : [...chatList];
  }
}
