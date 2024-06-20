import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-view-order-modal',
  templateUrl: './view-order-modal.component.html',
  styleUrls: ['./view-order-modal.component.css'],
})
export class ViewOrderModalComponent {
  @Input() isOpenModal: boolean = false;
  @Input() selectedData: any;
  @Output() setIsOpenModal = new EventEmitter<boolean>();

  // faTimesCircle = faTimesCircle;

  closeModal() {
    this.setIsOpenModal.emit(false);
  }
}
