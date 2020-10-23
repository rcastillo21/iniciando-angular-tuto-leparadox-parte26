import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.scss']
})
export class CochesComponent implements OnChanges{

  constructor() { }

  datos = [
    { marca: 'Volvo', value: 10 },
    { marca: 'Volvo', value: 25 },
    { marca: 'Toyota', value: 17 },
    { marca: 'Toyota', value: 80 },
    { marca: 'Mercedes', value: 35 },
    { marca: 'Mercedes', value: 41 },
    { marca: 'Hyundai', value: 87 },
    { marca: 'Hyundai', value: 5 }
  ];

  ngOnChanges(cambios: SimpleChanges){
    if(cambios.marca.currentValue != cambios.marca.previousValue){
      const nuevaMarca = cambios.marca.currentValue;
      const datos = this.datos.filter(dato => dato.marca == nuevaMarca);
      console.log(datos);
      this.total = 0;
      datos.forEach(dato => this.total += dato.value);
    }
  }

  @Input() marca: string;

  total: number = 0;

}
