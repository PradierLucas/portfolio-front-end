import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

import { SExpService } from 'src/app/servicios/s-exp.service';

@Component({
  selector: 'app-nueva-edu',
  templateUrl: './nueva-edu.component.html',
  styleUrls: ['./nueva-edu.component.css']
})
export class NuevaEduComponent implements OnInit{
  form: FormGroup;

  educacion: Educacion = {
    id: "", nombre: "",
    titulo: "",
    fechaInicio: "",
    fechaFin: ""
   
  };

  constructor(private sEdu: EducacionService, private router: Router, private formBuilder:FormBuilder) {
    this.buildForm();
   }

  ngOnInit(): void { }

  private buildForm(){
    this.form= this.formBuilder.group({
      nombre:["",[Validators.required]],
      titulo:["",[Validators.required]],
      fechaInicio:["",[Validators.required]],
      fechaFin:["",[Validators.required]],
     
    })


  }
 
  crearEdu(): void {

    this.sEdu.save(this.educacion).subscribe(data => {
      if (this.form.valid) {
        const value = this.form.value;};
      alert("Educación añadida");
      
      this.router.navigate(["/porfolio"]);
    })
  }
}


