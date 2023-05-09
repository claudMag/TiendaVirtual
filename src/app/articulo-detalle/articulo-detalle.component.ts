import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Articulo} from "../models/articulo.model";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.scss']
})
export class ArticuloDetalleComponent implements OnInit{

  articulo?: Articulo;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.getArticulo();
  }

  getArticulo(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.dataService.obtenerDetalleArticulo(id)
      .subscribe(articulo => this.articulo = articulo);
  }

}
