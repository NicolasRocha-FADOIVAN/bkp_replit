function nome(nome, altura) {
  if (typeof nome === "string" && typeof altura === "number") {
    console.log("seu nome e sua altura são" + " " + nome + " " + altura)
  } else { console.log("erro") }
}
nome("Rato", 1.77)




function calculadora(n1, n2) {
  if (typeof n1 === "number" && typeof n2 === "number") {
    const RES = n1 + n2
    console.log("total" + " " + RES)
  } else { console.log("erro") }
}
calculadora(1, 2)



