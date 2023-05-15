import { Component } from '@angular/core';


import { SExpService } from 'src/app/servicios/s-exp.service';
import {  ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-exp',
  templateUrl: './editar-exp.component.html',
  styleUrls: ['./editar-exp.component.css']
})
export class EditarExpComponent {

  form: FormGroup;

  id:string="";
  experienciaActual: Experiencia = {
    id: "", nombreEmpresa: "",
    puesto: "",
    fechaInicio: "",
    fechaFin: "",
    descripcion: ""
  };

  constructor(private sExp: SExpService,
     private activatedRouter: ActivatedRoute,
      private route:Router,private formBuilder:FormBuilder) {
        this.buildForm();
       }

    
  
      private buildForm(){
        this.form= this.formBuilder.group({
          nombreEmpresa:["",[Validators.required]],
          puesto:["",[Validators.required]],
          fechaInicio:["",[Validators.required]],
          fechaFin:["",[Validators.required]],
          descripcion:["",[Validators.required]],
        })
    
    
      }

  ngOnInit(): void {
    this.id=this.activatedRouter.snapshot.params['id'];
   }

  editarExp(): void {
    this.sExp.update(this.id,this.experienciaActual).subscribe(dato => {
      if (this.form.valid) {
        const value = this.form.value;};
      alert("Experiencia actualizada");
      this.route.navigate(["/porfolio"]);
    })
  }

}


