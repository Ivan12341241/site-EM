let sliders = document.querySelectorAll('.slider');

for (let i = 0; i < sliders.length; i++) {
    init_slider(sliders[i]);
}

function init_slider(slider) {

    let slide = slider.querySelectorAll('.slide');

    let next = slider.querySelector('.next');

    let i = 0;

    next.addEventListener('click', function() {
        slide[i].classList.remove('block');

        i = (i + 1) % slide.length;

        slide[i].classList.add('block');
    });
}

"use strict";

function r(f) { /in/.test(document.readyState) ? setTimeout('r(' + f + ')', 9) : f() }
r(function() {
    if (!document.getElementsByClassName) {
        var getElementsByClassName = function(node, classname) {
            var a = [];
            var re = new RegExp('(^| )' + classname + '( |$)');
            var els = node.getElementsByTagName("*");
            for (var i = 0, j = els.length; i < j; i++)
                if (re.test(els[i].className)) a.push(els[i]);
            return a;
        }
        var videos = getElementsByClassName(document.body, "youtube");
    } else {
        var videos = document.getElementsByClassName("youtube");
    }

    var nb_videos = videos.length;
    for (var i = 0; i < nb_videos; i++) {
        videos[i].style.backgroundImage = 'url(http://i.ytimg.com/vi/' + videos[i].id + '/sddefault.jpg)';

        var play = document.createElement("div");
        play.setAttribute("class", "play");
        videos[i].appendChild(play);

        videos[i].onclick = function() {
            var iframe = document.createElement("iframe");
            var iframe_url = "https://www.youtube-nocookie.com/embed/" + this.id + "?autoplay=1&autohide=1";
            if (this.getAttribute("data-params")) iframe_url += '&' + this.getAttribute("data-params");
            iframe.setAttribute("src", iframe_url);
            iframe.setAttribute("frameborder", '0');
            iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
            iframe.setAttribute("allowfullscreen", "allowfullscreen");
            iframe.style.width = this.style.width;
            iframe.style.height = this.style.height;

            this.parentNode.replaceChild(iframe, this);
        }
    }
});