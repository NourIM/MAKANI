import { Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'Membership-cards',
  templateUrl: './membership-cards.html',
  styleUrls: ['./membership-cards.css']
})
export class MemebershipCardsComponent {
  public config: SwiperOptions = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30
  };

  public memberships: any[] = [
    {image: 'assets/img/group_5.png'},
    {image: 'assets/img/group_5_copy_2.png'},
    {image: 'assets/img/group_5_copy.png'},
    {image: 'assets/img/group_5_copy_2.png'},
    {image: 'assets/img/group_5_copy.png'},
    {image: 'assets/img/group_5_copy_2.png'},
    {image: 'assets/img/group_5_copy_2.png'},
    {image: 'assets/img/group_5_copy.png'},
    {image: 'assets/img/group_5_copy_2.png'},
  ];

  ngOnInit() {}
}