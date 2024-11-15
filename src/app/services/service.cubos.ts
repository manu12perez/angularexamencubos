import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.development"; 
import { Cubo } from "../models/Cubo"; 
import { Login } from "../models/Login";

@Injectable()
export class ServiceCubos {
    public token: string;

    constructor(private _http: HttpClient) {
        this.token = "";
    }

    loginEmpleado(user: Login): Observable<any> {
        let json = JSON.stringify(user);
        let header = new HttpHeaders().set("Content-type", "application/json");
        let request = "api/Manage/Login";
        let url = environment.urlApiCubos + request;
        return this._http.post(url, json, {headers: header});
    }

    getCubos(): Observable<any> {
        let request = "api/cubos";
        let url = environment.urlApiCubos + request;

        return this._http.get(url);
    }

    getMarcas(): Observable<any> {
        let request = "api/Cubos/Marcas";
        let url = environment.urlApiCubos + request;

        return this._http.get(url);
    }

    findMarca(marca:string): Observable<any> {
        let request = "api/Cubos/CubosMarca/" + marca;
        let url = environment.urlApiCubos + request;

        return this._http.get(url);
    }

    findCubo(idCubo:number): Observable<any> {
        let request = "api/Cubos/" + idCubo;
        let url = environment.urlApiCubos + request;

        return this._http.get(url);
    }

    getComentarios(idCubo:number): Observable<any> {
        let request = "api/ComentariosCubo/GetComentariosCubo/" + idCubo;
        let url = environment.urlApiCubos + request;

        return this._http.get(url);
    }
}