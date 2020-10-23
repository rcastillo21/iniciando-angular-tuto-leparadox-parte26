import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'parte26';

  marcaSeleccionada: string = 'Toyota';

  marcas: String[] = ['Volvo', 'Toyota', 'Mercedes', 'Hyundai'];
}
