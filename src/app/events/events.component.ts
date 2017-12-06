import { Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'Events',
  templateUrl: './events.html',
  styleUrls: ['./events.css']
})
export class EventsComponent {
  public config: SwiperOptions = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 10
  };

  public events: any[] = [
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