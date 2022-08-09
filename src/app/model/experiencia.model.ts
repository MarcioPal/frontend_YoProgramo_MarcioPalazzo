
export class Experiencia{
   id?:number;
   anioInicio: number;
   anioFin:number;
   puesto: string;
   nombreEmpresa: string;
   descripcion: string;
   urlImg: string;

   constructor(anioInicio: number, anioFin:number, puesto: string, nombreEmpresa:string, descripcion: string, urlImg: string){
             this.anioInicio=anioInicio;
             this.anioFin=anioFin;
             this.descripcion=descripcion;
             this.nombreEmpresa=nombreEmpresa;
             this.puesto=puesto;
             this.urlImg=urlImg;
   }
   
}