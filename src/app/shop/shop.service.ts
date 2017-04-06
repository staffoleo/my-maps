import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IShop } from './shop';

@Injectable()
export class ShopService {
    private _shopTestUrl = 'api/SHOPS.json';

    constructor (private _http: Http) { }

    getShops(): Observable<IShop[]> {
        return this._http.get(this._shopTestUrl)
            .map((response: Response) => <IShop[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

     private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
