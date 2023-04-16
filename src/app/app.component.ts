import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /*
  // El template nos permite introducir HTML dentro 
  // del app.component.ts usando back tiks ``
  // Podriamos deshacernos del app.component.html
  template: ` <h1>Chau Mundo!</h1> `,
  */
})
export class AppComponent {
  public titulo: string = 'Multi Apps';
}
