require('./styles/style.scss');
require('style!css!font-awesome/css/font-awesome.min.css');

function newQuote() {
  var api = "https://got-quotes.herokuapp.com/quotes?";

  $.getJSON(api).then(function(data) {
    var quote = data.quote;
    var character = "- " + data.character;
    var $tweet = $(".tweetQuote");
    // Display quote;
    $("#quote").html(quote);
    $("#character").html(character);

    // Tweet truncated quote
    if (quote.length + character.length > 140) {
      var truncateQuote = quote.slice(0, 136 - character.length) + "...";
      $tweet.attr("href", "https://twitter.com/intent/tweet?text=" + truncateQuote + "%0D%0A" + character);
    } else {
      $tweet.attr("href", "https://twitter.com/intent/tweet?text=" + quote + "%0D%0A" + character);
    }
  });
};

newQuote();

$(".quoteBtn").on("click", function() {
  newQuote();
});