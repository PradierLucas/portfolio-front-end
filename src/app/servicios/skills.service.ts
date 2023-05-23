import { Injectable } from '@angular/core';
import { Skills } from '../models/skills';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  expURL="https://porfolio-deg6.onrender.com/skills/"
  constructor(private httpClient: HttpClient) {}

    public lista():Observable<any>{
      return this.httpClient.get(this.expURL + `ver/skills`);
    }
    

    public save(skill: Skills): Observable<any>{
      return this.httpClient.post(this.expURL + `new/skill` , skill);}

      public update(id:string, skillActual: Skills):Observable<any>{
        return this.httpClient.put( this.expURL +`editar/skill/${id}`, skillActual);
      }
      public delete(id:string):Observable<any>{
        return this.httpClient.delete<any>(this.expURL +`elim/skill/${id}` );
      }

    }


