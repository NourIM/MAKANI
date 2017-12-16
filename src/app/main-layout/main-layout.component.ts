import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'main-layout',
  templateUrl: './main-layout.html'
})

export class MainLayoutComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  public ngOnInit() {

  }
}
