import {Component, Input, OnInit} from '@angular/core';
import {IonicSlides} from '@ionic/angular';

export interface IBanner {
  src: string;
}
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  swiperModules = [IonicSlides];
  @Input() banners: IBanner[] = [];

  constructor() { }

  ngOnInit() { }

}
