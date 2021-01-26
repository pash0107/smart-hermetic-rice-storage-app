var rootRef = firebase.database().ref().child('readings');
rootRef.on('value', function(snapshot){
	var hum = snapshot.child('humid').val();
	document.getElementById("humidity").innerHTML = hum;
	var ctx = document.getElementById("humidCanvass").getContext('2d');
		var myChart = new Chart(ctx, {
		    type: 'bar',
		    data: {
		        labels: ["Humidity"],
		        datasets: [{
		            label: 'Current Rice Dispenser Humidity',
		            data: [hum],
		            backgroundColor: [
		                '#f3a215'
		            ],
		            borderColor: [
		                '#fff'
		            ],
		            borderWidth: 2
		        }]
		    },
		    options: {
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero:true
		                }
		            }]
		        }
		    }
		});
});