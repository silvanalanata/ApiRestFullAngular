import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatosService {


  constructor(private http: HttpClient) {
    this.retornarId()
   }

  retornar() {
    return this.http.get(environment.servicesURLGetAll);
  }

  retornarId() {

    let tempObservable = this.http.get(environment.servicesURLGetId);
    tempObservable.subscribe(data => console.log("Tarea para buscar 1 reg", data));

  }

}
