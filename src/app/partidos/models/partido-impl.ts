import { Partido } from "./partido";
import { Suceso } from "./suceso";

export class PartidoImpl implements Partido{
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
