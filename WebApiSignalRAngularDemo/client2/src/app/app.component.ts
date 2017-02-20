import {Component, OnInit} from "@angular/core";
import { Router } from '@angular/router';
import {ProductsService} from "./services/productsService";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private router: Router, private _productsService: ProductsService) {
    }

    ngOnInit(): void {
        this._productsService.init();
    }
}
