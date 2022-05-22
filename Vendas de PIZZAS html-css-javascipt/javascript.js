'use strict';
//Variáveis
let somaMussarela = 0;
let somaMista = 0;
let somaCalabresa = 0;
let vendaMussarela = 0.00;
let vendaMista = 0.00;
let vendaCalabresa = 0.00;

let btnVenda = document.getElementById('vendas');
let btnEstorno = document.getElementById('estorno');
let btnPlanilha = document.getElementById('export');

//eventos
btnVenda.addEventListener('click',vendas,false);
btnEstorno.addEventListener('click',estorno,false);
btnPlanilha.addEventListener('click',planilha,false)

//funções
function vendas(e) 
{
    if(document.getElementById('mussarela').checked)
    {
        somaMussarela = somaMussarela + 1;
        vendaMussarela = vendaMussarela + 25.00;
        document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
        document.getElementById('vendasMussarela').innerHTML = vendaMussarela.toFixed(2);
    }else if(document.getElementById('mista').checked)
    {
        somaMista = somaMista + 1;
        vendaMista = vendaMista + 25.00;
        document.getElementById('resultadoMista').innerHTML = somaMista;
        document.getElementById('vendasMista').innerHTML = vendaMista.toFixed(2);
    }else if(document.getElementById('calabresa').checked)
    {
        somaCalabresa = somaCalabresa + 1;
        vendaCalabresa = vendaCalabresa + 25.00;
        document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa
        document.getElementById('vendasCalabresa').innerHTML = vendaCalabresa.toFixed(2);
    }
}

function estorno(e) 
{
    if(document.getElementById('mussarela').checked)
    {
        somaMussarela = somaMussarela - 1;
        vendaMussarela = vendaMussarela - 25.00;
        if(somaMussarela < 0)
        {
            somaMussarela = 0;
            vendaMussarela = 0.00;
        }
        document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
        document.getElementById('vendasMussarela').innerHTML = vendaMussarela.toFixed(2);
    }else if(document.getElementById('mista').checked)
    {
        somaMista = somaMista - 1;
        vendaMista = vendaMista - 25.00;
        if(somaMista < 0)
        {
            somaMista = 0;
            vendaMista = 0.00;
        }
        document.getElementById('resultadoMista').innerHTML = somaMista;
        document.getElementById('vendasMista').innerHTML = vendaMista.toFixed(2);
    }else if(document.getElementById('calabresa').checked)
    {
        somaCalabresa = somaCalabresa - 1;
        vendaCalabresa = vendaCalabresa - 25.00;
        if(somaCalabresa < 0)
        {
            somaCalabresa = 0;
            vendaCalabresa = 0.00;
        }
        document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa
        document.getElementById('vendasCalabresa').innerHTML = vendaCalabresa.toFixed(2);
    }
}

function planilha(e)
{
    TableToExcel.convert(document.getElementById('table'))
}