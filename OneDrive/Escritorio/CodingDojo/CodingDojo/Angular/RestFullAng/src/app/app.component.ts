import { Component, OnInit } from '@angular/core';
import  { DatosService } from './datos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  datos: any;

  constructor(private datosService: DatosService) {}

  ngOnInit() {
    this.datosService.retornar()
      .subscribe( result =>  this.datos = result)
  }
}
