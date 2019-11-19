function printMeme(text) {
    $('.js-render-text').html(`<pre>${text}</pre>`);
}

function trueOrFalse(max = 2) {
    return Math.floor(Math.random() * Math.floor(max));
}

function mockify(text) {
    text = text.toLowerCase().split('');

    for (let i = 0; i < text.length; i++) {
        if (trueOrFalse()) {
            text[i] = text[i].toUpperCase();
        }
    }
    return text.join('');
}

function resizing(textarea) {
    if ($(textarea).val().length >= 75) {
        console.log($(textarea).val().length);
        $('.box').css('text-align', 'left')
    }
    // Reset field height
    $('.js-sizing').height('inherit');
    $('.js-sizing').height(textarea.scrollHeight + 'px');
}

function grabText() {
    return $('#js-meme-text').val().replace(/[<>]/gi, '');
}

function showResults() {
    if ($('.js-toggle').hasClass('hidden')) {
        $('.js-toggle').removeClass('hidden')
    }
}
function handleTyping() {
    $('#js-meme-text').on('input', event => {
        showResults();
        resizing(event.target);
        let text = grabText();
        printMeme(mockify(text));
    });
}

function main() {
    handleTyping();
}

$(main);