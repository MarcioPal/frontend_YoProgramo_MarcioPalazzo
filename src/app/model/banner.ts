export class Banner{
    id?:number;
    urlBanner: string;

    constructor( urlBanner:string,id?: number){
        this.urlBanner = urlBanner;
    }
}