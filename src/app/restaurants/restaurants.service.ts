import { MenuItem } from './../restaurant-detail/menu-item/menu-item.model';
import { ErrorHandler } from './../app.error-handler';
import { Restaurant } from './restaurant/restaurant.model';
import { MEAT_API } from './../app.api';
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RestaurantsService{

    constructor(private http: HttpClient){}

    ngOnInit(){}

    restaurants(search?: string) : Observable<Restaurant[]> {
        //return this.http.get(`${MEAT_API}/restaurants`, {params: {q: search}})
        let params : HttpParams = undefined
        if(search){
            params = new HttpParams().set('q', search)
        }
        return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`, {params: params})
          //.map(response => response.json()) -> httpclient não precisa mais
          //.catch(ErrorHandler.handleError)
    }

    restaurantById(id: string): Observable<Restaurant>{
        return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
            //.map(response => response.json())
            //.catch(ErrorHandler.handleError)
    }

    reviewsOfRestaurant(id: string) : Observable<any>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
            //.map(response => response.json())
            //.catch(ErrorHandler.handleError)
    }

    menuOfRestaurants(id: string) : Observable<MenuItem[]>{
        return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`)
            //.map(response => response.json())
            //.catch(ErrorHandler.handleError)
    }
}