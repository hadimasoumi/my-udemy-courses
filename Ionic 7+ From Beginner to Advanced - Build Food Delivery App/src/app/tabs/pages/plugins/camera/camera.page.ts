import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
  selectedImage: any;

  constructor() {}

  ngOnInit() {}

  checkPlatformForWeb() {
    if (Capacitor.getPlatform() === 'web') return true;
    else return false;
  }

  async getPhoto() {
    const permission = await Camera.requestPermissions();
    if (permission.camera != 'granted' || permission.photos != 'granted') return;

    const image = await Camera.getPhoto({
      quality: 90,
      // allowEditing: true,
      source: CameraSource.Prompt,
      resultType: CameraResultType.Uri,
    });

    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    this.selectedImage = image.path;
    console.log('selectedImage >> ', this.selectedImage);

    await Share.share({
      title: 'Image Sharing',
      text: 'Share this image',
      url: this.selectedImage,
      dialogTitle: 'Image sharing',
    });

    // Can be set to the src of an image now
    // imageElement.src = imageUrl;
  }
}
