import { Pipe, PipeTransform } from '@angular/core';
import {Articulo} from "../models/articulo.model";

@Pipe({
  name: 'filtroCategoria'
})
export class FiltroCategoriaPipe implements PipeTransform {
  transform(articulos: Articulo[], categoria: string): Articulo[] {
    return articulos.filter(articulo => articulo.category === categoria);
  }
}
