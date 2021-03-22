let valorEmDolarTexto = prompt("Qual o Valor em Dólar que você quer converter?")

  valorEmDolarTexto = parseFloat(valorEmDolarTexto)
  
 let valorEmReal = valorEmDolarTexto * 5.54
 let valorEmRealFixado = valorEmReal.toFixed(2)

 alert(valorEmRealFixado)