import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule],
  exports: [ListComponent],
  providers: [],
})
export class ListModule {}
