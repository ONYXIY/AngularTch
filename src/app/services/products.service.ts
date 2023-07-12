import { errorService } from './error.service';
import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { IProduct } from "../components/products/product/product.interface";

@Injectable({
    providedIn: 'root'
})

export class ProductsService{

    constructor(private http: HttpClient,
        private errorService: errorService
        ){

    }
    getAll(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
        params: new HttpParams({
            fromObject: {limit: 2}
        })
    }).pipe(
        catchError(this.errorHandler.bind(this))
    )
    }
    private errorHandler(error: HttpErrorResponse){
        this.errorService.handle(error.message)
        return throwError(() => error.message)
    }
}