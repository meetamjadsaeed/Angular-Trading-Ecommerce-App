import { Component, OnInit } from '@angular/core';
import { FaqService } from '../../services/faq.service'; // Replace with your faq service
import { Observable } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css'],
})
export class FaqsComponent implements OnInit {
  loading: boolean = false;
  faqData: any[] = [];
  spinLoad: boolean = false;

  constructor(private faqService: FaqService) {}

  ngOnInit(): void {
    this.loadFaqs();
  }

  loadFaqs(): void {
    this.spinLoad = true;
    this.faqService
      .getFaqs()
      .pipe(
        catchError((error) => {
          console.error('Error loading FAQs:', error);
          return []; // Return empty array or handle error as needed
        }),
        finalize(() => {
          this.spinLoad = false;
        })
      )
      .subscribe((data) => {
        this.faqData = data;
      });
  }
}
