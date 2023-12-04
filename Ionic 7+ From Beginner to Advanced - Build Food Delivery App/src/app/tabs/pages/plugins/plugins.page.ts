import { Component } from '@angular/core';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-plugins',
  templateUrl: './plugins.page.html',
  styleUrls: ['./plugins.page.scss'],
})
export class PluginsPage {
  constructor() {}

  async share() {
    // await Share.share({
    //   title: 'See cool stuff',
    //   text: 'Really awesome thing you need to see right meow',
    //   url: 'http://ionicframework.com/',
    //   dialogTitle: 'Share with buddies',
    // });

    await Share.share({
      url: 'http://ionicframework.com/',
    });
  }
}
