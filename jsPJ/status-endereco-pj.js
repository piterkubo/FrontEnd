// Função para atualizar o status na página A
function atualizarStatusPJ2(novoStatusPJ2) {
    document.getElementById('status-endereco-pj').textContent = novoStatusPJ2;
    document.getElementById('status-endereco-pj').style.fontSize="18px";
    document.getElementById('status-endereco-pj').style.fontWeight="bold";
    document.getElementById('status-endereco-pj').style.color="green";
}

// Verifica se há um status armazenado localmente e atualiza a página
var statusArmazenadoPJ2 = localStorage.getItem('status-endereco-pj');

if (statusArmazenadoPJ2) {
    atualizarStatusPJ2(statusArmazenadoPJ2);
}