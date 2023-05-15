import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-editar-edu',
  templateUrl: './editar-edu.component.html',
  styleUrls: ['./editar-edu.component.css']
})
export class EditarEduComponent {
  form: FormGroup;

  id:string="";
  educacionActual: Educacion = {
    id: "", nombre: "",
    titulo: "",
    fechaInicio: "",
    fechaFin: ""
   
  };

  constructor(private sEdu: EducacionService,
     private activatedRouter: ActivatedRoute,
      private route:Router,private formBuilder:FormBuilder) {
        this.buildForm();
       }

    
  
      private buildForm(){
        this.form= this.formBuilder.group({
          nombre:["",[Validators.required]],
          titulo:["",[Validators.required]],
          fechaInicio:["",[Validators.required]],
          fechaFin:["",[Validators.required]]
          
        })
    
    
      }

  ngOnInit(): void {
    this.id=this.activatedRouter.snapshot.params['id'];
   }

  editarEdu(): void {
    this.sEdu.update(this.id,this.educacionActual).subscribe(dato => {
      if (this.form.valid) {
        const value = this.form.value;};
      alert("Educacion actualizada");
      this.route.navigate(["/porfolio"]);
    })
  }

}




