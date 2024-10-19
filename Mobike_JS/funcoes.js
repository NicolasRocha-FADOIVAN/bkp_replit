/*
FUNÇÕES SÃO BLOCO QUE PODEM SER REUTILIZADOS
FUNÇÕES PODEM OU NÃO RECEBER PARÂMETROS
FUNÇÕES PODEM RETORNAR VALORES OU NÃO
FUNÇÕES PODEM SER ANÔNIMAS
*/

// DECLARAÇÃO DE FUNÇÕES
function estralaVermelha() {
  alert('seq')
}
function umaEstrela(nome) {
  alert('Olá ' + nome)
}

const nome = "Edgay"
const sobrenome = "Porque você é tão lindo"
const idade = 13

function dadosPessoais() {
  const dados = nome + ' ' + sobrenome + ' ' + idade
  console.log(dados)
}

//INVOCAÇÃO DE FUNÇÕES

estralaVermelha()
umaEstrela('Lula')