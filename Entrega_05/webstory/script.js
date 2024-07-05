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
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Comercio Electrónico en Chile 2022</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>

document.addEventListener('DOMContentLoaded', function() {
    // Gráfico de estado actual del comercio electrónico en Chile
    const growthCtx = document.getElementById('growthChart').getContext('2d');
    const growthChart = new Chart(growthCtx, {
        type: 'bar',
        data: {
            labels: ['Chilenos que compran en línea', 'Valor de eCommerce en 2021', 'Crecimiento interanual'],
            datasets: [{
                label: 'Estadísticas',
                data: [8, 16, 19],
                backgroundColor: ['#4CAF50', '#FF9800', '#F44336'],
                borderColor: ['#388E3C', '#F57C00', '#D32F2F'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Gráfico de perfil de los compradores en línea chilenos
    const buyerProfileCtx = document.getElementById('buyerProfileChart').getContext('2d');
    const buyerProfileChart = new Chart(buyerProfileCtx, {
        type: 'pie',
        data: {
            labels: ['Mujeres', 'Hombres', 'Edades 26-40', 'Edades 18-25'],
            datasets: [{
                label: 'Perfil del Comprador',
                data: [62, 38, 40, 19],
                backgroundColor: ['#3F51B5', '#FFEB3B', '#4CAF50', '#FF5722'],
                borderColor: ['#303F9F', '#FBC02D', '#388E3C', '#E64A19'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Gráfico de métodos de pago más usados
    const paymentMethodsCtx = document.getElementById('paymentMethodsChart').getContext('2d');
    const paymentMethodsChart = new Chart(paymentMethodsCtx, {
        type: 'bar',
        data: {
            labels: ['Tarjeta de Crédito', 'Tarjeta de Débito', 'Monederos Electrónicos', 'Transferencias Bancarias', 'Pagos en Efectivo'],
            datasets: [{
                label: 'Porcentaje de Uso',
                data: [57, 21, 7, 3, 3],
                backgroundColor: ['#FFC107', '#8BC34A', '#00BCD4', '#9C27B0', '#FF5722'],
                borderColor: ['#FFA000', '#689F38', '#00838F', '#7B1FA2', '#E64A19'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Gráfico de productos más comprados en línea
    const productCategoriesCtx = document.getElementById('productCategoriesChart').getContext('2d');
    const productCategoriesChart = new Chart(productCategoriesCtx, {
        type: 'horizontalBar',
        data: {
            labels

            document.addEventListener('DOMContentLoaded', function() {
                // Gráfico interactivo para "8 de cada 10 chilenos compra online"
                const chileansBuyOnlineCtx = document.getElementById('chileansBuyOnlineChart').getContext('2d');
                const chileansBuyOnlineChart = new Chart(chileansBuyOnlineCtx, {
                    type: 'bar',
                    data: {
                        labels: ['Chilenos que compran online', 'Chilenos que no compran online'],
                        datasets: [{
                            label: 'Porcentaje',
                            data: [80, 20],
                            backgroundColor: ['#FF0000', '#00FF00'], // Rojo y verde
                            borderColor: ['#FF0000', '#00FF00'],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        },
                        responsive: true,
                        maintainAspectRatio: false
                    }
                });
            
                // Gráfico interactivo para "Volumen del eCommerce en Chile en 2021"
                const ecommerceVolumeCtx = document.getElementById('ecommerceVolumeChart').getContext('2d');
                const ecommerceVolumeChart = new Chart(ecommerceVolumeCtx, {
                    type: 'pie',
                    data: {
                        labels: ['Volumen del eCommerce en 2021'],
                        datasets: [{
                            label: 'Volumen ($16 billones)',
                            data: [16, 84], // 16% para ilustrar el volumen
                            backgroundColor: ['#FF0000', '#CCCCCC'], // Rojo y gris claro
                            borderColor: ['#FF0000', '#CCCCCC'],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false
                    }
                });
            
                // Gráfico interactivo para "62% de los compradores online son personas entre 26 y 55 años"
                const onlineBuyersCtx = document.getElementById('onlineBuyersChart').getContext('2d');
                const onlineBuyersChart = new Chart(onlineBuyersCtx, {
                    type: 'doughnut',
                    data: {
                        labels: ['26-55 años', 'Otras edades'],
                        datasets: [{
                            label: 'Porcentaje',
                            data: [62, 38],
                            backgroundColor: ['#FF0000', '#0000FF'], // Rojo y azul
                            borderColor: ['#FF0000', '#0000FF'],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false
                    }
                });
            });

            

