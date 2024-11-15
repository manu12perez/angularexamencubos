import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Perfil } from '../../models/Perfil';
import { ServiceCubos } from '../../services/service.cubos';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit {
  public perfil!: Perfil;

  constructor(
    private _service: ServiceCubos,
    private _router: Router
  ){}

  ngOnInit(): void {
    if (this._service.token == ""){
      this._router.navigate(["/login"]);
    }else{
      this._service.getPerfil().subscribe(response => {
        console.log(response);
        this.perfil = response;
      })  
    }
  }
}
