// Função para atualizar o status na página A
function atualizarStatus4(novoStatus4) {
    document.getElementById('status-banco').textContent = novoStatus4;
    document.getElementById('status-banco').style.fontSize="18px";
    document.getElementById('status-banco').style.fontWeight="bold";
    document.getElementById('status-banco').style.color="green";
}

// Verifica se há um status armazenado localmente e atualiza a página
var statusArmazenado4 = localStorage.getItem('status-banco');

if (statusArmazenado4) {
    atualizarStatus4(statusArmazenado4);
}