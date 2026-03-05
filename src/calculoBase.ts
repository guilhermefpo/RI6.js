abstract class CalculoBase {
  numero1: number;
  numero2: number;

  constructor(a: number, b: number) {
    this.numero1 = a;
    this.numero2 = b;
  }

  abstract calcular(): number;
}

export default CalculoBase;
