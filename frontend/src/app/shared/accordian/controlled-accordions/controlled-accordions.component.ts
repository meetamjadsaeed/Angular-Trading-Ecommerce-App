import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatAccordion, MatExpansionPanel } from '@angular/material/expansion';
import { MatCheckbox } from '@angular/material/checkbox';

@Component({
  selector: 'app-controlled-accordions',
  templateUrl: './controlled-accordions.component.html',
  styleUrls: ['./controlled-accordions.component.css'],
})
export class ControlledAccordionsComponent {
  @Input() item: any;
  @Input() checked: boolean;
  @Input() cateId: number[];
  @Output() selectCategory = new EventEmitter<number>();
  @Output() selectCate = new EventEmitter<{ id: number; checked: boolean }>();

  expanded: string | false = false;

  handleChange(panel: string): void {
    this.expanded = this.expanded === panel ? false : panel;
  }

  handleSelectCate(id: number, checked: boolean): void {
    this.selectCate.emit({ id, checked });
  }
}
