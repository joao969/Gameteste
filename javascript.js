const zeldinha = document.querySelector('.zeldinha');
const chefao = document.querySelector('.chefao');
const esqueleto = document.querySelector('.esqueleto');
const gameover1 = document.querySelector('.gameover1');
const gameover2 = document.querySelector('.gameover2');
const gameover3 = document.querySelector('.gameover3');
const fim = document.querySelector('.fim');
const reiniciar = document.querySelector('.reiniciar');

const jump = () => {
    zeldinha.classList.add('jump');

    setTimeout(() => {
        zeldinha.classList.remove('jump');
    }, 500);
}



const loop = setInterval(() => {

    const esqueletoPosition = esqueleto.offsetLeft;
    const zeldinhaPosition = +window.getComputedStyle(zeldinha).bottom.replace('px', '');

    console.log(zeldinhaPosition);

    if (esqueletoPosition <= 100 && esqueletoPosition > 0 && zeldinhaPosition < 100) {

        esqueleto.style.animation = 'none';
        esqueleto.style.left = `${esqueletoPosition}px`;

        zeldinha.style.animation = 'none';
        zeldinha.style.bottom = `${zeldinhaPosition}px`;

        zeldinha.src = '../Gameteste/imagens/fantasma.gif';
        zeldinha.style.top = '200px'
        fim.textContent = 'GAME OVER';
        reiniciar.textContent = 'REINICIAR';
        

        clearInterval(loop);
    }

}, 100);




const loop2 = setInterval(() => {

    const chefaoPosition = chefao.offsetLeft;
    const zeldinhaPosition = +window.getComputedStyle(zeldinha).bottom.replace('px', '');

    console.log(zeldinhaPosition);

    if (chefaoPosition <= 120 && chefaoPosition > 0 && zeldinhaPosition < 100) {

        chefao.style.animation = 'none';
        chefao.style.left = `${chefaoPosition}px`;

        zeldinha.style.animation = 'none';
        zeldinha.style.bottom = `${zeldinhaPosition}px`;

        zeldinha.src = '../Gameteste/imagens/fantasma.gif';
        zeldinha.style.top = '450px'
        fim.textContent = 'GAME OVER';
        reiniciar.textContent = 'REINICIAR';
        

        clearInterval(loop);
    }

}, 100);





document.addEventListener('keydown', jump);



