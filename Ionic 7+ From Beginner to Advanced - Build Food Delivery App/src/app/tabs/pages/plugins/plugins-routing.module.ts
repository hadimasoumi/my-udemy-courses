import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PluginsPage } from './plugins.page';

const routes: Routes = [
  {
    path: '',
    component: PluginsPage
  },
  {
    path: 'network',
    loadChildren: () => import('./network/network.module').then( m => m.NetworkPageModule)
  },
  {
    path: 'camera',
    loadChildren: () => import('./camera/camera.module').then( m => m.CameraPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PluginsPageRoutingModule {}
