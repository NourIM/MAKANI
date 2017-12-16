import { Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'Homepage',
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.css']
})
export class HomepageComponent {
  public cards: any[] = [
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