import { Component, OnInit } from '@angular/core';
import {finalize, forkJoin, Observable, of} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  isLoading = false;
  banners: Array<any>= [];
  restaurants: Array<any>= []

  constructor() { }

  ngOnInit() {
    this.isLoading = true;
    const getBannersRequest = this.getBanners();
    const getRestaurantsRequest = this.getRestaurants();
    forkJoin([getBannersRequest, getRestaurantsRequest])
      .pipe(
        finalize(() => {
          setTimeout(() => {
            this.isLoading = false;
          }, 1000);
        })
      )
      .subscribe({
        next: ([bannersResponse, restaurantsResponse]) => {
          this.banners = bannersResponse;
          this.restaurants = restaurantsResponse
        }
      });
  }

  getBanners(): Observable<Array<any>> {
    const banners: Array<any> = [
      {
        src: 'assets/img/food-banner-1.jpg'
      },
      {
        src: 'assets/img/food-banner-2.jpg'
      },
      {
        src: 'assets/img/food-banner-3.jpg'
      }
    ]
    return of(banners);
  }

  getRestaurants(): Observable<any> {
    const restaurants: Array<any> = [
      {
        name: 'Stayfit',
        image: 'assets/img/food-banner-1.jpg',
        dishes: "Italian, Mexican"
      },
      {
        name: 'Stayfit',
        image: 'assets/img/food-banner-2.jpg',
        dishes: "Italian, Mexican"
      },
      {
        name: 'Stayfit',
        image: 'assets/img/food-banner-3.jpg',
        dishes: "Italian, Mexican"
      },
    ]
    return of(restaurants);
  }
}
