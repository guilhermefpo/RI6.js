import CalculoBase from "./calculoBase";

export default class Soma extends CalculoBase {
  calcular(): number {
    return this.numero1 + this.numero2;
  }
}
