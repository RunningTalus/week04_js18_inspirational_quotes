// var data = JSON.parse(localStorage.data);

$(document).on('ready', function() {

  $('#user-form').on('submit', function() {
  	// console.log($(this));
  	var usernameInput=$('#user-form [name="username"]');
  	var userquoteInput=$('#user-form [name="userquote"]');

  	$('.user-quote').append(this);
  });
});

// localStorage.test = 'Hello'
//localStorage stores everything as strings
//localStorage.test = JSON.stringify([1,2,3]);
//logs"[1,2,3]"
//JSON.parse(localStorage.test)
//logs [1,2,3]
//attribute selector from forms '[name="name"]'