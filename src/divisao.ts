import CalculoBase from "./calculoBase";

export default class Divisao extends CalculoBase {
  calcular(): number {
    if (this.numero2 === 0) throw new Error("Divisão por zero!");
    return this.numero1 / this.numero2;
  }
}
