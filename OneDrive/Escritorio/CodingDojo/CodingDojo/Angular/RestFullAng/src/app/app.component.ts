import { Component, OnInit } from '@angular/core';
import  { DatosService } from './datos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  datos: any;
  datosid: any = {};


  constructor(private datosService: DatosService) {

  }

  ngOnInit() {
    this.getretornar()
    this.getretornarId()

  }
  getretornar(){
    this.datosService.retornar()
    .subscribe( result =>  this.datos = result)

  }

 getretornarId(){
 // this.getretornarId()
  let tempObservable = this.datosService.retornarId()
 //tempObservable.subscribe( result => console.log("Tarea para buscar 1 reg", result));
 tempObservable.subscribe( result => this.datosid = result);

 }

// mostrarTodos(): void {
// this.getretornar();
//}



}
