document.addEventListener('DOMContentLoaded', function() {
    // Datos de ejemplo para el gráfico de crecimiento
    const growthData = {
        labels: ['2018', '2019', '2020', '2021', '2022'],
        datasets: [{
            label: 'Empresas de eCommerce en Chile',
            data: [5213, 6213, 8213, 12115, 15915],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    const growthConfig = {
        type: 'line',
        data: growthData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    const growthChart = new Chart(
        document.getElementById('growthChart'),
        growthConfig
    );
});



