import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //Uso de @Input de forma dinamica donde se crea una variable en el padre con valor vacio
  imgParent = '';
}
