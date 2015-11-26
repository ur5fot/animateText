/**
 * Created by ur5fot on 04.11.15.
 */
document.addEventListener("DOMContentLoaded", function () {
    // у блоков id animateText1 и animateText2
    var animateDuration = 2000, // задержка между обзацами
        animateDurationText = 20000, // время анимации текста
        startDuration = 1000, // задержка перед стартом

        animateText1 = document.getElementById('animateText1'),
        animateText2 = document.getElementById('animateText2');

    if (animateText1) var animateText1Child = animateText1.querySelectorAll('p');
    if (animateText2)  var animateText2Child = animateText2.querySelectorAll('p');

    if (animateText1) animateText1.innerHTML = "";
    if (animateText2) animateText2.innerHTML = "";

    setTimeout(animateText, startDuration);
    var i = 0;

    function animateText() {

        if (animateText1) {
            if (i < animateText1Child.length) {
                if (animateText1) var text1 = animateText1Child[i].innerHTML;
                if (animateText1) var to = text1.length;
                if (animateText2) var text2 = animateText2Child[i].innerHTML;
                if (animateText2) var to2 = text2.length;
                animate({
                    duration: animateDurationText,
                    timing: line,
                    draw: function (progress) {
                        if (animateText1) var result = to * progress;
                        if (animateText1) animateText1.innerHTML = text1.substr(0, Math.ceil(result));
                        if (animateText2) var result2 = to2 * progress;
                        if (animateText2) animateText2.innerHTML = text2.substr(0, Math.ceil(result2))
                    }
                });
                i++;
                setTimeout(animateText, animateDurationText + animateDuration);
            } else if (i >= animateText1Child.length) {
                i = 0;
                setTimeout(animateText, animateDuration);
            }
        }
    }

    function line(timeFraction) {
        return timeFraction;
    }

    function animate(options) {
        var start = performance.now();
        requestAnimationFrame(function animate(time) {
            // timeFraction от 0 до 1
            var timeFraction = (time - start) / options.duration;
            if (timeFraction > 1) timeFraction = 1;
            // текущее состояние анимации
            var progress = options.timing(timeFraction);
            options.draw(progress);
            if (timeFraction < 1) {
                requestAnimationFrame(animate);
            }
        });
    }
});



