import { Component, OnInit } from '@angular/core';
import { SwPush, SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { interval } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private swUpdate: SwUpdate) {}

  ngOnInit() {
    if (this.swUpdate.isEnabled) {
      interval(5 * 1000).subscribe(() => this.swUpdate.checkForUpdate().then(() => console.log('checking for updates')));
    } else {
      console.log('Service Worker on this browser is not enabled!');
    }

    this.swUpdate.versionUpdates.pipe(filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY')).subscribe(data => {
      if (confirm('New version available. Load new version?')) {
        window.location.reload();
      }
    });
  }
}
