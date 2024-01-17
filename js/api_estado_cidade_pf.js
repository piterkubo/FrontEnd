/// Api Linkado com os estados 


const urlUF = `https://servicodados.ibge.gov.br/api/v1/localidades/estados`;
const pf_uf = document.getElementById("pf_uf")




window.addEventListener('load', async()=>{
    const request = await fetch(urlUF);
    const response = await request.json();
    
    //console.log(response[0].sigla)
    const options = document.createElement("optgroup");
    options.setAttribute('label','Selecione o estado');
    response.forEach(function(uf){
        options.innerHTML += '<option>'+uf.sigla+'</option>'       
        
    });

    pf_uf.append(options);

});




/// Api Linkado com as cidades 

const pf_cidade =document.getElementById("pf_cidade")
pf_uf.addEventListener('change',async function(){
    const urlCidades = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/`+pf_uf.value+`/municipios`;
    const request = await fetch(urlCidades);
    const response = await request.json();
    
    let options = '';
    response.forEach(function(cidades){
        options +='<option>'+cidades.nome+'</option>'
        
    });

    pf_cidade.innerHTML = options;

});


