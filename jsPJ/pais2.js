const paises2 = [
	{"nome": "Brasil"},
	{"nome": "Afeganistão"},
	{"nome": "Albânia"},
	{"nome": "Algéria"},
	{"nome": "Samoa Americana"},
	{"nome": "Andorra"},
	{"nome": "Angola"},
	{"nome": "Anguilla"},
	{"nome": "Antártida"},
	{"nome": "Antigua e Barbuda"},
	{"nome": "Argentina"},
	{"nome": "Armênia"},
	{"nome": "Aruba"},
	{"nome": "Austrália"},
	{"nome": "Áustria"},
	{"nome": "Azerbaijão"},
	{"nome": "Bahamas"},
	{"nome": "Bahrein"},
	{"nome": "Bangladesh"},
	{"nome": "Barbados"},
	{"nome": "Bielorrússia"},
	{"nome": "Bélgica"},
	{"nome": "Belize"},
	{"nome": "Benin"},
	{"nome": "Bermuda"},
	{"nome": "Butão"},
	{"nome": "Bolívia"},
	{"nome": "Bósnia e Herzegovina"},
	{"nome": "Botswana"},
	{"nome": "Ilha Bouvet"},
	{"nome": "Território Britânico do Oceano Índico"},
	{"nome": "Brunei"},
	{"nome": "Bulgária"},
	{"nome": "Burkina Faso"},
	{"nome": "Burundi"},
	{"nome": "Camboja"},
	{"nome": "Camarões"},
	{"nome": "Canadá"},
	{"nome": "Cabo Verde"},
	{"nome": "Ilhas Cayman"},
	{"nome": "República Centro-Africana"},
	{"nome": "Chade"},
	{"nome": "Chile"},
	{"nome": "China"},
	{"nome": "Ilha Christmas"},
	{"nome": "Ilhas Cocos (Keeling)"},
	{"nome": "Colômbia"},
	{"nome": "Comores"},
	{"nome": "Congo" },
	{"nome": "Congo (DR)"},
	{"nome": "Ilhas Cook"},
	{"nome": "Costa Rica"},
	{"nome": "Costa do Marfim"},
	{"nome": "Croácia"},
	{"nome": "Cuba"},
	{"nome": "Chipre"},
	{"nome": "República Tcheca"},
	{"nome": "Dinamarca"},
	{"nome": "Djibuti"},
	{"nome": "Dominica"},
	{"nome": "República Dominicana"},
	{"nome": "Equador"},
	{"nome": "Egito"},
	{"nome": "El Salvador"},
	{"nome": "Guiné Equatorial"},
	{"nome": "Eritreia"},
	{"nome": "Estônia"},
	{"nome": "Etiópia"},
	{"nome": "Ilhas Malvinas"},
	{"nome": "Ilhas Faroe"},
	{"nome": "Fiji"},
	{"nome": "Finlândia"},
	{"nome": "França"},
	{"nome": "Guiana Francesa"},
	{"nome": "Polinésia Francesa"},
	{"nome": "Terras Austrais e Antárticas Francesas"},
	{"nome": "Gabão"},
	{"nome": "Gâmbia"},
	{"nome": "Geórgia"},
	{"nome": "Alemanha"},
	{"nome": "Gana"},
	{"nome": "Gibraltar"},
	{"nome": "Grécia"},
	{"nome": "Groelândia"},
	{"nome": "Granada"},
	{"nome": "Guadalupe"},
	{"nome": "Guão"},
	{"nome": "Guatemala"},
	{"nome": "Guiné"},
	{"nome": "Guiné-Bissau"},
	{"nome": "Guiana"},
	{"nome": "Haiti"},
	{"nome": "Ilhas Heard e McDonald"},
	{"nome": "Vaticano"},
	{"nome": "Honduras"},
	{"nome": "Hong Kong"},
	{"nome": "Hungria"},
	{"nome": "Islândia"},
	{"nome": "Índia"},
	{"nome": "Indonésia"},
	{"nome": "Iran"},
	{"nome": "Iraque"},
	{"nome": "Irlanda"},
	{"nome": "Israel"},
	{"nome": "Itália"},
	{"nome": "Jamaica"},
	{"nome": "Japão"},
	{"nome": "Jordânia"},
	{"nome": "Cazaquistão"},
	{"nome": "Quênia"},
	{"nome": "Kiribati"},
	{"nome": "Coreia do Norte"},
	{"nome": "Coreia do Sul"},
	{"nome": "Kuwait"},
	{"nome": "Quirguistão"},
	{"nome": "Laos"},
	{"nome": "Letônia"},
	{"nome": "Líbano"},
	{"nome": "Lesoto"},
	{"nome": "Libéria"},
	{"nome": "Líbia"},
	{"nome": "Liechtenstein"},
	{"nome": "Lituânia"},
	{"nome": "Luxemburgo"},
	{"nome": "Macao"},
	{"nome": "Macedônia"},
	{"nome": "Madagascar"},
	{"nome": "Malawi"},
	{"nome": "Malásia"},
	{"nome": "Maldivas"},
	{"nome": "Mali"},
	{"nome": "Malta"},
	{"nome": "Ilhas Marshall"},
	{"nome": "Martinica"},
	{"nome": "Mauritânia"},
	{"nome": "Maurício"},
	{"nome": "Mayotte"},
	{"nome": "México"},
	{"nome": "Micronésia"},
	{"nome": "Moldova"},
	{"nome": "Mônaco"},
	{"nome": "Mongólia"},
	{"nome": "Montserrat"},
	{"nome": "Marrocos"},
	{"nome": "Moçambique"},
	{"nome": "Birmânia"},
	{"nome": "Namíbia"},
	{"nome": "Nauru"},
	{"nome": "Nepal"},
	{"nome": "Holanda"},
	{"nome": "Antilhas Holandesas"},
	{"nome": "Nova Caledônia"},
	{"nome": "Nova Zelândia"},
	{"nome": "Nicarágua"},
	{"nome": "Niger"},
	{"nome": "Nigéria"},
	{"nome": "Niue"},
	{"nome": "Ilha Norfolk"},
	{"nome": "Ilhas Marianas do Norte"},
	{"nome": "Noruega"},
	{"nome": "Omã"},
	{"nome": "Paquistão"},
	{"nome": "Palau"},
	{"nome": "Palestina"},
	{"nome": "Panamá"},
	{"nome": "Papua-Nova Guiné"},
	{"nome": "Paraguai"},
	{"nome": "Peru"},
	{"nome": "Filipinas"},
	{"nome": "Ilhas Picárnia"},
	{"nome": "Polônia"},
	{"nome": "Portugal"},
	{"nome": "Porto Rico"},
	{"nome": "Catar"},
	{"nome": "Reunião"},
	{"nome": "Romênia"},
	{"nome": "Rússia"},
	{"nome": "Ruanda"},
	{"nome": "Santa Helena"},
	{"nome": "São Cristóvão"},
	{"nome": "Santa Lúcia"},
	{"nome": "São Pedro e Miquelon"},
	{"nome": "São Vicente e Granadinas"},
	{"nome": "Samoa"},
	{"nome": "São Marino"},
	{"nome": "Sao Tomé e Príncipe"},
	{"nome": "Arábia Saudita"},
	{"nome": "Senegal"},
	{"nome": "Sérvia e Montenegro"},
	{"nome": "Seicheles"},
	{"nome": "República da Serra Leoa"},
	{"nome": "Singapura"},
	{"nome": "Eslováquia"},
	{"nome": "Eslovênia"},
	{"nome": "Ilhas Salomão"},
	{"nome": "Somália"},
	{"nome": "África do Sul"},
	{"nome": "Ilhas Geórgia do Sul e Sandwich do Sul"},
	{"nome": "Espanha"},
	{"nome": "Sri Lanka"},
	{"nome": "Sudão"},
	{"nome": "Suriname"},
	{"nome": "Esvalbarde"},
	{"nome": "Suazilândia"},
	{"nome": "Suécia"},
	{"nome": "Suiça"},
	{"nome": "Síria"},
	{"nome": "Taiwan"},
	{"nome": "Tajiquistão"},
	{"nome": "Tanzânia"},
	{"nome": "Tailândia"},
	{"nome": "Timor-Leste"},
	{"nome": "Togo"},
	{"nome": "Toquelau"},
	{"nome": "Tonga"},
	{"nome": "Trinidad e Tobago"},
	{"nome": "Tunísia"},
	{"nome": "Turquia"},
	{"nome": "Turcomenistão"},
	{"nome": "Ilhas Turks e Caicos"},
	{"nome": "Tuvalu"},
	{"nome": "Uganda"},
	{"nome": "Ucrânia"},
	{"nome": "Emirados Árabes"},
	{"nome": "Reino Unido"},
	{"nome": "Estados Unidos"},
	{"nome": "Ilhas Menores Distantes dos Estados Unidos"},
	{"nome": "Uruguai"},
	{"nome": "Uzbequistão"},
	{"nome": "Vanuatu"},
	{"nome": "Venezuela"},
	{"nome": "Vietnam"},
	{"nome": "Ilhas Virgens Inglesas"},
	{"nome": "Ilhas Virgens (USA)"},
	{"nome": "Wallis e Futuna"},
	{"nome": "Saara Ocidental"},
	{"nome": "Iêmen"},
	{"nome": "Zâmbia"},
	{"nome": "Zimbábue"}
]



///Tratando o arquivo json e filtrando para o select do html



const pj_pais2 = document.getElementById("pj_pais2")

window.addEventListener('load', async()=>{   
    
    const options = document.createElement("optgroup");
    options.setAttribute('label','Selecione o Pais');
    paises2.map((pais)=>{
        options.innerHTML += '<option>'+[pais.nome]+'</option>'
    })            
        

    pj_pais2.append(options);

});




