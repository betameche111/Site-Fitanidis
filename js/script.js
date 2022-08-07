function fadeIn(element, duration = 600) {
    element.style.display = '';
    element.style.opacity = 0;
    var last = +new Date();
    var tick = function () {
        element.style.opacity = +element.style.opacity + (new Date() - last) / duration;
        last = +new Date();
        if (+element.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        }
    };
    tick();
}

new fullpage('#fullpage', {
    afterLoad: function (origin, destination, direction, trigger) {
        if (destination.index == 2) {
            setTimeout(function () {
                fadeIn(document.getElementById("mais_jusqu-ou_iront_ils-overlay"), 1500);
            }, 3000);
        }
        if (origin.index == 2) {
            document.getElementById("mais_jusqu-ou_iront_ils-overlay").style.display = 'none';
        }
    },
});



new Swiper(".lalaland_swiper", {
    effect: "cards",
    grabCursor: true,
});