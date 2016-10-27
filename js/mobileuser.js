/** MOBILE USER PIE CHART WIDGET **/


var mobileUser = document.getElementById("mobile-users");

var mobileUser = new Chart(mobileUser, {
    type: 'doughnut',
    data: {
        labels: ["Desktop", "Tablets", "Phones"],
        datasets: [{
            label: '',
            data: [64, 18, 18],
            backgroundColor: [
                '#7377BF',
                '#81C98F',
                '#74B1BF'
            ],
            hoverBackgroundColor: [
            	'#7377BF',
                '#81C98F',
                '#74B1BF'
            ]
        }]
    },
    options: {
    	cutoutPercentage: 35
    }
});