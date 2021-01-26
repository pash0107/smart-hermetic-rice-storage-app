var config = {
  apiKey: "AIzaSyBFa1JvouEnR_zUXW4WxFFMJsLQJ52m9fE",
  authDomain: "smart-bigasan.firebaseapp.com",
  databaseURL: "https://smart-bigasan.firebaseio.com",
  projectId: "smart-bigasan",
  storageBucket: "smart-bigasan.appspot.com",
  messagingSenderId: "511590282454"
};
firebase.initializeApp(config);



var rootRef = firebase.database().ref().child('readings');
rootRef.on('value', function(snapshot){
	var temp = snapshot.child('temp').val();
	var ctx = document.getElementById("tempCanvass").getContext('2d');
	var myChart = new Chart(ctx, {
	    type: 'bar',
	    data: {
	        labels: ["Temperature"],
	        datasets: [{
	            label: 'Current Rice Dispenser Temperature',
	            data: [temp],
	            backgroundColor: [
	                '#659d2a'
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
	document.getElementById("temperature").innerHTML = temp;
});
