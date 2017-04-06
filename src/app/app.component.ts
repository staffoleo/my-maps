import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { IShop } from './shop/shop';
import { ShopService } from './shop/shop.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  shops: IShop[];
  errorMessage: string;

  constructor(private _shopService: ShopService) { }

  ngOnInit() {
      this._shopService.getShops()
                         .subscribe( shops => this.shops = shops,
                                     error =>  this.errorMessage = <any>error);
    }
}
