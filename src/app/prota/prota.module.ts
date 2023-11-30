import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ProtaComponent } from './components/prota/prota.component';

@NgModule({
  declarations: [ProtaComponent],
  imports: [CommonModule],
  exports: [ProtaComponent],
  providers: [],
})
export class ProtaModule {}
