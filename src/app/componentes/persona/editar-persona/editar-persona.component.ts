import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent {
  form: FormGroup;

  id:string="";

  personaActual: Persona = {
    id: "", nombre: "",
    apellido:"",
    titulo: "",
    foto: "",
    descripcion: ""
   
  };

  constructor(private sper: PersonaService,
     private activatedRouter: ActivatedRoute,
      private route:Router,private formBuilder:FormBuilder) {
        this.buildForm();
       }

    
  
      private buildForm(){
        this.form= this.formBuilder.group({
          nombre:["",[Validators.required]],
          apellido:["",[Validators.required]],
          titulo:["",[Validators.required]],
          foto:[""],
          descripcion:["",[Validators.required]]
          
        })
    
    
      }

  ngOnInit(): void {
    this.id=this.activatedRouter.snapshot.params['id'];
   }

  editarPersona(): void {
    this.sper.update(this.id,this.personaActual).subscribe(dato => {
      if (this.form.valid) {
        const value = this.form.value;};
      alert("Persona actualizada");
      this.route.navigate(["/porfolio"]);
    })
  }

}

