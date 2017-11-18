$(document).ready(function () {
    var quote;
    var author;
    function getNewQuotes() {
        $.ajax({
            url: 'https://api.forismatic.com/api/1.0/',
            jsonp: 'jsonp',
            dataType:'jsonp',
            data: {
                method: 'getQuote',
                lang: 'en',
                format: 'jsonp'
            },
            success: function (response) {
                quote = response.quoteText;
                author = response.quoteAuthor;
                $('#quote').text(quote);
                $('#author').text(author);
                if (author) {
                    $('#author').text('Said By: ' + author)
                } else {
                    $('#author').text('- Unkown')
                }
            }
        });
    }
    getNewQuotes();
    $('.change-quote').on('click', function (event) {
        event.preventDefault();
        getNewQuotes();
    });
    $('.share-quote').on('click', function (event) {
        event.preventDefault();
        window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + ' -- ' + author));
    });
});//End of jQuery