/// Api Linkado com os estados 


const urlUF2 = `https://servicodados.ibge.gov.br/api/v1/localidades/estados`;
const pj_uf_rep2 = document.getElementById("pj_uf_rep2")




window.addEventListener('load', async()=>{
    const request = await fetch(urlUF2);
    const response = await request.json();
    
    //console.log(response[0].sigla)
    const options = document.createElement("optgroup");
    options.setAttribute('label','Selecione o estado');
    response.forEach(function(uf){
        options.innerHTML += '<option>'+uf.sigla+'</option>'       
        
    });

    pj_uf_rep2.append(options);

});




/// Api Linkado com as cidades 

const pj_cidade_rep2 =document.getElementById("pj_cidade_rep2")
pj_uf_rep2.addEventListener('change',async function(){
    const urlCidades = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/`+pj_uf_rep2.value+`/municipios`;
    const request = await fetch(urlCidades);
    const response = await request.json();
    
    let options = '';
    response.forEach(function(cidades){
        options +='<option>'+cidades.nome+'</option>'
        
    });

    pj_cidade_rep2.innerHTML = options;

});


