import { Carta } from "./carta";

export class CartaImp implements Carta {
  name: string;
  id: string;
  imageUrl: string;
  text: string;
  color?: string;
  colors?: string[];
  type: string;
  flavor?: string;
}
