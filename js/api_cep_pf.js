'use strict';


/* Configurações PJ API VIA CEP */

/* Limpar formulario */

const  limparFormulario = (endereco) =>{
    document.getElementById('pf_endereco').value = '';
    document.getElementById('pf_bairro').value = '';
    document.getElementById('pf_cidade').value = '';
    document.getElementById('pf_uf').value = '';
}

/*Função para preencher o formulario*/

const preencherFormulario = (endereco) =>{
    document.getElementById('pf_endereco').value = endereco.logradouro;
    document.getElementById('pf_bairro').value = endereco.bairro;
    document.getElementById('pf_cidade').value = endereco.localidade;
    document.getElementById('pf_uf').value = endereco.uf;
}

/*Função para verificar se o cep é valido*/
const cepValido = (pf_cep) => true;



/* Função que recebe os dados e gera uma logica*/

const pequisarCep = async() =>{ 
    limparFormulario();
    const cep = document.getElementById('pf_cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
 
    if
    (cepValido(cep)){
         /*fetch(url).then(response => response.json()).then(console.log)*/
 
         const dados = await fetch(url);
         const endereco = await dados.json();
         
         if (endereco.hasOwnProperty('erro')){
             document.getElementById('pf_endereco').value = 'Cep não encontrado!';
         }
 
         else{
                 preencherFormulario(endereco);
         }        
     
    }
 
    else{
     document.getElementById('endereco').value = 'Cep Incorreto! Tente novamente';
    }
 
 
 }
/* Campo cep adicionando o dado e saindo do focus*/

document.getElementById('pf_cep')
    .addEventListener('focusout',pequisarCep);









