import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-generate',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export default class GenerateComponent implements OnInit {
  mayusculasChecked = false;
  simbolosChecked = false;
  rangeValue = 15;
  password = '';
  name = '';
  passwords: { id: number, name: string, pass: string }[] = [];
  data = ["1234567890", "abcdefghijklmnopqrstuvwxyz"];
  total: string[] = [];
  nameFieldVisible = false;

  ngOnInit(): void {
    this.listar();
  }

  toggleMayusculas(event: any): void {
    this.mayusculasChecked = event.target.checked;
    if (this.mayusculasChecked) {
      this.data.push(this.data[1].toUpperCase());
    } else {
      this.data.pop();
    }
  }

  toggleSimbolos(event: any): void {
    this.simbolosChecked = event.target.checked;
    if (this.simbolosChecked) {
      this.data.push("!@#$%^&*");
    } else {
      this.data.pop();
    }
  }

  updateRange(event: any): void {
    this.rangeValue = event.target.value;
    this.total = [];
    for (let index = 1; index <= this.rangeValue; index++) {
      const aleatorio = Math.floor(Math.random() * this.data.length);
      const dataale = this.data[aleatorio];
      const aleatorio2 = Math.floor(Math.random() * dataale.length);
      this.total.push(dataale[aleatorio2]);
    }
    this.password = this.total.join("");
  }

  copy(): void {
    navigator.clipboard.writeText(this.password).then(() => {
      alert("Copiado");
    });
  }

  save(): void {
    if (this.name === '' || this.password === '') {
      this.nameFieldVisible = true; // Mostrar el campo de nombre
      alert("Por favor, digite el nombre y genere el rango");
    } else {
      localStorage.setItem(this.name, this.password);
      this.name = ''; // Limpiar el campo de nombre después de guardar
      this.nameFieldVisible = false; // Ocultar el campo de nombre
      this.listar();
    }
  }

  listar(): void {
    const datosDesparse = { ...localStorage };
    this.passwords = [];
    let index = 1;
    for (const key in datosDesparse) {
      this.passwords.push({ id: index, name: key, pass: datosDesparse[key] });
      index++;
    }
  }
}
