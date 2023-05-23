import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LoginService {



  url = "https://porfolio-deg6.onrender.com/login/";
  currentUserSubject: BehaviorSubject<any>;
  
  constructor(private http: HttpClient) {
    console.log("El servicio de autenticación está corriendo");
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser' || '{}')))
}

Iniciarsesion(credenciales:any):Observable<any>{

return this.http.post( this.url + 'new/log', credenciales).pipe(map(data=> {sessionStorage.setItem('currentUser', JSON.stringify(data));

return data;
}))

}

get UsuarioAutenticado ()
{
  return this.currentUserSubject.value;
}


}