import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { EncabezadoService } from 'src/app/servicios/encabezado.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit{

public persona:Persona | undefined;
public editPersona: Persona|undefined;
constructor(private encabezadoService : EncabezadoService){


}
  ngOnInit(): void {
 
  }


}
