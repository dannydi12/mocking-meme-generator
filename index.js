function printMeme(text) {
    $('.js-render-text').val(text);
}

function trueOrFalse(max = 2) {
    return Math.floor(Math.random() * Math.floor(max));
}

function mockify(text) {
    text = text.toLowerCase().split('');

    for(let i = 0; i < text.length; i++) {
        if(trueOrFalse()) {
            text[i] = text[i].toUpperCase();
        }
    }
    return text.join('');
}

function grabText() {
    return $('#js-meme-text').val().replace(/[<>]/gi, '');
}

function handleTyping() {
    $('#js-meme-text').on('keyup', event => {
        let text = grabText();
        printMeme(mockify(text));
    });
}

function main() {
    handleTyping();
    mockify(grabText());
}

 $(main);