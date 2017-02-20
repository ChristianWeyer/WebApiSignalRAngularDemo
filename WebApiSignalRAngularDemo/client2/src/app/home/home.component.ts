import {Component, OnInit, NgZone} from "@angular/core";
import {ProductsService} from "../services/productsService";

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
    public products: Array<any> = [];
    public pokeData: string = "Test";

    constructor(private _productsService: ProductsService, private _zone: NgZone) {
    }

    ngOnInit(): void {
        this._productsService.poked.
            subscribe((data) => {
                this._zone.run(() =>{
                    this.pokeData = data
                })
        });

        this._productsService.getProducts()
            .subscribe((data) => {
                this.products = data
            });
    }
}
