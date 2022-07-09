/*
Atividade 13
Adicione a resposta na linha abaixo de cada exercício
Coloque todo o código do arquivo em uma IIFE.
Em todos os retornos, use o console.log para imprimir o resultado.
Use métodos de array e use let e const para variáveis.
*/

(function () {
  /*
  1 - Declare uma variável que contenha um array com 5 nomes de cidades em strings.
  Imprima o tamanho desse array.
  */

  let cidades = ['Sorocaba', 'Itu', 'Salto de Pirapora', 'Jundiaí', 'Iperó']
  console.log(cidades.length)

  /*
  2 - Declare uma variável que contenha um array com 5 nomes de países em strings.
  Adicione um país no começo do array.
  Adicione um país no fim do array.
  Imprima esse array.
  */

  let paises = ['Uruguai', 'Paraguai', 'Argentina', 'Chile', 'Guiana']
  paises.unshift('Brasil')
  paises.push('Peru')
  console.log(paises)

  /*
  3 - Declare uma variável que contenha um array com 5 nomes de livros em strings.
  Remova um item no começo do array.
  Remova um item no fim do array.
  Imprima esse array.
  */

  let livros = ['O código limpo', 'Inglês para leigos', 'Teoria musical para leigos', 'O andar do Bêbado', 'Como fazer amigos e influenciar pessoas']
  livros.shift()
  livros.pop()
  console.log(livros)

  /*
  4 - Declare uma variável que contenha um array com 5 números entre 10 e 99.
  Coloque em um novo array 3 desses números.
  Imprima esse novo array.
  */
  let numeros = [23, 53, 36, 89, 64]
  let recorteNumeros = numeros.slice(0, 3)
  console.log(recorteNumeros)

  /* 
  5 - Declare uma variável que contenha um array com 5 vogais em strings.
  Coloque esse array ao contrário e una todas essas letras em uma string.
  Imprima em um console.log.
  */

  const vogais = ['a', 'e', 'i', 'o', 'u']
  console.log(vogais.reverse().join(''))
})()