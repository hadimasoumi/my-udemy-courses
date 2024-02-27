import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {IBanner} from '../../pages/tabs/home/components/banner/banner.component';
import {IRestaurant} from '../components/restaurant/restaurant.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  GetBanners(): Observable<IBanner[]> {
    const banners: IBanner[] = [
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

  GetRestaurants(): Observable<IRestaurant[]> {
    const restaurants: IRestaurant[] = [
      {
        name: 'Stayfit',
        short_name: 'stayfit',
        cover: 'assets/img/food-banner-1.jpg',
        cusines: ["Italian, Mexican"],
        rating: 5,
        delivery_time: 25,
        distance: 2.5,
        price: 67
      },
      {
        name: 'Colombia',
        short_name: 'colombia',
        cover: 'assets/img/food-banner-2.jpg',
        cusines: ["Italian, Mexican"],
        rating: 4.1,
        delivery_time: 25,
        distance: 2.5,
        price: 120
      },
      {
        name: 'Ali Kebab',
        short_name: 'ali kebab',
        cover: 'assets/img/food-banner-3.jpg',
        cusines: ["Italian, Mexican"],
        rating: 4.6,
        delivery_time: 25,
        distance: 2.5,
        price: 145
      },
    ]
    return of(restaurants);
  }
}
