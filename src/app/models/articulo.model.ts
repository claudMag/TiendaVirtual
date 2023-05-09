import {Size} from "./size.model";

export interface Articulo{
  id: number,
  name: string,
  regular_price: number,
  sale_price: number | null,
  favorite: boolean,
  category: string,
  image: string
  sizes?: Size[];
}


