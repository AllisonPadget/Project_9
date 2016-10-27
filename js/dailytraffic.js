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
                '#E2E3F6'
            ],
            borderColor: [
                '#7377BF'
            ],
            borderWidth: 1
        }]
    },
    options: {

    }
});