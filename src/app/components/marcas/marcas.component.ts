import { Component } from '@angular/core';
import { Cubo } from '../../models/Cubo';
import { ServiceCubos } from '../../services/service.cubos';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrl: './marcas.component.css'
})
export class MarcasComponent {

  public cubos!: Array<Cubo>;

  constructor(
    public _service: ServiceCubos,
    private _activeRoute: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((param: Params) => {
      let marca = param["marca"];

      this._service.findMarca(marca).subscribe(response => {
        this.cubos = response;
      })
    })
  }
}
