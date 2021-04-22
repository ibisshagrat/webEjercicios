import { Timestamp } from "rxjs";
import { Suceso } from "./suceso";

export interface Partido {
  id: number;
  idLocal: string;
  idVisitante: string;
  idCompeticion: string;
  sucesos: Suceso[];
  timeStamp: number;
  marcadorVisitante?: number;
  marcadorLocal?: number;
  hayTarjetas?: boolean;
}
