import { Component, OnInit } from '@angular/core';
import { Persona } from 'app/model/persona.model';
import { PersonaService } from 'app/service/persona.service';
import { TokenService } from 'app/service/token.service';

@Component({
  selector: 'app-vista-edicion-acerca-de',
  templateUrl: './vista-edicion-acerca-de.component.html',
  styleUrls: ['./vista-edicion-acerca-de.component.css']
})
export class VistaEdicionAcercaDeComponent implements OnInit {

  persona: Persona = new Persona("","","","","");
  isLogged = false;
   constructor(public personaService: PersonaService,private tokenService:TokenService) { }
 
   ngOnInit(): void {
     this.personaService.getPersonas().subscribe(data =>{this.persona=data});
     if(this.tokenService.getToken()){
       this.isLogged=true;
      let botones = document.querySelectorAll('.btnEdicion');
      botones.forEach(boton => {
       (boton as HTMLElement).style.visibility = 'visible';
       
     });
 
     }
   }
 
   habilitarEdicion(id:string, abrir:Boolean):void{
     let elemento;
     elemento=document.getElementById(id);
     if((id != undefined)  && (elemento != null)){
       if(abrir==true){
             elemento.style.display = 'inline-block';
       }
     else{
       elemento.style.display = 'none'}
     }
   }
 
   editarPerfil():void{
 
     const nombre = document.getElementById('nombrePer') as HTMLInputElement;
     const apellido = document.getElementById('apellido') as HTMLInputElement;
     const titulo = document.getElementById('ocupacion') as HTMLInputElement;
     const URL = document.getElementById('urlFotoPerfil') as HTMLInputElement;
     const acercaDe = document.getElementById('acercaDeMi') as HTMLInputElement;
 
 
     if((nombre.value != "") && (apellido.value != "") && (titulo.value != "") && (URL.value !="")){
 
        this.persona.nombre = nombre.value;
        this.persona.apellido = apellido.value;
        this.persona.titulo = titulo.value;
        this.persona.urlFoto = URL.value;
        this.persona.acercaDe = acercaDe.value;
 
        this.personaService.update(this.persona).subscribe();
        alert("Los datos han sido editados correctamente");
        
     }else{
       alert("Debe completar todos los campos");
     }
 
     }
 
   }
 
 
 