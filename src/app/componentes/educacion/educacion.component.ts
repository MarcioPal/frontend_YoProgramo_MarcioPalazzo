import { DOCUMENT } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Educacion } from 'app/model/educacion.model';
import { EducacionService } from 'app/service/educacion.service';
import { TokenService } from 'app/service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent implements OnInit {
   listaEducacion: Educacion[]=[];
   isLogged = false;

  constructor(public servEduc: EducacionService, private tokenService:TokenService, private router:Router) { }

  ngOnInit(): void {
    this.cargarEducacion();
}

cargarEducacion():void{
  this.servEduc.getAllEducacion().subscribe(data => {this.listaEducacion=data});
}

}

