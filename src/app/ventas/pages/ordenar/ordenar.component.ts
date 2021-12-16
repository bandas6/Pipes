import { Component } from '@angular/core';
import { Color, Heroes } from '../../interface/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {
  ordenarPor:string = ''
  valorBool: boolean = false;
  heroes:Heroes[] = [
    {
      nombre:'Superman',
      vuela: true,
      color: Color.rojo
    },
    {
      nombre:'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre:'Robbin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre:'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre:'Linterna verde',
      vuela: true,
      color: Color.verde
    },
  ]

  cambiarTipog() {
    this.valorBool = true;
  }

  cambiar() {

  }

  cambiarOrden(valor:string){
    this.ordenarPor = valor;
    console.log(valor)
  }
}
