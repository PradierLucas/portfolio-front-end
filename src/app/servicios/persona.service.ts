import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../models/persona';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  expURL="http://localhost:8080/persona/"
  constructor(private httpClient: HttpClient) {}

    public lista():Observable<any>{
      return this.httpClient.get( this.expURL +`ver/personas`);
    }
   
    public save(persona: Persona): Observable<any>{
      return this.httpClient.post( this.expURL +`crear/persona` , persona);}
  

      public update(id:string, personaActual: Persona):Observable<any>{
        return this.httpClient.put(this.expURL + `editar/persona/${id}`, personaActual);
      }
      
    }

