import { Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'Sidebar',
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class SidebarComponent {
  public menulist: any[] = [];
  public currentItem: any;

  ngOnInit() {
    const example = [{
      title: 'Events',
      subMenu: [
        { title: 'Sports (20)', url: 'sports' },
        { title: 'Cestivals (11)', url: '/festivals' },
        { title: 'Conferences (1)', url:'/conferences' },
        { title: 'Family (1)', url: 'family' },
        { title: 'Business (22)', url: 'business' },
        { title: 'VIP (3)', url: 'vip' }
      ],
      expand: 'hide',
      url: '/event'
    },
    { title: 'Memberships', subMenu: [
      { title: 'Sports (20)', url: 'sports' },
      { title: 'VIP (3)', url: 'vip' },
      { title: 'Others (20)', url: 'others' }
    ],
    expand: 'hide',
    url: '/memberships'
  },
    { title: 'Seasonal Tickets', subMenu: [], expand: 'hide', url: '/seasonal-tickets'},
    { title: 'Purchases', subMenu: [], expand: 'hide', url: '/purchases'}
  ];

    this.menulist = example;
  }

  public toggleSubMenu(item: any) {
    if (item.expand) {
      item.expand = item.expand === 'hide' ? 'show' : 'hide';
    }
  }
}