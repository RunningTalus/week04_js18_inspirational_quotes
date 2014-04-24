var data = localStorage.data ?
	JSON.parse(localStorage.data) :
	{ quotes: [] };

var Quote = function(username, quote, rating) {
	this.username = name;
	// this.author = author;
	this.quote = quote;
	this.rating = rating; 
};

var renderQuotes = function() {
	$('#quote-box .quote-box').remove();

	for (var i=0; i<data.quotes.length; i++) {
		var topHat = createNewQuote(data.quotes[i]);
		$('#quote-box').append(topHat);
	}
};

var createNewQuote = function(quote) {
	var el = $('<div class="quote">');
	el.text(quote.username + ' (' + quote.rating + ')');
	return el;
};

$(document).on('ready', function() {
	
	renderQuotes();
  
  $('#user-form').on('submit', function() {
  	// console.log($(this));

  	var userNameInput = $('#user-form [name="name"]');
  	var userQuoteInput = $('#user-form [name="quote"]');
  	var userRatingInput = $('#user-form [name="rating"]');

  	var userName = userNameInput.val();
  	var userQuote = userQuoteInput.val();
  	var userRating = userRatingInput.val();

  	var quote = new Quote(userName, userQuote, userRating);
  	
  	data.quotes.push(quote);

  	data.quotes.sort(function(someQuote1, someQuote2){
		var name1 = someQuote1.name();
		var name2 = someQuote2.name();
		return name1 > name2 ? 1 :
									name1 < name2 ? -1 :
									0;
	});

  localStorage.data = JSON.stringify(data);

  userNameInput.val('');
  userQuoteInput.val('');
  userRatingInput.val('');
  	$('#submitted-quotes').text("Testing").delay(3000).slideDown();
  renderQuotes();

  return false;
	});
});

// localStorage.test = 'Hello'
//localStorage stores everything as strings
//localStorage.test = JSON.stringify([1,2,3]);
//logs"[1,2,3]"
//JSON.parse(localStorage.test)
//logs [1,2,3]
//attribute selector from forms '[name="name"]'