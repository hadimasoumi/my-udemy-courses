import {Component, Input, OnInit} from '@angular/core';

export interface IRestaurant {
  name: string;
  short_name: string;
  cover: string;
  cusines: Array<string>;
  rating: number;
  delivery_time: number;
  distance: number;
  price: number;
}
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent implements OnInit {
  @Input() restaurant: IRestaurant;
  constructor() { }

  ngOnInit() { }

}
