var largura = prompt("digite a largura do terreno")
var comprimento = prompt("digite a comprimento do terreno")
argura = parseFloat (largura)
comprimento = parseFloat(comprimento)

 function calcularAreaTerreno(largura , comprimento) { 
    
    var area = largura * comprimento
    return area 
  
 }

  var area = calcularAreaTerreno( largura  , comprimento )
  document.write('o terrono possui ' +  area + ' metros quadrados')
  



