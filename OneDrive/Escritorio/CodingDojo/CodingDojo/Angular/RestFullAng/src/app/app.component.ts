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
  var1: boolean = false;
  vardetalle: boolean = false;
  newId: any;
 // var_id_padre: any;


  constructor(private datosService: DatosService) {

  }

  ngOnInit() {
 //   this.getretornar()
  //  this.getretornarId()
  this.newId = {_id: ""}

  }
  getretornar(){
    this.datosService.retornar()
    .subscribe( result =>  this.datos = result)
    this.vardetalle = false;

  }

 getretornarId(id: String){ //recibe el id

  let tempObservable = this.datosService.retornarId(id)
 tempObservable.subscribe( result => this.datosid = result);
 this.vardetalle= true;

 }

 mostrarTodos(): void {
 this.getretornar();
 this.var1=true;
}


onSubmit(){
  this.newId = {_id: ""}
}


}
