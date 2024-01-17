// Função para atualizar o status na página A
function atualizarStatus5(novoStatus5) {
    document.getElementById('status-profissao').textContent = novoStatus5;
    document.getElementById('status-profissao').style.fontSize="18px";
    document.getElementById('status-profissao').style.fontWeight="bold";
    document.getElementById('status-profissao').style.color="green";
}

// Verifica se há um status armazenado localmente e atualiza a página
var statusArmazenado5 = localStorage.getItem('status-profissao');

if (statusArmazenado5) {
    atualizarStatus5(statusArmazenado5);
}