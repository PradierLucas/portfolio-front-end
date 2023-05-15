import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  lista: Educacion[];

  educacion: Educacion = {
    id: "", nombre: "",
    titulo: "",
    fechaInicio: "",
    fechaFin: ""
    
  };

  constructor(private sEdu: EducacionService, private router: Router) { }

  ngOnInit(): void {
    this.cargarEdu();
  }

  cargarEdu(): void {
    this.sEdu.lista().subscribe(data => { this.lista = data; console.log(data); })
  }

  buscarEdu(id: string) {
    this.sEdu.buscar(id).subscribe(res => {
      console.log(res);
    });
  }

 editarEdu(id: string, educacion){
  this.sEdu.update(id, educacion).subscribe(dato=>{this.cargarEdu();})
 }

  eliminarEdu(id: string) {
    this.sEdu.delete(id).subscribe(
      dato => { this.cargarEdu(); }
    );
  }

}


