import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/models/skills';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-editar-skill',
  templateUrl: './editar-skill.component.html',
  styleUrls: ['./editar-skill.component.css']
})
export class EditarSkillComponent {

  form: FormGroup;

  id:string="";
  skillActual: Skills = {
    id: "", nombre: "",
    porcentaje: "",
   
  };


  constructor(private sSkill: SkillsService,
     private activatedRouter: ActivatedRoute,
      private route:Router,private formBuilder:FormBuilder) {
        this.buildForm();
       }

    
  
      private buildForm(){
        this.form= this.formBuilder.group({
          nombre:["",[Validators.required]],
          porcentaje:["",[Validators.required]],
          
        })
    
    
      }

  ngOnInit(): void {
    this.id=this.activatedRouter.snapshot.params['id'];
   }

  editarSkill(): void {
    this.sSkill.update(this.id,this.skillActual).subscribe(dato => {
      if (this.form.valid) {
        const value = this.form.value;};
      alert("Habilidad actualizada");
      this.route.navigate(["/porfolio"]);
    })
  }

}