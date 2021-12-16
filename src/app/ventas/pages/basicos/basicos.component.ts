import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower:string = 'arnold';
  nombreUpper:string = 'Arnold';
  nombreCompleto:string = 'ArnoLd SiniStErrA';

  fecha: Date = new Date();
}
