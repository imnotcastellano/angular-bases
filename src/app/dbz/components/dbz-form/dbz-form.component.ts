import { Component, EventEmitter, Output } from '@angular/core';
import { GuerreroZ } from '../../interfaces/guerreroz.interface';

@Component({
  selector: 'app-dbz-form',
  templateUrl: './dbz-form.component.html',
  styleUrls: ['./dbz-form.component.css'],
})
export class DbzFormComponent {
  @Output()
  public nuevoGuerrero: EventEmitter<GuerreroZ> = new EventEmitter();

  public guerreroZ: GuerreroZ = {
    id: '',
    nombre: '',
    tecnica: '',
    nivel: 0,
  };

  emitWarrior(): void {
    if (this.guerreroZ.nombre.length === 0) return;

    this.nuevoGuerrero.emit(this.guerreroZ);

    this.cleanForm();
  }

  cleanForm() {
    this.guerreroZ.nombre = '';
    this.guerreroZ.tecnica = '';
    this.guerreroZ.nivel = 0;
  }
}
