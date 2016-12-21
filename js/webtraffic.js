/** WEB TRAFFIC WIDGET **/ 

/* Display number of visits along the y axis and
date/time on the x axis. You will need to make up this data -- you can see the
mockup for sample data.*/

var webTraffic = document.getElementById("web-traffic");

var webTraffic = new Chart(webTraffic, {
    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            label: '',
            data: [0, 750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2200, 2000],
            backgroundColor: [
                'rgba(226, 227, 246, 0.3)'
            ],
            borderColor: [
                '#7377BF'
            ],
            borderWidth: 1,
            lineTension: 0

        }]
    },
    options: {
        legend: { 
            display:false //hide legend
        },
        maintainAspectRatio: false

    }
});


