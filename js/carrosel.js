const carrosel = document.querySelector('.carrosel-over')
const prevBnt = document.querySelector ('.seta-left')
const nextBnt = document.querySelector ('.seta-right')

prevBnt.addEventListener('click', function () {

    carrosel.style.transform = 'translateX(-100px)';

});

nextBnt.addEventListener('click', function () {

    carrosel.style.transform = 'translateX(300px)';
    carrosel.style.transition = '2s ease in out'



});