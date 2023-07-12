import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProduct } from "../components/products/product/product.interface";

@Injectable({
    providedIn: 'root'
})

export class ProductsService{

    constructor(private http: HttpClient){

    }
    getAll(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products')
    }
}