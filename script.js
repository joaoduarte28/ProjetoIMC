const calcular = document.getElementById('calcular');


function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso/(altura**2)).toFixed(1);
        const pesoMinimo = (18.5 * (altura **2)).toFixed(1);
        const pesoMaximo = (25.5 * (altura **2)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (valorIMC < 25) {
            classificacao = 'com o peso ideal. Parabéns!';
        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso.';
        }else if (valorIMC < 35){
            classificacao = 'com obesidade grau I.';
        }else if (valorIMC < 40){
            classificacao = 'com obesidade grau II.';
        }else {
            classificacao = 'com obesidade grau III.';
        }

        resultado.textContent = 'Olá, ' +nome+'! Com '+peso+'kg e '+altura+'m seu IMC é '+valorIMC+' e você está '+classificacao+'.\n Sua faixa de peso ideal está entre '+pesoMinimo+'kg e '+pesoMaximo+'kg!';

    }else {
        resultado.textContent = 'Para calcular o seu IMC , preencha todos os campos.';
    }

}
calcular.addEventListener('click', imc);