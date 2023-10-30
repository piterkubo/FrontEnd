const profissoes = [
    "abastecedor de linha de produção",
    "abastecedor de máquinas",
    "acabador de embalagens",
    "acrilista",
    "acupunturista",
    "aderecista",
    "adesivador",
    "adestrador",
    "administrador",
    "administrativo de obras",
    "advogado",
    "afiador de ferramentas",
    "agente de aeroporto",
    "agente de segurança",
    "agente de serviços",
    "agente de viagens",
    "agente funerário",
    "ajudante geral",
    "ajudante operacional",
    "ajustador mecânico",
    "alfaiate",
    "alinhador",
    "almoxarife",
    "alpinista industrial",
    "amarrador",
    "analista",
    "analista tributário",
    "analista técnico",
    "animador de festas",
    "animador digital",
    "antropólogo",
    "apontador de obras",
    "apontador de produção",
    "aprendiz",
    "apresentador de programa de televisão",
    "aquarista",
    "armador",
    "armazenista",
    "arqueólogo",
    "arquiteto",
    "arquivista",
    "arrematador",
    "arte-finalista",
    "artesão",
    "articulador social",
    "ascensorista",
    "assessor científico",
    "assessor de comunicação",
    "assessor de imprensa",
    "assessor de investimentos",
    "assessor de marketing",
    "assessor jurídico",
    "assistente técnico",
    "assoalhador",
    "atendente",
    "atendimento publicitário",
    "ator",
    "atuário",
    "auditor contábil",
    "auditor",
    "auxiliar técnico",
    "avaliador de imóveis",
    "avaliador de veículos",
    "avaliador físico",
    "azulejista",
    "açougueiro",
    "babá",
    "back office de vendas",
    "back office",
    "balanceiro",
    "balconista",
    "bamburista",
    "barista",
    "barman",
    "berçarista",
    "bibliotecário",
    "bilheteiro",
    "biologista",
    "biomédico",
    "bioquímico",
    "biotecnólogo",
    "biólogo",
    "blaster",
    "blogueiro",
    "bloquista",
    "bombeiro civil",
    "bombeiro industrial",
    "booker",
    "bordador",
    "borracheiro",
    "business partner",
    "cabeleireiro",
    "cabista",
    "caixa de banco",
    "calceteiro",
    "calculista",
    "caldeireiro",
    "camareiro",
    "caracterizador",
    "carpinteiro",
    "cartazista",
    "carteiro",
    "caseiro",
    "cenotécnico",
    "cenógrafo",
    "ceo",
    "chapeiro",
    "chaveiro",
    "chefe de bar",
    "chefe de compras",
    "chefe de confeitaria",
    "chefe de costura",
    "chefe de cozinha",
    "chefe de departamento pessoal",
    "chefe de expedição",
    "chefe de fila",
    "chefe de plantão médico",
    "chefe de produção",
    "chefe de recepção",
    "churrasqueiro",
    "cilindrista",
    "cinegrafista",
    "classificador de grãos",
    "cliente oculto",
    "coach",
    "cobrador de ônibus",
    "codificador de dados",
    "colchoeiro",
    "coletor de amostras",
    "coletor de lixo",
    "colocador de papel de parede",
    "colorista de papel",
    "colorista têxtil",
    "colorista",
    "comissário de avarias",
    "comissário de bordo",
    "comprador de medicamentos",
    "comprador internacional",
    "comprador técnico",
    "comprador",
    "comunicador social",
    "concierge",
    "confeiteiro",
    "conferente de tesouraria",
    "conferente líder",
    "conferente",
    "conselheiro tutelar",
    "consultor técnico",
    "consultor",
    "contabilista",
    "contador gerencial",
    "contador",
    "contato publicitário",
    "conteudista",
    "contra-regra",
    "controlador de custos",
    "controlador de produção",
    "controlador de pátio",
    "controlador de qualidade",
    "controlador de tráfego aéreo",
    "controlador de tráfego",
    "controller",
    "contínuo",
    "coordenador",
    "copeiro",
    "copiador de chapa",
    "coreógrafo",
    "corretor de imóveis",
    "corretor de seguros",
    "cortador de tecidos",
    "cortador de vidro",
    "cortador",
    "costureiro",
    "cozinheiro",
    "crepeiro",
    "cronoanalista",
    "cuidador de crianças",
    "cuidador de idosos",
    "cumim",
    "curador de arte",
    "dançarino",
    "data scientist",
    "dba oracle",
    "dba sql",
    "dba",
    "decorador",
    "dedetizador",
    "degustador",
    "dentista",
    "departamento pessoal",
    "depiladora",
    "dermoconsultor",
    "desenhista",
    "desentupidor",
    "design",
    "despachante aduaneiro",
    "despachante imobiliário",
    "despachante operacional de voo",
    "despachante",
    "diagramador",
    "digitador de laudos",
    "digitador",
    "digitalizador",
    "diligenciador",
    "diretor",
    "divulgador",
    "dj",
    "documentador",
    "doméstica",
    "duteiro",
    "economista",
    "ecólogo",
    "editor de imagens",
    "editor de moda",
    "editor de texto",
    "editor de vídeo",
    "educador ambiental",
    "educador social",
    "eletricista",
    "eletricista",
    "eletromecânico de manutenção",
    "eletromecânico",
    "eletrotécnico",
    "embalador",
    "embriologista",
    "emissor de ctrc",
    "emissor de passagens",
    "empacotador",
    "encadernador",
    "encanador industrial",
    "encanador",
    "encapsulador",
    "encarregado",
    "enfermeiro",
    "enfestador",
    "engenheiro",
    "entregador",
    "ergonomista",
    "escrevente",
    "escriturário hospitalar",
    "escriturário",
    "estampador",
    "estatístico trainee",
    "estatístico",
    "esteticista",
    "estilista",
    "estofador",
    "estoquista",
    "estágio",
    "etiquetador",
    "executivo de contas",
    "executivo de vendas",
    "extrusor",
    "farmacêutico bioquímico",
    "farmacêutico homeopata",
    "farmacêutico hospitalar",
    "farmacêutico industrial",
    "farmacêutico trainee",
    "farmacêutico",
    "faturista hospitalar",
    "faturista",
    "ferramenteiro de moldes plásticos",
    "ferramenteiro",
    "ferreiro",
    "figurinista",
    "fiscal de caixa",
    "fiscal de campo",
    "fiscal de loja",
    "fiscal de obras",
    "fiscal de prevenção de perdas",
    "fiscal de tráfego",
    "fisioterapeuta acupunturista",
    "fisioterapeuta dermato funcional",
    "fisioterapeuta do trabalho",
    "fisioterapeuta esportivo",
    "fisioterapeuta home care",
    "fisioterapeuta hospitalar",
    "fisioterapeuta neurofuncional",
    "fisioterapeuta oncofuncional",
    "fisioterapeuta respiratório",
    "fisioterapeuta rpg",
    "fisioterapeuta vendedor",
    "fisioterapeuta",
    "florista",
    "fonoaudiólogo",
    "forneiro",
    "fotogravador",
    "fotógrafo",
    "fracionador",
    "frentista",
    "fresador cnc",
    "fresador",
    "fundidor de metais",
    "funileiro de veículos",
    "funileiro",
    "físico",
    "galvanizador",
    "garantista de veículos",
    "garantista",
    "garde manger",
    "garçom",
    "gastrônomo",
    "gemólogo",
    "geofísico",
    "gerente",
    "gerontólogo",
    "gesseiro",
    "gestor ambiental",
    "gestor portuário",
    "geógrafo",
    "geólogo",
    "governanta",
    "greidista",
    "guia de turismo",
    "historiador",
    "ilustrador",
    "impermeabilizador",
    "implantador de sistemas",
    "impressor de rotogravura",
    "impressor digital",
    "impressor flexográfico",
    "impressor off-set",
    "impressor serigráfico",
    "impressor tampográfico",
    "impressor",
    "inspetor",
    "instalador de acessórios",
    "instalador de alarmes",
    "instalador de ar condicionado",
    "instalador de comunicação visual",
    "instalador de equipamentos eletrônicos",
    "instalador de insulfilm",
    "instalador de rastreador veicular",
    "instalador de telecomunicações",
    "instalador de tv a cabo",
    "instalador de vidros automotivos",
    "instalador de vidros",
    "instalador",
    "instrumentador cirúrgico",
    "instrumentista",
    "instrutor",
    "intérprete de libras",
    "intérprete",
    "jardineiro",
    "jatista",
    "jornaleiro",
    "jornalista",
    "laboratorista de concreto",
    "laboratorista de solos",
    "laboratorista fotográfico",
    "lactarista",
    "laminador",
    "lancheiro",
    "lapidador de gemas",
    "lapidador de vidros",
    "laqueador",
    "lavadeiro",
    "lavador de veículos",
    "lavador",
    "layoutista",
    "leiturista",
    "letrista",
    "limpador de vidros",
    "limpador",
    "lingotador",
    "lixador",
    "locutor",
    "lubrificador",
    "lustrador de móveis",
    "líder comercial",
    "magarefe",
    "mandrilhador",
    "manicure e pedicure",
    "manipulador de cosméticos",
    "manipulador de farmácia",
    "manobrista",
    "maqueiro",
    "maquetista",
    "maquiador",
    "maquinista de trem",
    "marceneiro",
    "marinheiro",
    "marmorista",
    "marteleteiro",
    "masseiro",
    "massoterapeuta",
    "matemático",
    "maçariqueiro",
    "maître",
    "mecânico",
    "medidor de obras",
    "mensageiro de hotel",
    "mensageiro",
    "merendeira",
    "mestre cervejeiro",
    "mestre de cabotagem",
    "mestre de obras",
    "meteorologista",
    "metrologista",
    "microbiologista",
    "modelista",
    "modelo de prova",
    "modelo",
    "moldador",
    "moldureiro",
    "moleiro",
    "monitor de alunos",
    "monitor de informática",
    "montador",
    "mordomo",
    "motoboy",
    "motorista",
    "museólogo",
    "musicoterapeuta",
    "mãe social",
    "médico",
    "músico",
    "naturólogo",
    "neuropsicólogo",
    "nivelador",
    "nutricionista clínico",
    "nutricionista comercial",
    "nutricionista de produção",
    "nutricionista de qualidade",
    "nutricionista do esporte",
    "nutricionista",
    "oceanógrafo",
    "office-boy",
    "oficial de manutenção predial",
    "oficial de manutenção",
    "oficial de redes",
    "oficial de refrigeração",
    "oficial eletricista",
    "oficial mecânico",
    "oficial serralheiro",
    "operador",
    "orientador educacional",
    "orientador sócio educativo",
    "orçamentista civil",
    "orçamentista",
    "ourives",
    "padeiro",
    "paisagista",
    "palestrante",
    "panfleteiro",
    "passador",
    "pedagogo empresarial",
    "pedagogo",
    "pedreiro",
    "peixeiro",
    "perfumista",
    "perito judicial",
    "personal stylist",
    "personal trainer",
    "pesador",
    "pesquisador de mercado",
    "pesquisador",
    "piloteiro",
    "piloto agrícola",
    "piloto de avião",
    "piloto de helicóptero",
    "piloto de testes",
    "pintor automotivo",
    "pintor de estruturas metálicas",
    "pintor de móveis",
    "pintor de obras",
    "pintor eletrostático",
    "pintor",
    "pizzaiolo",
    "planejador de produção",
    "planejador de projetos",
    "podólogo",
    "polidor de metais",
    "polidor de veículos",
    "polidor",
    "porteiro",
    "prensista",
    "preparador de autos",
    "preparador de cnc",
    "preparador de máquina injetora",
    "preparador de máquinas",
    "preparador de pintura",
    "preparador de tintas",
    "preparador de torno",
    "preparador físico",
    "processista",
    "produtor artístico",
    "produtor cultural",
    "produtor de casting",
    "produtor de conteúdo",
    "produtor de eventos",
    "produtor de moda",
    "produtor de televisão",
    "produtor de vídeo",
    "produtor editorial",
    "produtor gráfico",
    "produtor musical",
    "professor",
    "programador",
    "projetista 3d",
    "projetista",
    "promotor de crédito",
    "promotor de eventos",
    "promotor de financiamento",
    "promotor de merchandising",
    "promotor de vendas",
    "promotor técnico",
    "propagandista",
    "protético",
    "psicomotricista",
    "psicopedagogo",
    "psicólogo clínico",
    "psicólogo do trânsito",
    "psicólogo escolar",
    "psicólogo hospitalar",
    "psicólogo organizacional",
    "psicólogo social",
    "psicólogo",
    "publicitário",
    "químico industrial",
    "químico responsável",
    "químico",
    "radialista",
    "rasteleiro",
    "rebarbador de metais",
    "rebobinador",
    "recebedor",
    "recepcionista de hotel",
    "recepcionista hospitalar",
    "recepcionista",
    "recreador",
    "recuperador de crédito",
    "redator publicitário",
    "redator web",
    "redator",
    "regulador de sinistros",
    "relações públicas",
    "relojoeiro",
    "repositor de perecíveis",
    "repositor",
    "representante comercial",
    "repórter",
    "retificador",
    "revisor de tecidos",
    "revisor de texto",
    "rigger",
    "robotista",
    "roteirista",
    "roteirizador",
    "saladeiro",
    "salgadeiro",
    "salva vidas",
    "sapateiro",
    "scouter",
    "scrum master",
    "secretária comercial",
    "secretária escolar",
    "secretária executiva",
    "secretária financeira",
    "secretária",
    "segurança patrimonial",
    "segurança",
    "segurança",
    "selecionador",
    "separador de mercadorias",
    "serralheiro",
    "servente de obras",
    "sinaleiro",
    "sociólogo",
    "socorrista",
    "soldador montador",
    "soldador",
    "sommelier",
    "sondador",
    "sonoplasta",
    "sorveteiro",
    "steward",
    "superintendente comercial",
    "superintendente de operações",
    "supervisor administrativo",
    "supervisor",
    "supervisor tecnico",
    "suporte técnico",
    "sushiman",
    "síndico",
    "tapeceiro de veículos",
    "tapeceiro",
    "tecelão",
    "telefonista recepcionista",
    "telefonista",
    "telhadista",
    "terapeuta ocupacional",
    "tesoureiro",
    "tintureiro",
    "topógrafo",
    "torneiro mecânico",
    "tosador",
    "trader",
    "tradutor",
    "trainee",
    "tratador de piscina",
    "tratorista",
    "traçador de caldeiraria",
    "trefilador",
    "trocador de moldes",
    "turismólogo",
    "técnico",
    "vendendor",
    "veterinário patologista",
    "veterinário",
    "videografista",
    "vidraceiro",
    "vigia",
    "vigilante",
    "visitador de navios",
    "vistoriador de imóveis",
    "vistoriador de veículos",
    "visual merchandiser",
    "vitrinista",
    "web designer",
    "web developer",
    "webdesign",
    "webmaster",
    "zelador",
    "zootecnista"
		
	  
	
	]



///Tratando o arquivo json e filtrando para o select do html

const pf_profissao = document.getElementById("pf_profissao")

window.addEventListener('load', async()=>{   
    
    const options = document.createElement("optgroup");
    options.setAttribute('label','Selecione a Profissão');
    profissoes.map((profissao)=>{
        options.innerHTML += '<option>'+[profissao]+'</option>'
    })            
        

    pf_profissao.append(options);

});


const pj_profissao = document.getElementById("pj_profissao")

window.addEventListener('load', async()=>{   
    
    const options = document.createElement("optgroup");
    options.setAttribute('label','Selecione a Profissão');
    profissoes.map((profissao)=>{
        options.innerHTML += '<option>'+[profissao]+' </option>'
    })            
        

    pj_profissao.append(options);

});



