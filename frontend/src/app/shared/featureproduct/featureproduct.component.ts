import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-featureproduct',
  templateUrl: './featureproduct.component.html',
  styleUrls: ['./featureproduct.component.css'],
})
export class FeatureproductComponent {
  @Input() featureitem: any;
}
