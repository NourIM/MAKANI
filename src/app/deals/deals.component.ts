import { Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'Deals',
  templateUrl: './deals.html',
  styleUrls: ['./deals.css']
})
export class DealsComponent {
  public config: SwiperOptions = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30
  };

  public deals: any[] = [
    {image: 'assets/img/group_4_copy_6.png', date: 'Friday 3 Nov 2016', time: '8:20', eventType: 'FootBall', ticket: '20 Remaining of 400 Seats', place: 'Riyadh, King Fahed International Stadium'},
    {image: 'assets/img/group_18_copy.png', date: 'Friday 3 Nov 2016', time: '8:20', eventType: 'Drama', ticket: '20 Remaining of 400 Seats', place: 'Riyadh, King Fahed International Stadium'},
    {image: 'assets/img/group_18.png', date: 'Friday 3 Nov 2016', time: '8:20', eventType: 'Drama', ticket: '20 Remaining of 400 Seats', place: 'Riyadh, King Fahed International Stadium'},
    {image: 'assets/img/group_4_copy_6.png', date: 'Friday 3 Nov 2016', time: '8:20', eventType: 'FootBall', ticket: '20 Remaining of 400 Seats', place: 'Riyadh, King Fahed International Stadium'},
    {image: 'assets/img/group_18.png', date: 'Friday 3 Nov 2016', time: '8:20', eventType: 'Drama', ticket: '20 Remaining of 400 Seats', place: 'Riyadh, King Fahed International Stadium'},
    {image: 'assets/img/group_4_copy_6.png', date: 'Friday 3 Nov 2016', time: '8:20', eventType: 'FootBall', ticket: '20 Remaining of 400 Seats', place: 'Riyadh, King Fahed International Stadium'},
    {image: 'assets/img/group_18.png', date: 'Friday 3 Nov 2016', time: '8:20', eventType: 'Drama', ticket: '20 Remaining of 400 Seats', place: 'Riyadh, King Fahed International Stadium'},
    {image: 'assets/img/group_4_copy_6.png', date: 'Friday 3 Nov 2016', time: '8:20', eventType: 'FootBall', ticket: '20 Remaining of 400 Seats', place: 'Riyadh, King Fahed International Stadium'},
    {image: 'assets/img/group_18.png', date: 'Friday 3 Nov 2016', time: '8:20', eventType: 'Drama', ticket: '20 Remaining of 400 Seats', place: 'Riyadh, King Fahed International Stadium'},
    {image: 'assets/img/group_4_copy_6.png', date: 'Friday 3 Nov 2016', time: '8:20', eventType: 'FootBall', ticket: '20 Remaining of 400 Seats', place: 'Riyadh, King Fahed International Stadium'},
    {image: 'assets/img/group_18.png', date: 'Friday 3 Nov 2016', time: '8:20', eventType: 'Drama', ticket: '20 Remaining of 400 Seats', place: 'Riyadh, King Fahed International Stadium'},
    {image: 'assets/img/group_4_copy_6.png', date: 'Friday 3 Nov 2016', time: '8:20', eventType: 'FootBall', ticket: '20 Remaining of 400 Seats', place: 'Riyadh, King Fahed International Stadium'}
  ];
  ngOnInit() {}
}