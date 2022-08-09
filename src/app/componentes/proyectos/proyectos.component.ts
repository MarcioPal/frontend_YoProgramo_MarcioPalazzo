import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'app/model/proyectos';
import { ProyectoService } from 'app/service/proyecto.service';
import { TokenService } from 'app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
proyectos: Proyecto[]=[];
isLogged = false;

  constructor(public servProy: ProyectoService, private tokenService:TokenService) { }

  ngOnInit(): void {
    this.cargarProyectos();
  }
 
  cargarProyectos(): void{
    this.servProy.getProyectos().subscribe(data => {this.proyectos=data});
  }

}