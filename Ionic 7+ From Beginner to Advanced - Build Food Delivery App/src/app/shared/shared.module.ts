import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RestaurantComponent} from './components/restaurant/restaurant.component';
import {IonicModule} from '@ionic/angular';
import {RestaurantLoadingComponent} from './components/restaurant-loading/restaurant-loading.component';
import {EmptyScreenComponent} from './components/empty-screen/empty-screen.component';



@NgModule({
  declarations: [RestaurantComponent, RestaurantLoadingComponent, EmptyScreenComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [RestaurantComponent, RestaurantLoadingComponent, EmptyScreenComponent]
})
export class SharedModule { }
