import CalculoBase from "./calculoBase";
import Soma from "./soma";
import Subtracao from "./subtracao";
import Multiplicacao from "./multiplicacao";
import Divisao from "./divisao";
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(query: string): Promise<string> {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function main() {
  const numero1 = Number(await question("Digite o primeiro número: "));
  const numero2 = Number(await question("Digite o segundo número: "));
  const operacao = (
    await question(
      "Escolha a operação (Somar, Subtrair, Multiplicar, Dividir): ",
    )
  ).toLowerCase();

  let calculo: CalculoBase;

  switch (operacao) {
    case "somar":
      calculo = new Soma(numero1, numero2);
      break;
    case "subtrair":
      calculo = new Subtracao(numero1, numero2);
      break;
    case "multiplicar":
      calculo = new Multiplicacao(numero1, numero2);
      break;
    case "dividir":
      calculo = new Divisao(numero1, numero2);
      break;
    default:
      console.log("Operação inválida!");
      rl.close();
      return;
  }

  console.log(`Resultado: ${calculo.calcular()}`);
  rl.close();
}

main();
