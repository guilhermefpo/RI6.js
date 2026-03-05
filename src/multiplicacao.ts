import CalculoBase from "./calculoBase";

export default class Multiplicacao extends CalculoBase {
  calcular(): number {
    return this.numero1 * this.numero2;
  }
}
