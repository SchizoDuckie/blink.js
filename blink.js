var userAgentMatch = navigator.userAgent.match(/Firefox\/(.*)$/),
    firefoxVersion,
    blinkVisible = true,
    blinkStart,
    blinkNext;

if (userAgentMatch && userAgentMatch.length > 1) {
    firefoxVersion = userAgentMatch[1];
}

if (userAgentMatch && userAgentMatch.length > 1 && firefoxVersion >= 23) {
    blinkTags = function () {

        var blinkElements = document.getElementsByTagName('blink');

        for (var i = 0; i < blinkElements.length; i++) {
            blinkElements[i].style.visibility = blinkElements[i].style.visibility == 'visible' ? 'hidden' : 'visible';
        }
        setTimeout(blinkTags, 500);
    };

    window.addEventListener('load',blinkTags,false);
}
