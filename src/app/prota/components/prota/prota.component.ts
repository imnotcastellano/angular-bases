import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prota',
  templateUrl: './prota.component.html',
  styleUrls: ['./prota.component.css'],
})
export class ProtaComponent implements OnInit {
  nombre: String = 'Monkey D. Luffy';
  obra: String = 'One piece';
  anioPublicacion: number = 1997;
  aniosActual: number = 0;
  objetivo: String =
    'Encontrar el One piece y convertirse en rey de los piratas.';
  actualizado: boolean = false;

  ngOnInit(): void {
    this.calcularTiempoTranscurrido();
  }

  get infoEdad() {
    return `${this.anioPublicacion} (Hace ${this.aniosActual} años)`;
  }

  calcularTiempoTranscurrido(): void {
    this.aniosActual = 2023 - this.anioPublicacion;
  }

  cambiarInfo(): void {
    this.actualizado = true;
    this.obra = 'Bleach';
    this.nombre = 'Ichigo Kurosaki';
    this.objetivo =
      'Salvar a la sociedad de almas, la ciudad Karakura y a sus amigos, cosa que pasa muy seguido...';
    this.anioPublicacion = 2001;
    this.calcularTiempoTranscurrido();
  }

  reiniciar(): void {
    this.actualizado = false;
    this.obra = 'One piece';
    this.nombre = 'Monkey D. Luffy';
    this.objetivo =
      'Encontrar el One piece y convertirse en rey de los piratas.';
    this.anioPublicacion = 1997;
    this.calcularTiempoTranscurrido();
  }
}
