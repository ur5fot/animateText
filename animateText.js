/**
 * Created by ur5fot on 04.11.15.
 */
// у блоков id animateText1 и animateText2
var animateDuration = 1000; // задержка между обзацами
var animateDurationText = 1000; // время анимации текста

var animateText1 = document.getElementById('animateText1');
var animateText2 = document.getElementById('animateText2');

var animateText1Child = animateText1.querySelectorAll('p');
animateText1.innerHTML = " ";
var animateText2Child = animateText2.querySelectorAll('p');
animateText2.innerHTML = " ";
document.addEventListener("DOMContentLoaded", animateText);


function animateText() {
    var i = 0;
    var text1 = animateText1Child[0].innerHTML;
    var to = text1.length;
    var text2 = animateText2Child[0].innerHTML;
    var to2 = text2.length;
    animate({
        duration: animateDurationText,
        timing: line,
        draw: function (progress) {
            var result = to * progress;
            animateText1.innerHTML = text1.substr(0, Math.ceil(result))
            var result2 = to2 * progress;
            animateText2.innerHTML = text2.substr(0, Math.ceil(result2))
        }
    });
    setTimeout(function inter() {
        if (i < animateText1Child.length) {
            var text1 = animateText1Child[i].innerHTML;
            var to = text1.length;
            var text2 = animateText2Child[i].innerHTML;
            var to2 = text2.length;
            animate({
                duration: animateDurationText,
                timing: line,
                draw: function (progress) {
                    var result = to * progress;
                    animateText1.innerHTML = text1.substr(0, Math.ceil(result))
                    var result2 = to2 * progress;
                    animateText2.innerHTML = text2.substr(0, Math.ceil(result2))
                }
            });
            setTimeout(inter, animateDurationText + animateDuration);
            i++;
        } else if (i >= animateText1Child.length) {
            i = 0;
            setTimeout(inter, 0);

        }
    }, animateDurationText);
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
        var progress = options.timing(timeFraction)

        options.draw(progress);

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }

    });
}