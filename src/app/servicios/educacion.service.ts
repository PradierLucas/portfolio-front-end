import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../models/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  expURL="http://localhost:8080/edu/"
  constructor(private httpClient: HttpClient) {}

    public lista():Observable<any>{
      return this.httpClient.get(this.expURL + `ver/edu`);
    }
    public buscar(id:string):Observable<any>{
      return this.httpClient.get(this.expURL + `buscar/edu/${id}` )
    }

    public save(educacion: Educacion): Observable<any>{
      return this.httpClient.post(this.expURL + `new/edu` , educacion);}

      public update(id:string, educacionActual: Educacion):Observable<any>{
        return this.httpClient.put( this.expURL +`edit/edu/${id}`, educacionActual);
      }
      public delete(id:string):Observable<any>{
        return this.httpClient.delete<any>(this.expURL +`elim/${id}` );
      }
}
