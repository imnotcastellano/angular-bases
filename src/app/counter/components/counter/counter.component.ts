import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Contador: {{ contador }}</h3>

    <!-- <button (click)="incrementar()">+1</button>
<button (click)="decrementar()">-1</button> -->

    <button class="btn btn-primary ms-2" (click)="calcular('suma')">+1</button>
    <button class="btn btn-danger ms-2" (click)="calcular('resta')">-1</button>
    <br />
    <button class="btn btn-warning mx-3 my-1" (click)="calcular('reset')">
      -Reset-
    </button>
  `,
})
export class CounterComponent {
  contador: number = 10;

  incrementar(): void {
    this.contador++;
  }

  decrementar(): void {
    this.contador--;
  }

  calcular(value: String): void {
    switch (value) {
      case 'suma':
        this.contador++;
        break;

      case 'resta':
        this.contador--;
        break;

      default:
        this.contador = 10;
        break;
    }
  }
}
