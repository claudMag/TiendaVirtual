import { Component, OnInit } from '@angular/core';
import {CardBanner} from "../models/card-banner.model";
import {Articulo} from "../models/articulo.model";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  carrouselImages: string[] = [];
  cardBannerImages: CardBanner[] = [];
  articles :Articulo[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.obtenerCarrousel();
    this.obtenerCardBanners();
    this.obtenerArticulos();
  }

  private obtenerCarrousel() {
    this.dataService.obtenerCarrouselImagenesRest().subscribe(
    data=> this.carrouselImages = data);
  }

  private obtenerCardBanners() {
    this.dataService.obtenerImagenesCardsRest().subscribe(
      data=> this.cardBannerImages = data);
  }

  private obtenerArticulos() {
    this.dataService.obtenerTodosArticulosRest().subscribe(
      data=> this.articles = data);
  }
}
