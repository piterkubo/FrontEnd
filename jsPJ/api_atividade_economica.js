/// Api Linkado com os estados 


const urlRamo = `https://servicodados.ibge.gov.br/api/v2/cnae/classes`;
const pj_atividade = document.getElementById("pj_atividade")




window.addEventListener('load', async()=>{
    const request = await fetch(urlRamo);
    const response = await request.json();
    
    //console.log(response[0].sigla)
    const options = document.createElement("optgroup");
    options.setAttribute('label','Selecione o ramo');
    response.forEach(function(ramo){
        options.innerHTML += '<option>'+ramo.descricao+'</option>'       
        
    });

    pj_atividade.append(options);

});
