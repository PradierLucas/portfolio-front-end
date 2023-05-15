import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-agregarpersona',
  templateUrl: './agregarpersona.component.html',
  styleUrls: ['./agregarpersona.component.css']
})
export class AgregarpersonaComponent {

  form: FormGroup;

  persona: Persona = {
    id: "", nombre: "",
    apellido: "",
    titulo: "",
    foto: "",
    descripcion: ""
  };

  constructor(private sper:PersonaService, private router: Router, private formBuilder:FormBuilder) {
    this.buildForm();
   }

  ngOnInit(): void { }

  private buildForm(){
    this.form= this.formBuilder.group({
      nombre:["",[Validators.required]],
      apellido:["",[Validators.required]],
      titulo:["",[Validators.required]],
      foto:[""],
      descripcion:["",[Validators.required]],
    })


  }
 
  crearPer(): void {

    this.sper.save(this.persona).subscribe(data => {
      if (this.form.valid) {
        const value = this.form.value;};
     
      
      this.router.navigate(["/porfolio"]);
    })
  }
}

