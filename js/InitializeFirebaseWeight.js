var rootRef = firebase.database().ref().child('readings');
rootRef.on('value', function(snapshot){
	var weight = snapshot.child('weight').val();
	document.getElementById("weight").innerHTML = weight;
	var ctx = document.getElementById("weightCanvass").getContext('2d');
		var myChart = new Chart(ctx, {
		    type: 'bar',
		    data: {
		        labels: ["Weight"],
		        datasets: [{
		            label: 'Current Rice Dispenser Weight',
		            data: [weight],
		            backgroundColor: [
		                '#7e57c2'
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