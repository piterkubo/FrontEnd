
const ctx = document.getElementById('line-chart');
const meses = ['Jan','Fev','Mar','Abr','Mai', 'Jun', 'Jul','Ago','Set','Out','Nov','Dez'];

let dataAtual = new Date();

new Chart(ctx, {
    type: 'doughnut',
    data: {
    labels: meses,
    datasets: [{
        label: dataAtual.getFullYear(),
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
    }]
    },
    options: {
    scales: {
        y: {
        beginAtZero: true
        }
    }
    
    }
});