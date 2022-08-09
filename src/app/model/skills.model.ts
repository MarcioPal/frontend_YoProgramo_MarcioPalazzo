export class Skill{
    id?:number;
    porcentaje:number;
    skillName:string;
    urlImg:string;

    constructor(porcentaje: number, skillName: string, urlImg: string){
        this.porcentaje=porcentaje;
        this.skillName=skillName;
        this.urlImg=urlImg;

    }

}