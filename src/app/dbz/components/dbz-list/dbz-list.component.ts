import { Component, Input, EventEmitter, Output } from '@angular/core';
import { GuerreroZ } from '../../interfaces/guerreroz.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './dbz-list.component.html',
  styleUrls: ['./dbz-list.component.css'],
})
export class DbzListComponent {
  @Input()
  public guerrerosZ: GuerreroZ[] = [];

  @Output()
  public eliminarGuerrero: EventEmitter<String> = new EventEmitter();

  removerGuerrero(id: String) {
    this.eliminarGuerrero.emit(id);
  }
}
