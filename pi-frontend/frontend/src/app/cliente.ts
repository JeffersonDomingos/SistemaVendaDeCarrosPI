import { Carros } from "./carros";

export class Cliente {

    id!: number;
    nome!: string;
    telefone!: String;
    dataInteresse!: Date;
    carroInteressado! : Carros;
}
