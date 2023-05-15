import { Component, OnInit } from '@angular/core';

import { SExpService } from 'src/app/servicios/s-exp.service';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  lista: Experiencia[];

  experiencia: Experiencia = {
    id: "", nombreEmpresa: "",
    puesto: "",
    fechaInicio: "",
    fechaFin: "",
    descripcion: ""
  };

  constructor(private sExp: SExpService, private router: Router) { }

  ngOnInit(): void {
    this.cargarExp();
  }

  cargarExp(): void {
    this.sExp.lista().subscribe(data => { this.lista = data; console.log(data); })
  }

  buscarExp(id: string) {
    this.sExp.buscar(id).subscribe(res => {
      console.log(res);
    });
  }

 editarExp(id: string, experiencia){
  this.sExp.update(id, experiencia).subscribe(dato=>{this.cargarExp();})
 }

  eliminarExp(id: string) {
    this.sExp.delete(id).subscribe(
      dato => { this.cargarExp(); }
    );
  }

}

