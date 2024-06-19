import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'; // Use FormBuilder for reactive forms

@Component({
  selector: 'app-variation',
  templateUrl: './variation.component.html',
  styleUrls: ['./variation.component.css'],
})
export class VariationComponent implements OnInit {
  form: FormGroup; // Define FormGroup for reactive form
  isColorActive: boolean = false;
  customizeChoice: any[] = [];
  systemDefaultColors: any[] = [];
  selectedAttribute: any[] = [];
  selectedOptionAttribute: any[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      // Define your form structure here based on formValues structure
      attributes: [],
      colors: [],
      choices: [],
    });

    // Perform initialization logic here
    if (Object.keys(this.form.value).length > 0) {
      if (this.form.value.attributes.length > 0) {
        this.handleEditAttributes();
      }
      // Handle system color selection
      if (this.form.value.colors.length > 0) {
        // Implement logic to set systemDefaultColors
      }
    }
  }

  handleEditAttributes() {
    // Implement logic similar to React's handleEditAttributes
    // Ensure to update selectedAttribute and selectedOptionAttribute accordingly
  }

  handleColor(val: boolean) {
    this.isColorActive = val;
  }

  updateChoice(choiceObject: any) {
    // Implement updateChoice logic
  }

  handleSystemColorSelection(val: any[]) {
    let choiceObject = {
      name: 'system_color',
      title: 'system color',
      options: val,
    };
    // Implement setFieldValue logic
    // Implement callback logic
  }

  handleAttributes(val: any[]) {
    // Implement handleAttributes logic
  }

  handleAttributesOption(val: any[], attributeIndex: number) {
    // Implement handleAttributesOption logic
  }
}
