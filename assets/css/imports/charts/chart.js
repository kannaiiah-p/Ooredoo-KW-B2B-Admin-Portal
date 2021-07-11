var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Yellow', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 5],
            backgroundColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
        }]
    },
});