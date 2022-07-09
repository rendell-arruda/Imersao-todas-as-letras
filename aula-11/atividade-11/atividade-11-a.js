// Atividade 11
// Adicione a resposta na linha abaixo de cada exercício

// Utilize a tabela do link para auxiliar no exercício 1 e 2:
// http://www.prosangue.sp.gov.br/artigos/quem_doa_pra_quem.html

// 1 - Crie uma função que recebe o argumento `tipoSanguineo` que recebe uma string
// e faça uma condicional com if para retornar uma string falando para qual tipo sanguíneo o tipo recebido doa.
// Faça para tipo `A+`, `A-` e caso a função receba outro tipo sanguíneo, retornar que não está em nossa base.
// Exemplo se receber A+: "A+ doa para A+ e B+".

function defineTipoSanguineo(tipoSanguineo) {
  if (tipoSanguineo === 'A+') {
    console.log(`A+ doa para AB+ e ele mesmo.`)
  } else if (tipoSanguineo === 'A-') {
    console.log(`A- doa para AB+,AB-, A+ e ele mesmo.`)
  } else {
    console.log(
      `O tipo sanguíneio ${tipoSanguineo} não esta em nossa base de dados.`
    )
  }
}
// defineTipoSanguineo('B+')

// 2 - Crie uma função que recebe o argumento `tipoSanguineo` que recebe uma string
// e faça uma condicional com switch para retornar uma string falando para qual tipo sanguíneo o tipo recebido doa.
// Faça para tipo `B+`, `B-` e caso a função receba outro tipo sanguíneo, retornar que não está em nossa base.
function defineTipoSanguineo2(tipoSanguineo) {
  switch (tipoSanguineo) {
    case 'B+':
      console.log(`B+ doa para AB+ e ele mesmo.`)
      break
    case 'B-':
      console.log(`B- doa para AB+, AB-, B+ e ele mesmo.`)
      break
    default:
      console.log(
        `O tipo sanguíneio ${tipoSanguineo} não esta em nossa base de dados.`
      )
      break
  }
}

// 3 - Crie uma laço de repetição com for que se inicia com 5 e incrementa de um em um até chegar em 15.

for (var i = 5; i < 15; i++) {
  console.log(i)
}
