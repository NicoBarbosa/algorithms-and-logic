//Função que transorma um número em um byte (conjunto de 8bits)!
function binary(number) {
  //Primeiramente quiz me propor o "desafio" matemático de fazer a potenciação dos bits. Para poder usá-lo mais a frente. Não queria simplesmente fazer um Array [128, 64, 32, 16, 8, 4, 2, 1].
  var bits = new Array(8);

  //Usando um Loop for, foi feita a leitura do Array de trás para frente, para que eu pudesse usar do índice como o número de potenciação.
  for (var i = bits.length - 1; i >= 0; i--) {
    bits[i] = 2 ** i;
  }

  //Uma nova variável para poder inverter o array, de modo que de fato, da esquerda para a direita, começasse com o maior número (128), e terminasse com o menor (1). !Importante no próximo Loop For.
  var bitsArrayReverse = bits.reverse();

  //Este Array serve para guardar a sequência binária um a um.
  var bytes = new Array();

  //Cheguei a conclusão de que seria necessário uma variável para armazenar o primeiro número que fosse == ou < que ao número recebido na propriedade number.
  var sum = 0;

  //Um Loop for apenas :)
  for (var i = 0; i < bitsArrayReverse.length; i++) {
    //Se a soma do valor atribuido à variável sum + bitsArrayReverse[2] (por exemplo) for menor ou igual ao number, o valor é atribuído a sum e o número 1 (on) é atribuído ao Array bytes.
    if (sum + bitsArrayReverse[i] <= number) {
      sum += bitsArrayReverse[i];
      bytes.push(1);

      //Senão, atribui o valor 0, ao índice correspondente no Array bytes.
    } else {
      bytes.push(0);
    }
  }

  //Por fim é retornado o Array bytes com uma pequena formatação utilizando .join("") para que não tenha a estrutura de Array ou vírgulas.
  return bytes.join("");
}

console.log(binary(114));
