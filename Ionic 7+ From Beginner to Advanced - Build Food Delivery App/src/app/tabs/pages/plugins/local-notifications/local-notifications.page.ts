import { Component, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { LocalNotifications } from '@capacitor/local-notifications';
import { isPlatform } from '@ionic/angular';

@Component({
  selector: 'app-local-notifications',
  templateUrl: './local-notifications.page.html',
  styleUrls: ['./local-notifications.page.scss'],
})
export class LocalNotificationsPage implements OnInit {
  constructor() {}

  async ngOnInit() {
    await LocalNotifications.requestPermissions();
  }

  async schedule() {
    // if (Capacitor.getPlatform() === 'android') {
    if (isPlatform('android') === true) {
      await LocalNotifications.createChannel({
        id: '1',
        name: 'Local Notifications',
        sound: 'sound.mp3',
      });
    }
    const notif = await LocalNotifications.schedule({
      notifications: [
        {
          title: 'Hadiiiiii',
          body: 'Nasilisin??',
          id: 1,
          schedule: { at: new Date(Date.now() + 1000 * 2) },
          sound: 'sound.wav',
          attachments: [],
          smallIcon: 'ic_slab_adb',
          actionTypeId: '',
          extra: {
            data: 'Checking extra',
          },
        },
      ],
    });
    console.log('notif >> ', notif);
  }
}
