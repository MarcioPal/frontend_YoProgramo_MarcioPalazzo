export class Educacion{
   id?:number;
   anioInicio: number;
   anioFin:number;
   titulo: string;
   institucion: string;
   descripcion: string;
   urlImg: string;
   urlDiploma: string;


   constructor(anioInicio: number, anioFin:number, titulo:string,institucion:string, descripcion:string,urlImg:string, urlDiploma: string){
        this.anioFin=anioFin;
        this.anioInicio=anioInicio;
        this.descripcion=descripcion;
        this.institucion=institucion;
        this.titulo=titulo;
        this.urlImg=urlImg;
        this.urlDiploma=urlDiploma;
   }

}