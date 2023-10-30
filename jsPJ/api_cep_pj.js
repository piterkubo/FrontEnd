'use strict';


/* Configurações PJ API VIA CEP */

/* Limpar formulario */

const  limparFormulario = (endereco) =>{
    document.getElementById('pj_endereco').value = '';
    document.getElementById('pj_bairro').value = '';
    document.getElementById('pj_cidade').value = '';
    document.getElementById('pj_uf').value = '';
}


/*Função para preencher o formulario*/

const preencherFormulario = (endereco) =>{
    document.getElementById('pj_endereco').value = endereco.logradouro;
    document.getElementById('pj_bairro').value = endereco.bairro;
    document.getElementById('pj_cidade').value = endereco.localidade;
    document.getElementById('pj_uf').value = endereco.uf;
}

/*Função para verificar se o cep é valido*/
const cepValido = (pj_cep) => true;



/* Função que recebe os dados e gera uma logica*/

const pequisarCep = async() =>{ 
   limparFormulario();
   const cep = document.getElementById('pj_cep').value;
   const url = `http://viacep.com.br/ws/${cep}/json/`;

   if
   (cepValido(cep)){
        /*fetch(url).then(response => response.json()).then(console.log)*/

        const dados = await fetch(url);
        const endereco = await dados.json();
        
        if (endereco.hasOwnProperty('erro')){
            document.getElementById('pj_endereco').value = 'Cep não encontrado!';
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

document.getElementById('pj_cep')
    .addEventListener('focusout',pequisarCep);









