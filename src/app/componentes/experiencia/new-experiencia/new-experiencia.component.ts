import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';

import { Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia';

import { SExpService } from 'src/app/servicios/s-exp.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {

form: FormGroup;

  experiencia: Experiencia = {
    id: "", nombreEmpresa: "",
    puesto: "",
    fechaInicio: "",
    fechaFin: "",
    descripcion: ""
  };

  constructor(private sExp: SExpService, private router: Router, private formBuilder:FormBuilder) {
    this.buildForm();
   }

  ngOnInit(): void { }

  private buildForm(){
    this.form= this.formBuilder.group({
      nombreEmpresa:["",[Validators.required]],
      puesto:["",[Validators.required]],
      fechaInicio:["",[Validators.required]],
      fechaFin:["",[Validators.required]],
      descripcion:["",[Validators.required]],
    })


  }
 
  crearExp(): void {

    this.sExp.save(this.experiencia).subscribe(data => {
      if (this.form.valid) {
        const value = this.form.value;};
      alert("Experiencia añadida");
      
      this.router.navigate(["/porfolio"]);
    })
  }
}
