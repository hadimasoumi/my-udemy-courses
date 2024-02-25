import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent  implements OnInit {
  @Input() restaurant = {
    name: 'Stayfit',
    image: 'assets/img/food-banner-1.jpg',
    dishes: "Italian, Mexican"
  };
  constructor() { }

  ngOnInit() {}

}
