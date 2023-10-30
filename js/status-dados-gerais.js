// Função para atualizar o status na página A
function atualizarStatus2(novoStatus2) {
    document.getElementById('status-dados-gerais').textContent = novoStatus2;
    document.getElementById('status-dados-gerais').style.fontSize="18px";
    document.getElementById('status-dados-gerais').style.fontWeight="bold";
    document.getElementById('status-dados-gerais').style.color="green";
}

// Verifica se há um status armazenado localmente e atualiza a página
var statusArmazenado2 = localStorage.getItem('status-dados-gerais');

if (statusArmazenado2) {
    atualizarStatus2(statusArmazenado2);
}