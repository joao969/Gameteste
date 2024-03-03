const Megabrasao = document.querySelector('.Megabrasao');
const Megabrasao2 = document.querySelector('.Megabrasao2');
const op1 = document.querySelector('.op1');
const op2 = document.querySelector('.op2');
const op3 = document.querySelector('.op3');
const op4 = document.querySelector('.op4');
const perso1 = document.querySelector('.perso1');


op3.addEventListener('click',()=>{
    perso1.src='../Gameteste/imagens/perso3.gif'; 
    Megabrasao.src ='../Gameteste/imagens/brasao1.gif';
    Megabrasao.style.opacity= '800';
    Megabrasao2.src ='../Gameteste/imagens/brasao1.gif';
    Megabrasao2.style.opacity= '800';
});
 op2.addEventListener('click',()=>{
        perso1.src='../Gameteste/imagens/perso5.gif';
        Megabrasao.src ='../Gameteste/imagens/brasao3.gif';
        Megabrasao.style.opacity= '800';
        Megabrasao2.src ='../Gameteste/imagens/brasao3.gif';
        Megabrasao2.style.opacity= '800';
        op4.window.location="pag2.html";
 
});
op1.addEventListener('click',()=>{
   window.location="index.html";

});
op4.addEventListener('click',()=>{
    window.location="pag2.html";
 
 });













