import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class SExpService {
expURL="http://localhost:8080/exp/"
  constructor(private httpClient: HttpClient) {}

    public lista():Observable<any>{
      return this.httpClient.get(this.expURL + `ver/exp`);
    }
    public buscar(id:string):Observable<any>{
      return this.httpClient.get(this.expURL + `encontrar/exp/${id}` )
    }

    public save(experiencia: Experiencia): Observable<any>{
      return this.httpClient.post(this.expURL + `new/exp` , experiencia);}

      public update(id:string, experienciaActual: Experiencia):Observable<any>{
        return this.httpClient.put( this.expURL +`edit/exp/${id}`, experienciaActual);
      }
      public delete(id:string):Observable<any>{
        return this.httpClient.delete<any>(this.expURL +`elimExp/${id}` );
      }

    }




