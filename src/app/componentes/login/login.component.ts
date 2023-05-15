import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  loginForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: LoginService
  ) { this.loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });}

  ngOnInit() {

  }
 

  get Email() {

    return this.loginForm.get('email');
    
    }
    
    get Password(){
    
    return this.loginForm.get('password');}
 
 
    onEnviar(event: Event) {

    event.preventDefault;
    this.authService.Iniciarsesion(this.loginForm.value).subscribe(data => {
      console.log("DATA:" + JSON.stringify(data));
      this.router.navigate(['/porfolio']); 
    })
  }

}