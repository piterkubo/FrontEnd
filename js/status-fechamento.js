// Função para atualizar o status na página A
function atualizarStatus6(novoStatus6) {
    document.getElementById('status-fechamento').textContent = novoStatus6;
    document.getElementById('status-fechamento').style.fontSize="18px";
    document.getElementById('status-fechamento').style.fontWeight="bold";
    document.getElementById('status-fechamento').style.color="green";
}

// Verifica se há um status armazenado localmente e atualiza a página
var statusArmazenado6 = localStorage.getItem('status-fechamento');

if (statusArmazenado6) {
    atualizarStatus6(statusArmazenado6);
}