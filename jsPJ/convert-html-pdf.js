function gerarPDF(){

    var imgData = "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"+
    "vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADgWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94c"+
    "GFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZ"+
    "XRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8c"+
    "mRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uI"+
    "HJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9uc"+
    "y5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIge"+
    "G1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjY4NTVjZWY0LWM5YjQtMDM0YS1hM2ZiLTgxYzY5YzVlNjNkMyIgeG1wTU06RG9jd"+
    "W1lbnRJRD0ieG1wLmRpZDpCQkMwMDZDMzAxRUUxMUVEOEJGQ0QyQzExMTlGOUIzNiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCQkMwM"+
    "DZDMjAxRUUxMUVEOEJGQ0QyQzExMTlGOUIzNiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjMuMCAoV2luZG93cykiPiA8e"+
    "G1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0OTJmNjRiZS0xNzc2LTlkNGItYmE4OC1hOTliY2Y0YmQ0ZDMiI"+
    "HN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoyOWY2M2Y5OS03NzYzLWRiNDUtYTg5ZS05YzlhNGU1OTdhYTIiLz4gP"+
    "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"

    var doc = new jsPDF();

   
    



//part1:
    doc.addImage(imgData, 'JPEG', 90,20,25,30);
    doc.fromHTML('<h2>Novo Marco cambial</h2>', 75, 50);
    doc.fromHTML('<h3>Termo de Adesão à Prestação de Serviço Cambiais</h3>', 55, 65);
    doc.fromHTML('<p>PITER KUBO CHAGAS, BRASIL,  residente e domiciliado(a) na cidade de Guarulhos, Estado de SP, à</p>',15, 80);
    doc.fromHTML('<p>Rua Murutu, no 763, Bairro Jardim Silvestre, CEP 07243150, portador(a) da carteira de identidade RG</p>',15, 85);
    doc.fromHTML('<p>no 04493209670, expedida pela SSPSP/SP,e do CPF no 339.223.978-08, doravante referido(a)</p>', 15, 90); 
    doc.fromHTML('<p>como "cliente", pelo presente termo de responsabilidade, declara:</p>',15,95);
   
// part2
   
    doc.fromHTML('<p>a. ter pleno conhecimento dos termos do artigo 2o da Resolução   BCB no 277/22, segundo o qual é livre</p>',15,105); 
    doc.fromHTML('<p>a forma de celebração de operação de câmbio;</p>',15,110);

//part3  
      
    doc.fromHTML('<p>b. ter pleno conhecimento de que é diretamente responsável pela classificação da finalidade das operações</p>',15,125);
    doc.fromHTML('<p>no mercado de câmbio, conforme parágrafo 2o do artigo 4o da Lei 14.286/21 e que a obrigação da Guitta</p>',15,130);
    doc.fromHTML('<p>Corretora de Câmbio se limita a apresentar e tornar disponível, em livre formato que permita o claro</p>',15,135);
    doc.fromHTML('<p>entendimento, os códigos de operação constantes dos anexos III, IV ou V da Resolução BCB no 277/22,</p>',15,140);
    doc.fromHTML('<p>além de disponibilizar orientação e suporte técnico para clientes que necessitarem de apoio para</p>',15,145);
    doc.fromHTML('<p>a correta classificação de finalidade de operações no mercado de câmbio;</p>',15,150);
    
     
    
//part4

    doc.fromHTML('<p>c. que, como ele(a) cliente é o responsável pela classificação da finalidade das operações de câmbio</p>',15,165);
    doc.fromHTML('<p>e a Guitta não participa do processo decisório de definição da finalidade de tais operações, ele(a)cliente</p>',15,170);
    doc.fromHTML('<p>é o único responsável no caso de constituição de crédito tributário contra si ou contra a Guitta Corretora de</p>',15,175);
    doc.fromHTML('<p>Câmbio, por classificação incorreta de uma operação, não respondendo a Guitta Corretora de Câmbio, </p>',15,180);
    doc.fromHTML('<p>isoladamente ou solidariamente ao(à) cliente, pela constituição do crédito tributário;</p>',15,185);
   
   
//part5

   doc.fromHTML('<p>d. ter pleno conhecimento que a Guitta Corretora de Câmbio Ltda.pode requisitar ou dispensar, conforme sua</p>',15,195);
   doc.fromHTML('<p>avaliação e livre critério, informações e documentos comprobatórios de uma operação, conforme permitido</p>',15,200);
   doc.fromHTML('<p>pelos termos do artigo 7o da Resolução BCB no 277/22;</p>',15,205);
   
   

//part6
  
   doc.fromHTML('<p>e. que ele(a) cliente é integralmente responsável e indenizará a Guitta Corretora de Câmbio Ltda.por quaisquer</p>',15,215);
   doc.fromHTML('<p>perdas, danos, multas ou prejuízos de qualquer natureza relacionados a autuações, processos administrativos,</p>',15,220);
   doc.fromHTML('<p>sancionadores e/ou judiciais que a Guitta Corretora de Câmbio Ltda.venha a sofrer, advindos da classificação </p>',15,225);
   doc.fromHTML('<p>incorreta de operações, tendo a Guitta Corretora de Câmbio Ltda. inclusive, direito de regresso contra ele(a)</p>',15,230);
   doc.fromHTML('<p>cliente;</p>',15, 235);


//part7                     
   
   doc.fromHTML('<p>f. que a obrigação de indenizar ora assumida é extensiva a encargos moratórios, juros, custos judiciais e</p>',15,245);
   doc.fromHTML('<p>honorários advocatícios incorridos em referidas autuações e processos administrativos, sancionadores</p>',15,250);
   doc.fromHTML('<p>e/ou judiciais;</p>',15,255);
   
   

//part8

   doc.fromHTML('<p>g. que a Guitta Corretora de Câmbio Ltda.está autorizada a denunciar ele(a) cliente à lide em caso de processo</p>',15,265);
   doc.fromHTML('<p>administrativo e/ou judicial, nos termos do artigo 125 e seguintes do Código de Processo Civil, para tratar de</p>',15,270);
   doc.fromHTML('<p>perdas ou danos a que alude o presente termo;</p>',15,275);

    doc.addPage();

//part9

    doc.fromHTML('<span>Declara, que:</span>',15, 15);
    doc.fromHTML('<p>h. o(a) cliente se comprometerá, a qualquer momento, prestar todas e quaisquer informações e providenciará</p>',15,25);
    doc.fromHTML('<p>todos e quaisquer documentos assessórios que a Guitta Corretora de Câmbio Ltda, entender necessário;</p>',15,30);
    

//part10

    doc.fromHTML('<p>i. concorda que as operações sejam formalizadas através de demonstrativo de fechamento e que a transferência</p>',15,40);
    doc.fromHTML('<p>de moeda corrente nacional, do(a) cliente para a Guitta Corretora de Câmbio Ltda. ou vice-versa, representará</p>',15,45);
    doc.fromHTML('<p>o aceite do(a) cliente e consentimento com as condições pactuadas, servindo o comprovante de transferência</p>',15,50);
    doc.fromHTML('<p>como comprovante de consentimento com as condições; pactuadas</p>',15,55);
    
    
//part11

    doc.fromHTML('<p>j. o pagamento da Guitta Corretora de Câmbio Ltda.para o(a) cliente, por compra, pela Guitta Corretora de</p>',15,65);
    doc.fromHTML('<p>Câmbio Ltda.de moeda estrangeira para liquidação pronta, deverá ocorrer em até dois dias úteis da</p>',15,70);
    doc.fromHTML('<p>contratação, excluídos os dias não úteis em pelo menos uma das praças das moedas envolvidas;</p>',15,75);
    

//part12


    doc.fromHTML('<p>k. o pagamento do(a) cliente para a Guitta Corretora de Câmbio Ltda. por venda, pela Guitta Corretora</p>',15,85);    
    doc.fromHTML('<p>de Câmbio Ltda. de moeda estrangeira, para liquidação pronta, deverá ocorrer antes da liquidação</p>',15,90);
    doc.fromHTML('<p>financeira da operação no exterior ou entrega da moeda estrangeira no país. O não pagamento</p>',15,95);
    doc.fromHTML('<p>no prazo ora previsto desobriga a Guitta Corretora de Câmbio Ltda. de promover a liquidação financeira</p>',15,100);
    doc.fromHTML('<p>no exterior, ou a e resulta no cancelamento automático da operação;</p>',15,105);
   
    

//part13

    doc.fromHTML('<p>l. no caso de cancelamento da operação por solicitação do(a) cliente, falta de documentação ou falta</p>',15,115);
    doc.fromHTML('<p> de pagamento nos termos do item (k), o(a) cliente compromete-se a ressarcir, à Guitta Corretora de</p>',15,120);
    doc.fromHTML('<p>Câmbio Ltda. eventual variação cambial negativa ocorrida entre a data de fechamento e a data de</p>',15,125);
    doc.fromHTML('<p>cancelamento. O cancelamento também ensejará a cobrança de multa no valor de USD 50,00 (cinquenta </p>',15,130);
    doc.fromHTML('<p>dólares norte-americanos), que poderá ser abonada pela Guitta Corretora de Câmbio Ltda, a exclusivo </p>',15,135);
    doc.fromHTML('<p>critério;</p>',15,140);
    
    
//part14 
    
    doc.fromHTML('<p>m. na hipótese de não ser mais possível cancelar a operação, a falta de pagamento no prazo previsto no item</p>',15,150);
    doc.fromHTML('<p>(k) ensejará a cobrança de multa, adicional à prevista no item (l), à taxa de 0,33% por dia em atraso,</p>',15,155);
    doc.fromHTML('<p>limitada a 20%, mais juros de mora calculados de acordo com a variação da taxa SELIC, calculados do dia</p>',15,160);
    doc.fromHTML('<p>do fechamento do contrato de câmbio até a data do efetivo pagamento.</p>',15,165);
   
    
    
    
//part15   
    doc.fromHTML('<p>Através da assinatura eletrônica nos moldes do art. 10, § 2o, da MP 2.200/01 em vigor no Brasil,confirmo</p>',15,175);
    doc.fromHTML('<p>estar de acordo com o presente termo e reafirmo meu dever de observar e fazer cumprir as obrigações aqui</p>',15,180);
    doc.fromHTML('<p>estabelecidas, tendo em vista que reconheço a autenticidade, integridade e validade jurídica da versão</p>',15,185);
    doc.fromHTML('<p>eletrônica deste termo quando assinado eletronicamente sem certificação digital emitida pela ICP-Brasil</p>',15,190);
    doc.fromHTML('<p>através do sistema de assinatura eletrônica da Plataforma Digital Guitta Corretora de Câmbio Ltda.</p>',15,195);
    doc.fromHTML('<p>Reconheço ainda que posso acessar minha via do termo através desta plataforma no endereço</p>',15,200);
    doc.fromHTML('<p>https://guitta.com.br e gerar versão impressa do mesmo, considerado o fato de já tê-lo recebido por </p>',15,205);
    doc.fromHTML('<p>e-mail. A assinatura eletrônica produzirá efeitos legais a partir da data de assinatura abaixo indicada, </p>',15,210);
    doc.fromHTML('<p>independentemente da data da efetiva assinatura digital pelas partes.</p>',15,215);

    
    
//part17  
    doc.fromHTML('<p>Piter Kubo Chagas. "Assinado eletronicamente doc 111.222.333-00"</p>',15, 265);
   



    doc.save('teste.pdf');

}


//https://products.fileformat.com/pt/pdf/javascript/jspdf/