import { Component, OnInit } from '@angular/core';
import { Skill } from 'app/model/skills.model';
import { SkillService } from 'app/service/skill.service';
import { TokenService } from 'app/service/token.service';

@Component({
  selector: 'app-vista-edicion-skills',
  templateUrl: './vista-edicion-skills.component.html',
  styleUrls: ['./vista-edicion-skills.component.css']
})
export class VistaEdicionSkillsComponent implements OnInit {

  skills: Skill[]=[];
  isLogged = false;
  constructor(public servSkill: SkillService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarSkills();
    if(this.tokenService.getToken()){
      this.isLogged=true;
     let botones = document.querySelectorAll('.btnEdicion');
     botones.forEach(boton => {
      (boton as HTMLElement).style.visibility = 'visible';
    });

    }
  }
  cargarSkills(): void{
    this.servSkill.getSkills().subscribe(data => {this.skills=data});
  }

  borrarSkill(id?:number) {
    let confirmacion = confirm("¿Esta seguro que quiere eliminar esta Skill?");
    if ((id != undefined) && (confirmacion==true)){
      this.servSkill.delete(id).subscribe();

      alert("El item Skill fue eliminado satisfactoriamente");
      location.reload();
      }
      
  }

    habilitarEdicion(id:string, abrir:Boolean):void{
      let elemento;
      elemento=document.getElementById(id);
      if((id != undefined)  && (elemento != null)){
        if(abrir==true){
        elemento.style.display ='block';
      }else{elemento.style.display = 'none';}
      }
    }

    editarSkill(skill: Skill, idName: string, idPorc: string, idUrl: string):void{
      
      const skillName = document.getElementById(idName) as HTMLInputElement;
      const porcentaje = document.getElementById(idPorc) as HTMLInputElement;
      const URL = document.getElementById(idUrl) as HTMLInputElement;

      if((skillName.value != "") && (porcentaje.value != "") && (URL.value != "")){
      skill.skillName = skillName.value;
      skill.porcentaje = parseInt(porcentaje.value,10);
      skill.urlImg = URL.value;

      this.servSkill.update(skill).subscribe();
      alert("El item skill fue editado correctamente");
    }else{
      alert("Debe completar todos los campos");
    }
  }
    agregarSkill(): void{

      const skillName = document.getElementById('nombreSkill') as HTMLInputElement;
      const porcentaje = document.getElementById('porcentajeSkill') as HTMLInputElement;
      const URL = document.getElementById('imagenSkill') as HTMLInputElement;

      let skill;

      if((skillName.value != "") && (porcentaje.value != "") && (URL.value != "")){
        
        skill = new Skill(parseInt(porcentaje.value,10),skillName.value,URL.value);
        this.servSkill.save(skill).subscribe();
        alert("El item Skill fue agregado correctamente");
        location.reload();
      }else{
        alert("Debe completar todos los campos");
      }
    }
  }


