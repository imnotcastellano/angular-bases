import { Component } from '@angular/core';

import { DbzService } from '../services/dbz-service.service';
import { GuerreroZ } from '../interfaces/guerreroz.interface';

@Component({
  selector: 'app-dbz-main-component',
  templateUrl: './main-page.component.html',
  styleUrls: [],
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  get guerreros() {
    return this.dbzService.guerreros;
  }

  agregarGuerrero(guerrero: GuerreroZ) {
    this.dbzService.agregarGuerrero(guerrero);
  }

  removerGuerrero(id: String) {
    this.dbzService.eliminarGuerrero(id);
  }
}
