var data = localStorage.data ?
						JSON.parse(localStorage.data) :
						{ quotes: [] };

var Quote = function(username, quote, rating) {
	this.username = username;
	// this.author = author;
	this.quote = quote;
	this.rating = rating; 
};

var renderQuotes = function() {
	$('#quote-box ').empty();
	//used to empty THE QUOTEBOX

	for (var i=0; i<data.quotes.length; i++) {
		var alphabetize = createNewQuote(data.quotes[i]);
		$('#quote-box').prepend(alphabetize);
	}
};

var createNewQuote = function(quote) {
	var el = $('<div class="quote">');
	// el.text(quote.username + quote.quote + ' (' + quote.rating + ')');
	//this was working
	el.text("Username: " + quote.username + ", " + "\n" + " User Quote: " + quote.quote + ", " + "\n" + "Quote Rating: " + ' (' + quote.rating + ')' + "\n");
	return el;
};

$(document).on('ready', function() {
	
	renderQuotes();
  
  $('#user-form').on('submit', function() {
  	// console.log($(this));

  	var userNameInput = $('#user-form [name="name"]');
  	var userQuoteInput = $('#user-form [name="quote"]');
  	var userRatingInput = $('#user-form [name="rating"]:checked');
  	//added :checked to get jQuery to recognize radio button value, it was defaulting to 1.

  	var userName = userNameInput.val();
  	var userQuote = userQuoteInput.val();
  	var userRating = userRatingInput.val();
  	var quote = new Quote(userName, userQuote, userRating);
  	
  	data.quotes.push(quote);

	  	data.quotes.sort(function(someQuote1, someQuote2){
			var name1 = someQuote1.username.toUpperCase();
			var name2 = someQuote2.username.toUpperCase();
			//ternary selector to alphabetize usernames
			return name1 < name2 ? 1 :
										name1 > name2 ? -1 :
										0;
		});

	 

		

		// $('.sort-quote').on('submit', function(){ 
		// data.quotes.sort(function(q1, q2){
		// var quoteSort1 = q1.quote.toUpperCase();
		// var quoteSort2 = q2.quote.toUpperCase();
		// //ternary selector to alphabetize quotes
		// return q1 < q2 ? 1 :
		// 							q1 > q2 ? -1 :
		// 							0;
		// });

	  localStorage.data = JSON.stringify(data);

	  userNameInput.val('');
	  userQuoteInput.val('');
	  userRatingInput.val('');
	  	// $('#submitted-quotes').text("").delay(3000).slideDown();
	  	// this was working but required a refresh to render

	  renderQuotes();

	  return false;

	});

	$('.sort-quote').on('click', function(){
	  $(this).remove();
	});

	$('.sort-rating').on('click', function(){
		var userNameTxt = $('#user-name').val();
		var userQte = $('#user-quote').val();
		$('#user-quote').val(userNameTxt);
		// console.log(userNameTxt);
		$('#user-name').val(userQte);
		// console.log(userQte);
	})

	$('.sort-time').on('click', function(){
		var textcontest = $('#user-name').val();
		
		var loopFunc = function(param){
			var names = "";
			for (var i=0; i<param; i++){
				names += textcontest + " ";
			}
			$('#user-quote').val(names);
		};
		loopFunc(3);
	});

	//swap #user-name and #user-quote text fields
});

















