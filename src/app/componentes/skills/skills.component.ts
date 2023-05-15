import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/models/skills';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  lista: Skills[];

  skill: Skills = {
    id: "", nombre: "",
    
    porcentaje: ""
  };


  constructor(private sSkill: SkillsService, private router: Router) { }

  ngOnInit(): void {
    this.cargarSkill();
  }

  cargarSkill(): void {
    this.sSkill.lista().subscribe(data => { this.lista = data; console.log(data); })
  }

  

 editarSkill(id: string, skill){
  this.sSkill.update(id, this.skill).subscribe(dato=>{this.cargarSkill();})
 }

  eliminarSkill(id: string) {
    this.sSkill.delete(id).subscribe(
      dato => { this.cargarSkill(); }
    );
  }

}



