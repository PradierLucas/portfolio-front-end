import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia';

import { SExpService } from 'src/app/servicios/s-exp.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {

  experiencia: Experiencia = {
    id: "", nombreEmpresa: "",
    puesto: "",
    fechaInicio: "",
    fechaFin: "",
    descripcion: ""
  };

  constructor(private sExp: SExpService, private router: Router) { }

  ngOnInit(): void { }

  crearExp(): void {

    this.sExp.save(this.experiencia).subscribe(data => {
      alert("Experiencia añadida");
      this.router.navigate(["/porfolio"]);
    })
  }
}
