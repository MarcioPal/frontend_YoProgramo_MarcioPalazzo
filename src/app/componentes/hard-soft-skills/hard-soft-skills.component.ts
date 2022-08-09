import { Component, OnInit } from '@angular/core';
import { Skill } from 'app/model/skills.model';
import { SkillService } from 'app/service/skill.service';
import { TokenService } from 'app/service/token.service';

@Component({
  selector: 'app-hard-soft-skills',
  templateUrl: './hard-soft-skills.component.html',
  styleUrls: ['./hard-soft-skills.component.css']
})
export class HardSoftSkillsComponent implements OnInit {
  skills: Skill[]=[];
  isLogged = false;
  constructor(public servSkill: SkillService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarSkills();
  }

  cargarSkills(): void{
    this.servSkill.getSkills().subscribe(data => {this.skills=data});
  }

}