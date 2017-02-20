import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { BehaviorSubject } from "rxjs";
import 'rxjs/add/operator/map';

declare var $;

@Injectable()
export class ProductsService {
    private _webApiUrl: string = "http://localhost:41359/api/products";
    private _signalRUrl: string = "http://localhost:41359";

    private _connection;
    private _proxy;
    private _hubConnection;

    public poked: BehaviorSubject<string> = new BehaviorSubject<string>("");

    constructor(private _http: Http) {
        this._hubConnection = $.hubConnection;
    }

    public init(): void {
        this._connection = this._hubConnection(this._signalRUrl);
        this._proxy = this._connection.createHubProxy('pokeHub');

        this._proxy.on('poke', (data) => {
            this.poked.next(data);
        });

        this._connection.start()
            .done(() => console.log('SignalR connection established.'))
            .fail(() => console.error('SignalR connection not established.'));
    }

    public getProducts(){
        return this._http.get(this._webApiUrl)
            .map(result => result.json());
    }
}