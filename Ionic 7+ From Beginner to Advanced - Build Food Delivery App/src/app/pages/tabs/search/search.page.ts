import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ApiService} from 'src/app/shared/services/api.service';
import {IRestaurant} from '../../../shared/components/restaurant/restaurant.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit, AfterViewInit {
  @ViewChild('searchInput') searchInput: any;
  restaurantsOriginal: IRestaurant[];
  results: IRestaurant[];

  query: any;
  isLoading = false;

  model = {
    icon: 'search-outline',
    title: 'No Restaurants Record Found'
  }
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.GetRestaurants().subscribe({
      next: (response: any) => {
        if (response?.length > 0) {
          this.restaurantsOriginal = response
        }
      }
    })
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.searchInput.setFocus();
    }, 500);
  }

  onSearchChange(event: any) {
    this.query = event.detail.value?.toLowerCase();
    if (this.query?.length > 0) {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.results = this.restaurantsOriginal.filter(item => item.short_name.includes(this.query));
      }, 1500);
    } else {
      this.results = [];
    }
  }
}
