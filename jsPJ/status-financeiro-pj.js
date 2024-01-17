// Função para atualizar o status na página A
function atualizarStatusPJ5(novoStatusPJ5) {
    document.getElementById('status-financeiro-pj').textContent = novoStatusPJ5;
    document.getElementById('status-financeiro-pj').style.fontSize="18px";
    document.getElementById('status-financeiro-pj').style.fontWeight="bold";
    document.getElementById('status-financeiro-pj').style.color="green";
}   

// Verifica se há um status armazenado localmente e atualiza a página
var statusArmazenadoPJ5 = localStorage.getItem('status-financeiro-pj');

if (statusArmazenadoPJ5) {
    atualizarStatusPJ5(statusArmazenadoPJ5);
}