let peso;
let altura;
let imc;
let resultado;

function calcularIMC(event) {
    event.preventDefault();

    peso = document.querySelector("#peso").value;
    altura = document.querySelector("#altura").value

    imc = peso / (altura*altura);

    resultado = document.querySelector(".resultado");

    if(imc < 18.5) {
        resultado.innerHTML = `Seu IMC é de ${imc.toFixed(2)} <br>Você está abaixo do peso`
    } else if(imc > 18.6 && imc <= 24.9) {
        resultado.innerHTML = `Seu IMC é de ${imc.toFixed(2)} <br>O seu peso está normal.`
    } else if(imc > 25 && imc <= 29.9) {
        resultado.innerHTML = `Seu IMC é de ${imc.toFixed(2)} <br>Você está levemente acima do peso.`
    } else if(imc > 30 && imc <= 34.9) {
        resultado.innerHTML = `Seu IMC é de ${imc.toFixed(2)}<br>Você está com obesidade grau I.`
    } else if(imc > 35 && imc <= 39.9) {
        resultado.innerHTML = `Seu IMC é de ${imc.toFixed(2)} <br>Você está com obesidade grau II(Severa).`
    } else {
        resultado.innerHTML = `Seu IMC é de ${imc.toFixed(2)} <br>Você está com obesidade grau III(Mórbida).`
    }

    document.querySelector("#peso").value = "";
    document.querySelector("#altura").value = "";
}