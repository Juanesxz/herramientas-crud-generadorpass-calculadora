import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export default class CalculadoraComponent {
  displayValue: string = '';
  previousValue: string = '';
  operator: string | null = null;

  appendToDisplay(value: string): void {
    if (value === '.' && this.displayValue.includes('.')) {
      return;
    }
    this.displayValue += value;
  }

  clear(): void {
    this.displayValue = '';
    this.previousValue = '';
    this.operator = null;
  }

  percentage(): void {
    // Implementar lógica para %
    if (this.displayValue) {
      const value = parseFloat(this.displayValue) / 100;
      this.displayValue = value.toString();
    }
  }

  operation(op: string): void {
    if (this.displayValue) {
      if (this.operator && this.previousValue) {
        this.calculate();
      }
      this.previousValue = this.displayValue;
      this.displayValue += op;
      this.operator = op;
    }
  }

  calculate(): void {
    if (this.displayValue && this.previousValue && this.operator) {
      const value1 = parseFloat(this.previousValue);
      const value2 = parseFloat(this.displayValue);
      let result: number;
      switch (this.operator) {
        case '+':
          result = value1 + value2;
          break;
        case '-':
          result = value1 - value2;
          break;
        case '*':
          result = value1 * value2;
          break;
        case '/':
          result = value1 / value2;
          break;
        default:
          result = value2;
          break;
      }
      this.displayValue = result.toString();
      this.previousValue = '';
      this.operator = null;
    }
  }
}
