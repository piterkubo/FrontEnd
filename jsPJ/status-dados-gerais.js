// Função para atualizar o status na página A
function atualizarStatusPJ1(novoStatusPJ1) {
    document.getElementById('status-geral-pj').textContent = novoStatusPJ1;
    document.getElementById('status-geral-pj').style.fontSize="18px";
    document.getElementById('status-geral-pj').style.fontWeight="bold";
    document.getElementById('status-geral-pj').style.color="green";
}

// Verifica se há um status armazenado localmente e atualiza a página
var statusArmazenadoPJ1 = localStorage.getItem('status-geral-pj');

if (statusArmazenadoPJ1) {
    atualizarStatusPJ1(statusArmazenadoPJ1);
}