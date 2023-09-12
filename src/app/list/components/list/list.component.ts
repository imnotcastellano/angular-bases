import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-protas-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  ngOnInit(): void {}

  nombreProta?: String;
  listaNombres: String[] = ['Naruto', 'Luffy', 'Ichigo', 'Deku'];

  eliminar(): void {
    this.nombreProta = this.listaNombres.pop();
  }
}
