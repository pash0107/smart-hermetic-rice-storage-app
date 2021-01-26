$(document).ready(function(){
    $(event.target);

    
    $( "#btnRegister-page" ).click(function() {
	  document.querySelector('#myNavigator').pushPage('signup-page.html', {data: {title: ''}});
	});
});