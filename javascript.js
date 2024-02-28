const zeldinha = document.querySelector('.zeldinha');
const chefao = document.querySelector('.chefao');
const fantasma = document.querySelector('.fantasma');
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

    const chefaoPosition = chefao.offsetLeft;
    const zeldinhaPosition = +window.getComputedStyle(zeldinha).bottom.replace('px', '');

    console.log(zeldinhaPosition);

    if (chefaoPosition <= 20 && chefaoPosition > 0 && zeldinhaPosition < 100) {

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



