import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatosService {


  constructor(private http: HttpClient) {
   // this.retornarId()
   }

  retornar() {
    return this.http.get(environment.servicesURLGetAll);
  }

  retornarId(id: String) {
    let url= `${environment.servicesURLGetId}/${id}`;

   return this.http.get(url)

  }


}
