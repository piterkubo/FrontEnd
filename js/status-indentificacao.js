// Função para atualizar o status na página A
function atualizarStatus(novoStatus) {
    document.getElementById('status-indentificacao').textContent = novoStatus;
    document.getElementById('status-indentificacao').style.fontSize="18px";
    document.getElementById('status-indentificacao').style.fontWeight="bold";
    document.getElementById('status-indentificacao').style.color="green";
}   

// Verifica se há um status armazenado localmente e atualiza a página
var statusArmazenado = localStorage.getItem('status-indentificacao');

if (statusArmazenado) {
    atualizarStatus(statusArmazenado);
}