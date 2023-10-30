// Função para atualizar o status na página A
function atualizarStatusPJ6(novoStatusPJ6) {
    document.getElementById('status-fechamento-pj').textContent = novoStatusPJ6;
    document.getElementById('status-fechamento-pj').style.fontSize="18px";
    document.getElementById('status-fechamento-pj').style.fontWeight="bold";
    document.getElementById('status-fechamento-pj').style.color="green";
}

// Verifica se há um status armazenado localmente e atualiza a página
var statusArmazenadoPJ6 = localStorage.getItem('status-fechamento-pj');

if (statusArmazenadoPJ6) {
    atualizarStatusPJ6(statusArmazenadoPJ6);
}