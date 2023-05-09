import {Component, Input, OnInit} from '@angular/core';
import {Articulo} from "../models/articulo.model";
import {Router } from '@angular/router';


@Component({
  selector: 'app-articulo-card',
  templateUrl: './articulo-card.component.html',
  styleUrls: ['./articulo-card.component.scss']
})
export class ArticuloCardComponent implements OnInit{

  constructor(private router:Router) {}

  @Input() articulo?:Articulo;

  ngOnInit(): void {
  }


  mostrarArticuloDetalle(id?: number) {
    this.router.navigate(['articulo',id]);
  }
}
