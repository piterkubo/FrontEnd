// Função para atualizar o status na página A
function atualizarStatusPJ4(novoStatusPJ4) {
    document.getElementById('status-representantes-pj').textContent = novoStatusPJ4;
    document.getElementById('status-representantes-pj').style.fontSize="18px";
    document.getElementById('status-representantes-pj').style.fontWeight="bold";
    document.getElementById('status-representantes-pj').style.color="green";
}

// Verifica se há um status armazenado localmente e atualiza a página
var statusArmazenadoPJ4 = localStorage.getItem('status-representantes-pj');

if (statusArmazenadoPJ4) {
    atualizarStatusPJ4(statusArmazenadoPJ4);
}