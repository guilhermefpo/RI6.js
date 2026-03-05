import CalculoBase from "./calculoBase";

export default class Subtracao extends CalculoBase {
  calcular(): number {
    return this.numero1 - this.numero2;
  }
}
