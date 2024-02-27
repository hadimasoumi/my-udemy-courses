import {Component, OnInit} from '@angular/core';
import {finalize, forkJoin, Observable, of} from 'rxjs';
import {ApiService} from 'src/app/shared/services/api.service';
import {IBanner} from './components/banner/banner.component';
import {IRestaurant} from '../../../shared/components/restaurant/restaurant.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  isLoading = false;
  banners: IBanner[] = [];
  restaurants: IRestaurant[] = []

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.isLoading = true;
    const getBannersRequest = this.apiService.GetBanners();
    const getRestaurantsRequest = this.apiService.GetRestaurants();
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
}
