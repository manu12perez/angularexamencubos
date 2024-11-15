import { Component } from '@angular/core';
import { Cubo } from '../../models/Cubo';
import { Comentario } from '../../models/Comentario';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiceCubos } from '../../services/service.cubos';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent {
  public cubo!: Cubo;
  public comentarios!: Array<Comentario>

  constructor(
    private _activeRoute: ActivatedRoute,
    public _service: ServiceCubos,
  ) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      let idCubo = parseInt(params["idCubo"]);
      let nombre = params["nombre"];
      let modelo = params["modelo"];
      let marca = params["marca"];
      let color = params["color"];
      let imagen = params["imagen"];
      let precio = parseFloat(params["precio"]);
      let valoracion = parseFloat(params["valoracion"]);
  
      this.cubo = new Cubo(idCubo, nombre, modelo, marca, color, imagen, precio, valoracion);
      this.comentarios = new Array<Comentario>
    });
  }
}
