document.addEventListener('init', function(event)
{
  var page = event.target;

  if (page.id === 'landing-page')
  {
    /*page.querySelector('#btnRegister-page').onclick = function()
    {
      document.querySelector('#myNavigator').pushPage('signup-page.html', {data: {title: 'REGISTRATION'}});
    };*/
    page.querySelector('#btnLogIn-page').onclick = function()
    {
      document.querySelector('#myNavigator').pushPage('logIn-page.html', {data: {title: 'LOG IN'}});
    };
  } 
  else if (page.id === 'signup-page')
  {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    //Back Button
    page.querySelector('#btnSignUpBack-page').onclick = function()
    {
      document.querySelector('#myNavigator').pushPage('landing-template.html', {data: {title: ''}});
    };
  }

  else if (page.id === 'logIn-page')
  {
  	page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  	page.querySelector('#btnLogInBack-page').onclick = function()
    {
      document.querySelector('#myNavigator').pushPage('landing-template.html', {data: {title: ''}});
    };
    page.querySelector("#btnLogInValidate").onclick = function()
    {
    	var username = document.getElementById('username').value;
  		var password = document.getElementById('password').value;

  		if (username === 'smartbigasan' && password === 'raspberry')
  		{
  		    ons.notification.alert('Log In Successfully');
  		    document.querySelector('#myNavigator').pushPage('welcome-template.html', {data: {title: 'SMART BIGASAN'}});
  		}
  		else
  		{
  		    ons.notification.alert('Incorrect username or password.');

  		}
    }
  }
  else if (page.id === 'welcome-page')
  {
  	page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  	page.querySelector('#btnLogOut').onclick = function()
    {
    	 document.querySelector('#myNavigator').pushPage('logIn-page.html', {data: {title: ''}});
       document.location.reload(true)
    }
  }
});

var prev = function() {
  var carousel = document.getElementById('carousel');
  carousel.prev();
};

var next = function() {
  var carousel = document.getElementById('carousel');
  carousel.next();
};

ons.ready(function() {
  var carousel = document.addEventListener('postchange', function(event) {
  });
});

