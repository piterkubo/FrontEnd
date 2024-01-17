const ddd = [
    
       {"Estado":"SP","DDD":"11"},
       {"Estado":"SP","DDD":"12"},
       {"Estado":"SP","DDD":"13"},
       {"Estado":"SP","DDD":"14"},
       {"Estado":"SP","DDD":"15"},
       {"Estado":"SP","DDD":"16"},
       {"Estado":"SP","DDD":"17"},
       {"Estado":"SP","DDD":"18"},
       {"Estado":"SP","DDD":"19"},
       {"Estado":"RJ","DDD":"21"},
       {"Estado":"RJ","DDD":"22"},
       {"Estado":"RJ","DDD":"24"},
       {"Estado":"ES","DDD":"27"},
       {"Estado":"ES","DDD":"28"},
       {"Estado":"MG","DDD":"31"},
       {"Estado":"MG","DDD":"32"},
       {"Estado":"MG","DDD":"33"},
       {"Estado":"MG","DDD":"34"},
       {"Estado":"MG","DDD":"35"},
       {"Estado":"MG","DDD":"37"},
       {"Estado":"MG","DDD":"38"},
       {"Estado":"PR","DDD":"41"},
       {"Estado":"PR","DDD":"42"},
       {"Estado":"PR","DDD":"43"},
       {"Estado":"PR","DDD":"44"},
       {"Estado":"PR","DDD":"45"},
       {"Estado":"PR","DDD":"46"},
       {"Estado":"SC","DDD":"47"},
       {"Estado":"SC","DDD":"48"},
       {"Estado":"SC","DDD":"49"},
       {"Estado":"RS","DDD":"51"},
       {"Estado":"RS","DDD":"53"},
       {"Estado":"RS","DDD":"54"},
       {"Estado":"RS","DDD":"55"},
       {"Estado":"DF","DDD":"61"},
       {"Estado":"GO","DDD":"62"},
       {"Estado":"TO","DDD":"63"},
       {"Estado":"GO","DDD":"64"},
       {"Estado":"MT","DDD":"65"},
       {"Estado":"MT","DDD":"66"},
       {"Estado":"MS","DDD":"67"},
       {"Estado":"AC","DDD":"68"},
       {"Estado":"RO","DDD":"69"},
       {"Estado":"BA","DDD":"71"},
       {"Estado":"BA","DDD":"73"},
       {"Estado":"BA","DDD":"74"},
       {"Estado":"BA","DDD":"75"},
       {"Estado":"BA","DDD":"77"},
       {"Estado":"SE","DDD":"79"},
       {"Estado":"PE","DDD":"81"},
       {"Estado":"AL","DDD":"82"},
       {"Estado":"PB","DDD":"83"},
       {"Estado":"RN","DDD":"84"},
       {"Estado":"CE","DDD":"85"},
       {"Estado":"PI","DDD":"86"},
       {"Estado":"PE","DDD":"87"},
       {"Estado":"CE","DDD":"88"},
       {"Estado":"PI","DDD":"89"},
       {"Estado":"PA","DDD":"91"},
       {"Estado":"AM","DDD":"92"},
       {"Estado":"PA","DDD":"93"},
       {"Estado":"PA","DDD":"94"},
       {"Estado":"RR","DDD":"95"},
       {"Estado":"AP","DDD":"96"},
       {"Estado":"AM","DDD":"97"},
       {"Estado":"MA","DDD":"98"},
       {"Estado":"MA","DDD":"99"},
       
       
        
        
            

]


//Tratando o arquivo json e filtrando para o select do html

const pf_ddd = document.getElementById("pf_ddd")

window.addEventListener('load', async()=>{   
    
    const options = document.createElement("optgroup");
    options.setAttribute('label','Selecione o DDD');
    ddd.map((ddd)=>{
        options.innerHTML += '<option>' +ddd.DDD+ '</option>'
    })            
        

    pf_ddd.append(options);

});



const pj_ddd = document.getElementById("pj_ddd")

window.addEventListener('load', async()=>{   
    
    const options = document.createElement("optgroup");
    options.setAttribute('label','Selecione o DDD');
    ddd.map((ddd)=>{
        options.innerHTML += '<option>' +ddd.DDD+ '</option>'
    })            
        

    pj_ddd.append(options);

});