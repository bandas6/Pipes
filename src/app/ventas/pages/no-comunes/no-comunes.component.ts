import { Component } from '@angular/core';
import { interval, timeout } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  nombre:string = 'Susana';
  genero:string = 'femenina';
  val:number = 0;

  //i18nSelect
  invitacionMapa = {
    'masculino':'invitarlo',
    'femenina' :'invitarla'
  }

  //i18nPlural
  clientes:string[]=["Arnold","maria","Daniela","Fernanda","maria","Daniela","Fernanda"]
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    'other': 'tenemos  # clientes esperando'
  }
  cambiar(){
    this.nombre = 'Arnold';
    this.genero = 'masculino'
  }
  borrar(){
    this.clientes.splice(0,1);
  }

  //Keyvalue pipes
  personas = {
    nombre: 'Arnold',
    edad : 24,
    direccion:' Cali , Colombia'
  }

  heroes=[
    {
      nombre: 'Superman',
      vuela: false
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
  ]
 
  //Async Pipe
  miObservable = interval(5000);

  valorPromesa = new Promise((res,rej)=>{
    setTimeout(()=>{
      res("tenemos data de promesa")
    },5000);
  });
    
}
