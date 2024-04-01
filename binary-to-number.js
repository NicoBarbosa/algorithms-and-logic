function binaryToNumber(string) {
  //Essa lógica foi usada e criada em `number-to-binary.js`.
  var bits = new Array(8);

  for (var i = bits.length - 1; i >= 0; i--) {
    bits[i] = 2 ** i;
  }

  var bitsArrayReverse = bits.reverse();

  //Uma mudança simples, para dividir os caracteres da prop ´string´ em um array.
  var bit = string.split("");

  var sum = 0;

  for (var i = 0; i < bitsArrayReverse.length; i++) {
    //E a única mudança real foi essa. Apenas pedi para pegar os caracteres anteriormente separados, e todos que forem 1, vou até o Array bitsArrayReverse (que é onde se encontra o exponencial) e atribuí seus valores a sum.
    if (bit[i] === "1") {
      sum += bitsArrayReverse[i];
    }
  }

  //Retorno o sum (soma), ao invés de um Array.
  return sum;
}

//Cheguei a conclusão que o Array bits, por ter 8 de comprimento pré setado, faz uma verificação e não permite que mais de 8 caracteres sejam computados.
console.log(binaryToNumber("11111111"));
