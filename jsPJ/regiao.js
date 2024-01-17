let estado = document.getElementById("estado");

const value_elem_id = { 
    /// ^ value   :  ^ id do select cidade
  'AC':'ACRE',
  'AL':'ALAGOAS', 
  'AP':'AMAPA',
  'AM':'AMAZONAS',
  'BA':'BAHIA',
  'CE':'CEARA',
  'ES':'ESPIRITO SANTO',
  'GO':'GOIAS',
  'MA':'MARANHAO',
  'MT':'MATO GROSSO',
  'MS':'MATO GROSSO DO SUL',
  'MG':'MINAS GERAIS',
  'PA':'PARA',
  'PB':'PARAIBA',
  'PR':'PARANA',
  'PE':'PERNAMBUCO',
  'PI':'PIAUI',
  'RJ':'RIO DE JANEIRO',
  'RN':'RIO GRANDE DO NORTE',
  'RS':'RIO GRANDE DO SUL',
  'RO':'RONDONIA',
  'RR':'RORAIMA',
  'SC':'SANTA CATARINA',
  'SP':'SAO PAULO',
  'SE':'SERGIPE',
  'TO':'TOCANTINS',
  'DF':'DISTRITO FEDERAL'
  
};

/// ; Define o evento onchange no select#estado
estado.onchange = function(){
    /// ; this aqui dentro é o select#estado
    let valor = this.value;                     /// ; <- valor selecionado
    let selects = Array.from(                   /// ; <- transforma o resultado em array
      document.getElementsByTagName('select')   /// ; <- pega todos os selects 
    );
    
    selects.forEach(function(el){
    
        ///if(el.id != 'uf')  /// ; <- se o select não for o de estado display=none
            ///el.style.display='none';
        if(el.id == value_elem_id[valor] )  /// ; <- se o select é o da cidade display=block;
            el.style.display='block';
            
    });
    
    
    /// document.getElementById( value_elem_id[valor] ).style.display='block';
    /// ; outra forma de dar display block      
    
}