function printMeme(text) {
    $('.js-render-text').html(`<p>${text}</p>`);
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


function handleTyping() {
    $('#js-meme-text').on('keyup', event => {
        let text = $('#js-meme-text').val().replace(/[^a-z ]/gi, '');
        text = mockify(text);
        printMeme(text);
    });
}

function main() {
    handleTyping();
}

 $(main);