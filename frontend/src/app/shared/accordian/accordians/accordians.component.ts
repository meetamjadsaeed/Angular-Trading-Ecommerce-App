import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-accordians',
  templateUrl: './accordians.component.html',
  styleUrls: ['./accordians.component.css'],
})
export class AccordiansComponent {
  @Input() item: any;
  @Input() checked: boolean;
  @Output() selectCategory = new EventEmitter<number>();

  handleSelectCategory(id: number): void {
    this.selectCategory.emit(id);
  }
}
