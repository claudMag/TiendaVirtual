import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CardBanner} from "../models/card-banner.model";
import {Articulo} from "../models/articulo.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  httpBaseUrl ='http://localhost:3000';

  constructor(private http: HttpClient) { }
  obtenerCarrouselImagenesRest(): Observable<string[]>{
    return this.http.get<string[]>(this.httpBaseUrl + '/carrousel');
  }
  obtenerImagenesCardsRest(): Observable<CardBanner[]>{
    return this.http.get<CardBanner[]>(this.httpBaseUrl+'/cards');
  }

  obtenerTodosArticulosRest(): Observable<Articulo[]>{
    return this.http.get<Articulo[]>(this.httpBaseUrl+'/articles');
  }

  obtenerDetalleArticulo(idArticulo: number): Observable<Articulo>{
    return this.http.get<Articulo>(this.httpBaseUrl+'/articles/'+idArticulo);
  }
}
