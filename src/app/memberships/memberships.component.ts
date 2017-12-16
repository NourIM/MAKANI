import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'Memberships',
  templateUrl: './memberships.html',
  styleUrls: ['./memberships.css']
})


export class MemebershipsComponent {

	public activeTab: string = 'all';
	public tabs = {
		'all': [
		{image: 'assets/img/group_5_copy.png'},
		{image: 'assets/img/group_5.png'},
	    {image: 'assets/img/group_5_copy_2.png'},
	    {image: 'assets/img/group_5_copy.png'}
    ],
	  'sports': [
	  	{image: 'assets/img/group_5.png'},
	    {image: 'assets/img/group_5_copy_2.png'},
	    {image: 'assets/img/group_5_copy.png'}
	  ],
	  'festivals': [
	    {image: 'assets/img/group_5_copy.png'},
	  	{image: 'assets/img/group_5.png'},
	    {image: 'assets/img/group_5_copy_2.png'},
	    {image: 'assets/img/group_5_copy.png'}
	  ],
	  'conference': [
	  	{image: 'assets/img/group_5.png'},
	    {image: 'assets/img/group_5_copy_2.png'},
	    {image: 'assets/img/group_5_copy.png'}
	  ],
	  'art': [
	  	{image: 'assets/img/group_5.png'},
	  	{image: 'assets/img/group_5_copy.png'},
	    {image: 'assets/img/group_5_copy_2.png'},
	    {image: 'assets/img/group_5_copy.png'}
	  ],
	  'seminars': [
	  	{image: 'assets/img/group_5.png'},
	  	{image: 'assets/img/group_5_copy.png'},
	    {image: 'assets/img/group_5_copy_2.png'},
	    {image: 'assets/img/group_5_copy.png'}
	  ],
	  'business': [
	  	{image: 'assets/img/group_5.png'},
	    {image: 'assets/img/group_5_copy_2.png'},
	    {image: 'assets/img/group_5_copy.png'},
	    {image: 'assets/img/group_5_copy.png'}
	  ],
	  'vip': [
	  	{image: 'assets/img/group_5.png'},
	    {image: 'assets/img/group_5_copy_2.png'},
	    {image: 'assets/img/group_5_copy.png'}
	  ],
	  'family': [
	   	{image: 'assets/img/group_5.png'},
	    {image: 'assets/img/group_5_copy_2.png'},
	    {image: 'assets/img/group_5_copy.png'}
	  ]
	 };
	constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
	this.route.params.subscribe((params) => {
	  this.activeTab = params['event']; 
	});
  }

  public onChange(tab) {
  	this.activeTab = tab;
  	this.router.navigate(['/memberships', tab]);
  }
}