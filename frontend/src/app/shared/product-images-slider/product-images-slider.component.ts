import { Component, Input, OnInit, ViewChild } from '@angular/core';
// import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-product-images-slider',
  templateUrl: './product-images-slider.component.html',
  styleUrls: ['./product-images-slider.component.css'],
})
export class ProductImagesSliderComponent implements OnInit {
  @Input() ParamData: string[] = [];
  // @ViewChild('slider1', { static: false }) slider1: SlickCarouselComponent;
  // @ViewChild('slider2', { static: false }) slider2: SlickCarouselComponent;

  // nav1: SlickCarouselComponent;
  // nav2: SlickCarouselComponent;

  ImageUrl: string = 'http://example.com/api/images'; // Replace with actual ImageUrl

  slideConfig1 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-nav',
  };

  slideConfig2 = {
    slidesToShow: this.ParamData.length,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    focusOnSelect: true,
    swipeToSlide: true,
  };

  ngOnInit(): void {
    // this.nav1 = this.slider1;
    // this.nav2 = this.slider2;
  }
}
