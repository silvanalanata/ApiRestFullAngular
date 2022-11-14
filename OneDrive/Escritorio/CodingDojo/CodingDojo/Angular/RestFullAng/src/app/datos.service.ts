import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosService {


  constructor(private http: HttpClient) {
    this.retornarId()
   }

  retornar() {
    return this.http.get("http://localhost:8000/getAll");
  }

  retornarId() {

    let tempObservable = this.http.get("http://localhost:8000/getId/636ea5a6af3d3d1f02f614fc");
    tempObservable.subscribe(data => console.log("Tarea para buscar 1 reg", data));

  }

}
