
var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Abuja', 'Lagos', 'Kaduna', 'Green','Kaduna', 'Green', 'Purple', 'DOm', 'Rivers', 'Lagos',],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3, 4, 8, 5, 20],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(245, 229, 27, 0.2)',
                'rgba(200, 247, 197, 0.2)',
                'rgba(145, 180, 150, 0.2)',
                'rgba(135, 211, 124, 0.2)',
               
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(245, 229, 27, 1)',
                'rgba(245, 229, 27, 1)',
                'rgba(200, 247, 197, 1)',
                'rgba(145, 180, 150, 1)',
                'rgb(60,179,113)',
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});