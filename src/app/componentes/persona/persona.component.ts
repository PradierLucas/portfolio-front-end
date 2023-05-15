import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  lista: Persona[];

persona: Persona = {
    id: "", nombre: "",
    apellido:"",
    titulo: "",
    foto: "",
    descripcion: ""
    
  };
  //Tengo 25 años, soy de Posadas, Misiones. Actualmente estoy estudiando una tecnicatura en programación.
  constructor(private sPer:PersonaService , private router: Router,public sanitizer: DomSanitizer) { }



  ngOnInit(): void {
    this.cargarPersona();
  }
  
  cargarPersona(): void {
    this.sPer.lista().subscribe(data => { this.lista = data; console.log(data); })
  }
  
  
  
  editarPersona(id: string, persona){
  this.sPer.update(id,persona).subscribe(dato=>{this.cargarPersona();})
  }
  




}



