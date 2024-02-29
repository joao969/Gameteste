const zeldinha = document.querySelector('.zeldinha');
const chefao = document.querySelector('.chefao');
const esqueleto = document.querySelector('.esqueleto');

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

    if (esqueletoPosition <= 140 && esqueletoPosition > 0 && zeldinhaPosition < 100) {

        esqueleto.style.animation = 'none';
        esqueleto.style.left = `${esqueletoPosition}px`;

        zeldinha.style.animation = 'none';
        zeldinha.style.bottom = `${zeldinhaPosition}px`;

        esqueleto.src = '../Gameteste/imagens/fogo2.gif'
        esqueleto.style.left = '10px'
        zeldinha.src = '../Gameteste/imagens/perso2.gif';
        zeldinha.style.top = '450px'
        zeldinha.style.width = '150px'
        fim.textContent = 'GAME OVER';
        reiniciar.textContent = 'REINICIAR';
        

        clearInterval(loop);
    }

}, 100);



document.addEventListener('keydown', jump);



