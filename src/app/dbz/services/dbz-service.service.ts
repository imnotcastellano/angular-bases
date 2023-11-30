import { Injectable } from '@angular/core';
import { GuerreroZ } from '../interfaces/guerreroz.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  constructor() {}

  public guerreros: GuerreroZ[] = [
    { id: uuid(), nombre: 'Krillin', tecnica: 'Kienzan', nivel: 250 },
    { id: uuid(), nombre: 'Piccolo', tecnica: 'Makankosappo', nivel: 350 },
    {
      id: uuid(),
      nombre: 'Androide N°17',
      tecnica: 'Danza sádica',
      nivel: 850,
    },
  ];

  agregarGuerrero(guerrero: GuerreroZ): void {
    const idWarrior: GuerreroZ = { ...guerrero, id: uuid() };
    console.log(idWarrior);

    this.guerreros.push({ ...idWarrior });
  }

  /*   deleteWarriorZ(index: number) {
    this.guerreros.splice(index, 1);
  } */

  eliminarGuerrero(id: String) {
    this.guerreros = this.guerreros.filter((warrior) => warrior.id !== id);
  }
}
