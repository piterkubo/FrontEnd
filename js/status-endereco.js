// Função para atualizar o status na página A
function atualizarStatus3(novoStatus3) {
    document.getElementById('status-endereco').textContent = novoStatus3;
    document.getElementById('status-endereco').style.fontSize="18px";
    document.getElementById('status-endereco').style.fontWeight="bold";
    document.getElementById('status-endereco').style.color="green";
}

// Verifica se há um status armazenado localmente e atualiza a página
var statusArmazenado3 = localStorage.getItem('status-endereco');

if (statusArmazenado3) {
    atualizarStatus3(statusArmazenado3);
}