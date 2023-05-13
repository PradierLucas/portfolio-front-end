import { Component } from '@angular/core';


import {  SExpService } from 'src/app/servicios/s-exp.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia';

@Component({
  selector: 'app-editar-exp',
  templateUrl: './editar-exp.component.html',
  styleUrls: ['./editar-exp.component.css']
})
export class EditarExpComponent {

  id:string ;
  nombreEmpresa:string = "";

    puesto: string ="";
    fechaInicio: string ="";
    fechaFin: string ="";
    descripcion: string ="";
   experiencia: Experiencia 
constructor(private sExp: SExpService, private router:Router,private route:ActivatedRoute){}

ngOnInit():void {
  this.id = this.route.snapshot.params['id'];
    this.sExp.buscar(this.id).subscribe(dato =>{
      this.experiencia = dato;
    },error => console.log(error));
}

editarExp(){
  this.sExp.update(this.id,this.experiencia).subscribe(dato => {
    this.router.navigate(["/porfolio"]);
  },error => console.log(error));
}
}

