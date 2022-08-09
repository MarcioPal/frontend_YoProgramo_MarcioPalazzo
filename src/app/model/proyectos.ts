export class Proyecto{
    id?: number
    descripcion:string;
    nombreProy: string;
    urlProy: string;
    proyAnio: number;
    proyMes: number;
    proyDia: number;

    constructor(descripcion: string, nombreProy: string, urlProy:string, proyAnio: number, proyMes:number,proyDia:number){
        this.descripcion=descripcion;
        this.nombreProy=nombreProy;
        this.urlProy=urlProy;
        this.proyAnio = proyAnio;
        this.proyMes = proyMes;
        this.proyDia = proyDia;
    }

}