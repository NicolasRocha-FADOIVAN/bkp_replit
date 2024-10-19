const idade = 18;

if (idade >= 18) {
  console.log("maior de idade");
}
else if (idade < 18) {
  console.log("menor de idade");
}
else {
  console.log("idade inválida");
}

const cor_favorita = prompt("Qual a sua cor favorita?");

if (cor_favorita == "vermelho") {
  console.log("vermelho")
}
else if (cor_favorita == "azul") {
  console.log("azul")
}
else {
  console.log(cor_favorita = "não conheço essa cor")
}
console.log(cor_favorita.lenght)