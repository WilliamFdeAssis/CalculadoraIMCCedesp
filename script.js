const inputPeso = document.getElementById('peso');
const inputAltura = document.getElementById('altura');
const botaoCalcular = document.getElementById('calcular');
const botaoLimpar = document.getElementById('limpar');
const caixaResultado = document.getElementById('resultado');
const limparHistorico= document.getElementById('historico');

function classificar(imc){

    if(imc < 18.5){
        return
        ['Peso abaixo', 'c0']
    }

    if(imc < 25){
        return
        ['Peso normal', 'c1'];
    }

    if(imc < 30){
        return
        ['Sobrepeso', 'c2'];
    }

    if(imc < 35){
        return
        ['Obesidade grau I', 'c3'];
    }

    if(imc < 40){
        return
        [ 'Obesidade grau II', 'c4'  ]
    }

    return
    ['obesidade grau III', 'c4']

}

function calcular(){
    const peso = parseFloat(inputPeso.value.replace(',', '.'));
    const altura = parseFloat(inputAltura.value.replace(',', '.'));

    if(peso <= 0 || altura <=0){
        caixaResultado.className='';
        caixaResultado.textContent = ' informe peso e altura validos, maiores que zero';
        return
    }

}