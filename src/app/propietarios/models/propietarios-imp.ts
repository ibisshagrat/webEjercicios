import { Propietario } from "./propietario";

export class PropietariosImp implements Propietario{
  id: number;
  nombre: string;
  nif: string;
  apellido1: string;
  apellido2: string;
  mail: string;
  numeroCuenta: string;
  negocio: any;
  foto: string;
  pedidos: any[];
  comentarios: string;
}
