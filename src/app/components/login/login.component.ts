import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../../models/Login'; 
import { ServiceCubos } from '../../services/service.cubos';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  @ViewChild("cajausuario") cajaUsuario!: ElementRef;
  @ViewChild("cajapassword") cajaPassword!: ElementRef;

  public respuesta!: string;
  constructor(
    private _service: ServiceCubos,
    private _router: Router
  ){}

  loginUsuario(): void {
    let userName = this.cajaUsuario.nativeElement.value;
    let password = this.cajaPassword.nativeElement.value;
    let user = new Login(userName, password);
    this._service.loginEmpleado(user).subscribe(response => {
      console.log("listo");
      console.log(response.response);
      this._service.token = response.response;
      this.respuesta = response.response;
      this._router.navigate(["/perfil"]);
    })
  }

  ngOnInit(): void {
    
  }
}