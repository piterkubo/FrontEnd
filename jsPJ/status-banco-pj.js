// Função para atualizar o status na página A
function atualizarStatusPJ3(novoStatusPJ3) {
    document.getElementById('status-banco-pj').textContent = novoStatusPJ3;
    document.getElementById('status-banco-pj').textContent = novoStatusPJ3;
    document.getElementById('status-banco-pj').style.fontSize="18px";
    document.getElementById('status-banco-pj').style.fontWeight="bold";
    document.getElementById('status-banco-pj').style.color="green";
}

// Verifica se há um status armazenado localmente e atualiza a página
var statusArmazenadoPJ3 = localStorage.getItem('status-banco-pj');

if (statusArmazenadoPJ3) {
    atualizarStatusPJ3(statusArmazenadoPJ3);
}