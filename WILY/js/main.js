'use strict'

{
    // ----------hanburgermenu------------

    window.onload = function () {
        var nav = document.getElementById('nav-wrapper');
        var hamburger = document.getElementById('js-hamburger');
        var blackBg = document.getElementById('js-black-bg');
    
        hamburger.addEventListener('click', function () {
            nav.classList.toggle('open');
        });
        blackBg.addEventListener('click', function () {
            nav.classList.remove('open');
        });
    };


    // ----------API------------

    const targets = document.querySelectorAll('span');

    function callback(entries, obs) {
    console.log(entries);

    entries.forEach(entry =>{
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add('appear');
            obs.unobserve(entry.target);
    });
}

    const options = {
        threshold: 0.3,
    };

    const observer = new IntersectionObserver(callback,options);

    targets.forEach(target => {
        observer.observe(target);
    });
}