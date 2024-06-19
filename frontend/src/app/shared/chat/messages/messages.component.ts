import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
// import { ChatService } from '../../../services/chat.service';
// import { SellerImageUrl } from '../../../network/ApiUrl';
// import imageProoo from '../../../assets/img/profile-img.png';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit, OnChanges {
  @Input() currentChat: any;
  @Input() currentUser: any;
  @Input() userType: string | null = null;
  @Input() token: string;
  @Output() updateCurrentChat = new EventEmitter<number>();
  @Output() fetchChatAgain = new EventEmitter<void>();

  @ViewChild('messagesEndRef') messagesEndRef: ElementRef;

  message: string = '';
  apiType: string | null;

  // constructor(private chatService: ChatService, private toastr: ToastrService) {}
  constructor() {}

  ngOnInit(): void {
    this.apiType = this.userType === 'App\\User' ? null : 'seller';
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes.currentChat && changes.currentChat.currentValue) {
    //   this.scrollToBottom();
    //   this.updateSeenMessages();
    // }
  }

  scrollToBottom(): void {
    try {
      this.messagesEndRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
    } catch (err) {}
  }

  formatAmPm(date: Date): string {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    // minutes = minutes < 10 ? '0' + minutes : minutes;
    return hours + ':' + minutes + ' ' + ampm;
  }

  updateSeenMessages(): void {
    const messageIds = this.currentChat.messages.map((m: any) => m.id);
    const messageSeen = {
      message_ids: messageIds,
      user_id: this.currentUser.id,
      type: this.userType,
    };
    // if (this.token) {
    //   this.chatService.updateSeenMessages(this.token, messageSeen, this.apiType).subscribe(
    //     (res) => {},
    //     (err) => {
    //       if (err?.error?.errors) {
    //         this.toastr.error(err.error.errors.message || err.error.errors['message'].message);
    //       }
    //     }
    //   );
    // }
  }

  sendMessage(): void {
    const prepareMessageData = {
      chat_id: this.currentChat?.id ?? null,
      user_id: this.currentChat?.user_detail?.id ?? null,
      message: this.message,
    };
    // this.chatService.sendMessage(this.token, prepareMessageData, this.apiType).subscribe(
    //   (res) => {
    //     const chat_id = res.data.response.data.chat_id ?? null;
    //     this.message = '';
    //     this.updateCurrentChat.emit(chat_id);
    //   },
    //   (err) => {
    //     if (err?.error?.errors) {
    //       this.toastr.error(err.error.errors.message || err.error.errors['message'].message);
    //     }
    //   }
    // );
  }
}
