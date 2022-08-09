export class Persona{
    public id?: number;
    public nombre: string;
    public apellido: string;
    public titulo: string;
    public urlFoto: string
    public acercaDe: string
    
    constructor(nombre: string, apellido: string, urlFoto: string, titulo: string, acercaDe:string){
        this.nombre=nombre;
        this.urlFoto=urlFoto;
        this.apellido=apellido;
        this.acercaDe=acercaDe;
        this.titulo=titulo;


    }

    
}