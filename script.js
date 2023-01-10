var peso;
var altura;
var imc;
var resultado;

function calcular(event) {
    event.preventDefault();  // função necessária para evitar que o event de um refrash na página!

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    imc = peso / (altura * altura);
    
    resultado = document.getElementById('resultado');  

    if(imc < 17) {
            // método toFixed() podemos indicar quantas casas decimais queremos apresentar.
        resultado.innerHTML = '<br>Seu resultado foi: ' + imc.toFixed(2) + '<br>Cuidado você está muito abaixo do peso!'
    } else if(imc > 17 && imc <= 18.49) {
        resultado.innerHTML = '<br>Seu resultado foi: ' + imc.toFixed(2) + '<br> Você está abaixo do peso!'
    } else if(imc >= 18.5 && imc < 24.99) {
        resultado.innerHTML = '<br>Seu resultado foi: ' + imc.toFixed(2) + '<br> Você está no seu peso ideal!'
    } else if(imc > 25 && imc <= 29.99) {
        resultado.innerHTML = '<br>Seu resultado foi: ' + imc.toFixed(2) + '<br> Você está no acima do peso!'
    } else if(imc >= 30) {
        resultado.innerHTML = '<br>Seu resultado foi: ' + imc.toFixed(2) + '<br> Cuidado Obesidade!'
    }

    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
}    