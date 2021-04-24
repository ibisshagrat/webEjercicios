import { Partido } from "./partido";

export interface ObtenedorPartidos {
  getPartidos(): Partido[];
}
