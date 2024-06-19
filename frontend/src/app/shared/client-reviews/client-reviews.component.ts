import { Component } from '@angular/core';

@Component({
  selector: 'app-client-reviews',
  templateUrl: './client-reviews.component.html',
  styleUrls: ['./client-reviews.component.css'],
})
export class ClientReviewsComponent {
  client1 = 'assets/img/review1.png';
  client2 = 'assets/img/review2.png';
  client3 = 'assets/img/review3.png';
  client4 = 'assets/img/review4.png';

  reviews = [
    {
      name: 'Joeby Ragpa',
      date: '12 April, 2014 at 16:50',
      text: 'We possess within us two minds. So far I have written only of the conscious mind. I would now like to introduce you to your second mind, the hidden and mysterious subconscious. Our subconscious mind contains such power and complexity that it literally staggers the imagination.',
      rating: 3.9,
      img: this.client1,
    },
    {
      name: 'Joeby Ragpa',
      date: '12 April, 2014 at 16:50',
      text: 'We possess within us two minds. So far I have written only of the conscious mind. I would now like to introduce you to your second mind, the hidden and mysterious subconscious.',
      rating: 3.9,
      img: this.client2,
    },
    {
      name: 'Joeby Ragpa',
      date: '12 April, 2014 at 16:50',
      text: 'We possess within us two minds. So far I have written only of the conscious mind. I would now like to introduce you to your second mind, the hidden and mysterious subconscious.',
      rating: 3.9,
      img: this.client3,
    },
    {
      name: 'Joeby Ragpa',
      date: '12 April, 2014 at 16:50',
      text: 'We possess within us two minds. So far I have written only of the conscious mind. I would now like to introduce you to your second mind, the hidden and mysterious subconscious.',
      rating: 3.9,
      img: this.client4,
    },
  ];
}
