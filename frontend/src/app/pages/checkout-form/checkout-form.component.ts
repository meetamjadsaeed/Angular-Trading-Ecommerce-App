import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { loadStripe, Stripe } from '@stripe/stripe-js';
// import {
//   StripeCardElementOptions,
//   StripeElements,
//   StripeElementsOptions,
//   StripeService
// } from '@stripe/angular-stripe-js';

import { FormBuilder, FormGroup } from '@angular/forms';
// import { ToastService } from 'ngx-toastr'; // Import ToastService or similar notification service

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css'],
})
export class CheckoutFormComponent implements OnInit {
  @Input() StepTwoContinue: any;
  @Input() handleNext: any;
  @Input() setCardToken: any;
  @Input() cardToken: string;
  @Output() onFormSubmit = new EventEmitter<any>();

  // stripe: Stripe;
  // elements: StripeElements;
  card: any;
  form: FormGroup;
  payProcessing = false;
  error = false;
  done = false;
  payButton = true;

  // cardOptions: StripeCardElementOptions = {
  //   hidePostalCode: true,
  // };

  // elementsOptions: StripeElementsOptions = {
  //   locale: 'en',
  // };

  // constructor(
  //   private stripeService: StripeService,
  //   private fb: FormBuilder,
  //   private toast: ToastService // Use your notification service
  // ) {
  //   this.form = this.fb.group({});
  // }

  constructor() {}

  async ngOnInit() {
    // this.stripeService
    //   .elements(this.elementsOptions)
    //   .subscribe((elements: StripeElements) => {
    //     this.elements = elements;
    //     if (!this.card) {
    //       this.card = this.elements.create('card', this.cardOptions);
    //       this.card.mount('#card-element');
    //     }
    //   });
  }

  async handleSubmit(event: Event) {
    event.preventDefault();
    // if (!this.elements) {
    //   return;
    // }

    // const { token, error } = await this.stripe.createToken(this.card);
    // if (token) {
    //   this.setCardToken(token.id);
    //   this.handleNext(event);
    //   this.onFormSubmit.emit(event);
    // } else {
    //   // this.toast.error('Something Went Wrong');
    // }
  }

  onChange(event: any) {
    this.payButton = !event.complete;
  }
}
