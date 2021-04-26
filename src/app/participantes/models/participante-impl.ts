import { Participante } from "./participante";

export class ParticipanteImpl implements Participante{
    id: string;
    nombre: string;

    getId(): string {
        return this.id;
    }
}
