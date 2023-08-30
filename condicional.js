function media() {
    var val1 = document.getElementById('valor1').value;
    var val2 = document.getElementById('valor2').value;

    var result = (parseInt(val1) + parseInt(val2)) / 2;

    if (result == 10) {
        alert('Você é um gênio!')
    } else if (result == 0){
        alert('Você é um burro!')
    }

    if (result >= 6) {
        alert('Sua média foi: ' +result+ ' Parabéns, você foi aprovado')
    } else {
        alert('Sua média foi: ' +result+ ' Que pena, você foi reprovado')
    }
}

function comparacao() {
    var val1 = document.getElementById('valor1').value;
    var val2 = document.getElementById('valor2').value;

    if (val1 == val2){
        alert('Os valores são iguais')
    } else if (val1 > val2){
       alert('Valor 1 é maior que o Valor 2') 
    } else {
        alert('Valor 2 é maior que o Valor 1')
    }
    
}