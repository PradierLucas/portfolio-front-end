import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Skills } from 'src/app/models/skills';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-nueva-skill',
  templateUrl: './nueva-skill.component.html',
  styleUrls: ['./nueva-skill.component.css']
})
export class NuevaSkillComponent {

  form: FormGroup;

  skill: Skills = {
    id: "", nombre: "",
    
    porcentaje: ""
  };

  constructor(private sSkill: SkillsService, private router: Router, private formBuilder:FormBuilder) {
    this.buildForm();
   }

  ngOnInit(): void { }

  private buildForm(){
    this.form= this.formBuilder.group({
      nombre:["",[Validators.required]],
      
      porcentaje:["",[Validators.required]],
    })


  }
 
  crearSkill(): void {

    this.sSkill.save(this.skill).subscribe(data => {
      if (this.form.valid) {
        const value = this.form.value;};
      alert("Habilidad añadida");
      
      this.router.navigate(["/porfolio"]);
    })
  }
}

