'use strict';

window.onscroll = () => {
    const nav = document.querySelector('.sticky-top');
    if (window.scrollY < 10) nav.className = 'navbar navbar-expand-lg navbar-light bg-transparent sticky-top';
    else nav.className = 'navbar navbar-expand-lg navbar-light bg-white sticky-top';
};