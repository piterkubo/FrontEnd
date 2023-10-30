/// Api Linkado com os estados 


const urlUF = `https://servicodados.ibge.gov.br/api/v1/localidades/estados`;
const pj_uf_rep1 = document.getElementById("pj_uf_rep1")




window.addEventListener('load', async()=>{
    const request = await fetch(urlUF);
    const response = await request.json();
    
    //console.log(response[0].sigla)
    const options = document.createElement("optgroup");
    options.setAttribute('label','Selecione o estado');
    response.forEach(function(uf){
        options.innerHTML += '<option>'+uf.sigla+'</option>'       
        
    });

    pj_uf_rep1.append(options);

});




/// Api Linkado com as cidades 

const pj_cidade_rep1 =document.getElementById("pj_cidade_rep1")
pj_uf_rep1.addEventListener('change',async function(){
    const urlCidades = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/`+pj_uf_rep1.value+`/municipios`;
    const request = await fetch(urlCidades);
    const response = await request.json();
    
    let options = '';
    response.forEach(function(cidades){
        options +='<option>'+cidades.nome+'</option>'
        
    });

    pj_cidade_rep1.innerHTML = options;

});


