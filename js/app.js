document.querySelector('.ham').addEventListener('click', function () {
    document.querySelector('.mobile-screen').classList.toggle('open');
});

document.querySelector('.cross').addEventListener('click', function () {
    document.querySelector('.mobile-screen').classList.toggle('open');
});

window.addEventListener('scroll', function () { var nav = document.querySelector('nav'); nav.classList.toggle('sticky', window.scrollY > 0); })