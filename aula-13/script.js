; (function () {
  //arrays
  let produtos = ['amaciante', 'detergente', 'sabao']
  console.warn('Metodo lenght')
  console.log(produtos)
  console.log(produtos.length)

  //método concat
  console.warn('Metodo concat')
  let produtos2 = ['refrigerante']
  let produtos3 = ['energético']

  let produtos4 = produtos2.concat(produtos3)
  console.log(produtos4)

  // metodo join: junta os elementos do array numa string e adiciona um separador
  console.warn('Metodo join')
  let dados = ['São Paulo', 25, 'Brasil']
  let dadosTratados = dados.join('\n')
  console.log(dadosTratados)

  //metodo push: adiciona no final do array
  console.warn('Metodo push')
  let bebidas = ['cerveja', 'vinho']
  bebidas.push('água')
  console.log(bebidas)

  //metodo pop: remove elementos do final do array
  console.warn('Metodo pop')
  bebidas.pop()
  console.log(bebidas)

  //metodo shift: retirar elemento do inicio do array
  console.warn('Metodo shift')
  bebidas.shift()
  console.log(bebidas)

  //metodo unshift: adiciona elemento no inicio do array
  console.warn('Metodo unshift')
  bebidas.unshift('refrigerante')
  console.log(bebidas)

  //metodo slice : recorta uma faixa dos itens seguindo seus indices sem incluir o ultimo

  console.warn('Metodo slice')
  let numeros = [10, 20, 30, 40, 50, 60, 70, 80]
  let numerosSorteados = numeros.slice(2, 5)
  console.log(numerosSorteados)

  //metodo splice
  console.warn('Metodo splice')
  numeros.splice(1, 4, 'nome')
  console.log(numeros)

  //metodo reverse : inverte o sentido do array
  console.warn('Metodo reverse')
  let letras = ['a', 'b', 'c', 'd']
  let letrasAoContrario = console.log(letras.reverse())

  //dois metodos
  console.warn('Dois metodos')

  let silabas = ['ba', 'be', 'bi', 'bo', 'bu']
  console.log(silabas.reverse().join('-'))
})()
