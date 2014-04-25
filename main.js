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
	//used to empty localStorage

	for (var i=0; i<data.quotes.length; i++) {
		var alphabetize = createNewQuote(data.quotes[i]);
		$('#quote-box').prepend(alphabetize);
	}
};

var createNewQuote = function(quote) {
	var el = $('<div class="quote">');
	el.text(quote.username + quote.quote + ' (' + quote.rating + ')');
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
			return name1 > name2 ? 1 :
										name1 < name2 ? -1 :
										0;
		});

  localStorage.data = JSON.stringify(data);

  userNameInput.val('');
  userQuoteInput.val('');
  userRatingInput.val('');
  	// $('#submitted-quotes').text("").delay(3000).slideDown();
  	// this was working but required a refresh to render

  renderQuotes();

  return false;

	});
});