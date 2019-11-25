import { Component, OnInit } from '@angular/core';

interface IPersona {
  nombre: string;
  apellidos: string;
  edad: number;
}

export class CPersona {
  constructor(nombre: string, apellidos: string, edad: number) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
  }
  nombre: string;
  apellidos: string;
  edad: number;
}

@Component({
  selector: 'app-primercomponente',
  templateUrl: './primercomponente.component.html',
  styleUrls: ['./primercomponente.component.css']
})
export class PrimercomponenteComponent implements OnInit {

  variableCPersona: CPersona;
  variablePersona: IPersona;
  variable: number;
  variableCadena: string;
  variableArray: number[];
  variableTupla: [string, number][];
  variableInicial = 2;
  variableCualquierDato: any;

  constructor() {
    this.variablePersona = new CPersona('Daniel', 'Apellidos', 12);
    this.variable = 1;
    this.variableCadena = '2';
    this.variableArray = [
      12, 1, 5
    ];
    this.variableTupla = [
      ['Daniel', 1],
      ['Rafa', 2]
    ];
    this.variableCualquierDato = 'qweqwasd';
    this.variablePersona = {
      nombre: 'Daniel',
      apellidos: 'Apellidoss',
      edad: 1
    };
    this.variableCPersona = new CPersona('Daniel', 'Apellidos', 1);
  }

  ngOnInit() {
  }

  verNombre() {
    return this.variableCPersona.nombre;
  }

  cambiarNombre(evento) {
    console.log(evento);
    this.variableCPersona.nombre = evento;
  }
}
