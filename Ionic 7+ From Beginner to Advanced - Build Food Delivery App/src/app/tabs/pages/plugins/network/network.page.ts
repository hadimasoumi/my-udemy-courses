import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { PluginListenerHandle } from '@capacitor/core';
import { Network } from '@capacitor/network';
import { Toast } from '@capacitor/toast';

@Component({
  selector: 'app-network',
  templateUrl: './network.page.html',
  styleUrls: ['./network.page.scss'],
})
export class NetworkPage implements OnInit, OnDestroy {
  networkListener!: PluginListenerHandle;
  status: string = 'Disconnected';
  constructor(private ngZone: NgZone) {}

  async ngOnInit() {
    this.getNetworkStatus();
    this.networkListener = await Network.addListener('networkStatusChange', async networkStatus => {
      console.log('Network status changed', networkStatus);

      this.ngZone.run(async () => {
        this.getNetworkStatus();
      });
    });
  }

  async getNetworkStatus() {
    const status = await Network.getStatus();
    console.log('Network status:', status);
    this.status = status.connected ? 'Connected' : 'Disconnected';

    await Toast.show({
      text: 'Internet is ' + this.status,
    });
  }

  ngOnDestroy(): void {
    this.networkListener?.remove();
  }
}
