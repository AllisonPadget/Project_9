/** DAILY TRAFFIC BAR CHART WIDGET **/

var dailyTraffic = document.getElementById("daily-traffic");

var dailyTraffic = new Chart(dailyTraffic, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: '',
            data: [75, 100, 175, 75, 225, 200, 100],
            backgroundColor: [
                '#8f92cb',
                '#7377BF',
                '#7377BF',
                '#7377BF',
                '#7377BF',
                '#7377BF',
                '#8f92cb'
            ],
            hoverBackgroundColor: [
                '#a5a7d5',
                '#a5a7d5',
                '#a5a7d5',
                '#a5a7d5',
                '#a5a7d5',
                '#a5a7d5',
                '#a5a7d5'
            ]
        }]
    },
    options: {
        legend: false //hide legend

    }
});