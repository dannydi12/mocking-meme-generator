// Printing Functions

function printMeme(text) {
    $('.js-render-text').html(`<pre>${text}<div class="hidden copy js-copy fadeInUp animated"></div></pre>`);
}

function showResults() {
    if ($('.js-toggle').hasClass('hidden')) {
        $('.js-toggle').removeClass('hidden')
    }
}

// Helper Functions

function trueOrFalse(max = 2) {
    return Math.floor(Math.random() * Math.floor(max));
}

function scrollDown() {
    $('html, body').animate({
        scrollTop: $(".why").offset().top
    }, 1000);
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

function grabText() {
    return $('#js-meme-text').val().replace(/[<>]/gi, '');
}

function copyText(copyMe) {
    const text = document.createElement('textarea');
    text.setAttribute('readonly', '');
    text.style.position = 'absolute';
    text.style.left = '-9999px';
    text.value = copyMe[0].textContent;

    document.body.appendChild(text);
    text.select();
    document.execCommand('copy');
    document.body.removeChild(text);

    console.log()

    copyMe.select();
    document.execCommand("copy");
}

// Display-related Functions

function notify() {
    $('.notification').css({'display': 'block'});
    setTimeout( () => $('.notification').addClass('fadeOutDown'), 3000);
    setTimeout( () => $('.notification').removeClass('fadeOutDown'), 1000);
}

function resizing(textarea) {
    if ($(textarea).val().length >= 75) {
        $('.box').css('text-align', 'left')
    }

    $(textarea).height('inherit');
    $(textarea).height(textarea.scrollHeight + 'px');
}

/* Event Listeners */

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
        $('.js-copy').removeClass('hidden');
    });
    $('.js-toggle').on('mouseleave', event => {
        $('.js-copy').addClass('hidden');
    });
}

function handleCopyClick() {
    $('.js-toggle').on('click', 'pre',  event => {
        copyText($('pre'));
        notify();
    });
}

function handleFooterClick() {
    $('footer').on('click', 'a', () => {
        event.preventDefault();
        $('.why').css('display', 'block');
        setTimeout(() => scrollDown(), 500);
    })
}

function main() {
    handleTyping();
    handleMouse();
    handleCopyClick();
    handleFooterClick();
}

$(main);