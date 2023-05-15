import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class GuardsGuard implements CanActivate {

  constructor(private appService:LoginService, private ruta:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let currentUser = this.appService.UsuarioAutenticado;
      if(currentUser){
        return true;
      }else{
        this.ruta.navigate(["/login"]);
        return false;
      }
    
  }
  
}
