import {Component, Input} from '@angular/core';
import {Articulo} from "../models/articulo.model";


@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.component.html',
  styleUrls: ['./lista-categorias.component.scss']
})
export class ListaCategoriasComponent {

  @Input() articulos: Articulo[] = [];

  categoriaSeleccionada = 'Vintage';

}
