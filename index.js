function printMeme(text) {
    $('.js-render-text').html(`<pre>${text}<div class="hidden copy js-copy"></div></pre>`);
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
        $('.box').css('text-align', 'left')
    }

    $(textarea).height('inherit');
    $(textarea).height(textarea.scrollHeight + 'px');
}

function grabText() {
    return $('#js-meme-text').val().replace(/[<>]/gi, '');
}

function showResults() {
    if ($('.js-toggle').hasClass('hidden')) {
        $('.js-toggle').removeClass('hidden')
    }
}

function copyText(text) {
    text.select();
    document.execCommand("copy");
}

function handleTyping() {
    $('#js-meme-text').on('input', event => {
        showResults();
        resizing(event.target);
        let text = grabText();
        printMeme(mockify(text));
    });
}

function handleMouse() {
    $('.js-toggle').on('mouseenter', 'pre',  event => {
        $('.js-copy').removeClass('hidden')
    });
    $('.js-toggle').on('mouseleave', event => {
        $('.js-copy').addClass('hidden')
    });
}

function handleCopyClick() {
    $('.js-toggle').on('click', 'pre',  event => {
        copyText($('pre'));
    });
}

function main() {
    handleTyping();
    handleMouse();
    handleCopyClick();
}

$(main);