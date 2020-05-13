import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public miNombre = 'Shirley';
  public contador = 0;
  title = 'practica2';

  sumar() { 
  this.contador++;
  }

  restar() { 
    if(this.contador>0) 
    {this.contador--;}
    
    }
}