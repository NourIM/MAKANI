import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'Membership-cards',
  templateUrl: './membership-cards.html',
  styleUrls: ['./membership-cards.css']
})
export class MemebershipCardsComponent {
  @Input() public cards = [];
  public config: SwiperOptions = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30
  };

  ngOnInit() {}
}