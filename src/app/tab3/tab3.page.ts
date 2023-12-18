import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  constructor() {}
  products_jeans = [
    {
      name: 'Right Wing Jeans',
      price: '$29.99',
      description: 'lorem ipsum',
      source: 'https://ionicframework.com/docs/img/demos/card-media.png',
    },
    {
      name: 'Right Wing Jeans Pro ',
      price: '$39.99',
      description: 'lorem ipsum pro',
      source: 'https://ionicframework.com/docs/img/demos/card-media.png',
    },
  ];
}
