import { Component, OnInit } from '@angular/core';
import { Persona } from 'app/model/persona.model';
import { PersonaService } from 'app/service/persona.service';
import { TokenService } from 'app/service/token.service';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
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

}