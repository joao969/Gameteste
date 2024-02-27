const zeldinha = document.querySelector('.zeldinha');
const morcegao = document.querySelector('.morcegao');
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

    const morcegaoPosition = morcegao.offsetLeft;
    const zeldinhaPosition = +window.getComputedStyle(zeldinha).bottom.replace('px', '');

    console.log(zeldinhaPosition);

    if (morcegaoPosition <= 90 && morcegaoPosition > 0 && zeldinhaPosition < 100) {

        morcegao.style.animation = 'none';
        morcegao.style.left = `${morcegaoPosition}px`;




        zeldinha.style.animation = 'none';
        zeldinha.style.bottom = `${zeldinhaPosition}px`;

        zeldinha.src = '../Gameteste/imagens/fantasma.gif';
        zeldinha.style.top = '450px'
        gameover1.src = '../Gameteste/imagens/raio4.gif';
        gameover2.src = '../Gameteste/imagens/raio4.gif';
        gameover3.src = '../Gameteste/imagens/raio4.gif';
        fim.textContent = 'GAME OVER';
        reiniciar.textContent = 'REINICIAR';
        
        clearInterval(loop);
    }

}, 10);
document.addEventListener('keydown', jump);