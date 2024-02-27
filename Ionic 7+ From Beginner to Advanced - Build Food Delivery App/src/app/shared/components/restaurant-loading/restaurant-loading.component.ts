import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-restaurant-loading',
  templateUrl: './restaurant-loading.component.html',
  styleUrls: ['./restaurant-loading.component.scss'],
})
export class RestaurantLoadingComponent implements OnInit {
  @Input() count: number;
  dummy: any;
  constructor() { }

  ngOnInit() {
    this.dummy = Array(this.count);
  }

}
