import { Component, ViewChild } from '@angular/core';
import { IonModal, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  @ViewChild(IonModal) modal?: IonModal;
  
  constructor() {}

  cancel() {
    this.modal?.dismiss(null, 'cancel');
  }
}
