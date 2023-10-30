
// #arquivo_upload == o nome do id que foi colocado no html

// .text-upload == o nome da classe declarada no span

document.querySelector('#arquivos_upload').addEventListener('change',function(){

        document.querySelector('.text-upload').textContent = this.files[0].name
    

})
    
