function verificarNumeros(){
    let numero = document.getElementById('numeros').value
    numero.trim()
    numero = parseInt(numero).toString(2)
   
    let leng = numero.length
     
    var bin = document.getElementById('resultado').value += numero
    
}
function limpa(){
    document.getElementById('numeros').value = ''
    document.getElementById('resultado').value = ''
}
    

