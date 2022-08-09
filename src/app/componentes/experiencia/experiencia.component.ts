import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'app/model/experiencia.model';
import { ExperienciaService } from 'app/service/experiencia.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencias: Experiencia[] = [];
  constructor(public experienciaService: ExperienciaService) { }

  ngOnInit(): void {
    this.cargarExperiencias();
  }

  cargarExperiencias(): void{
    this.experienciaService.getExperiencias().subscribe(data => {this.experiencias=data})
  }

}