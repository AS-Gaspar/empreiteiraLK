 // Seleciona os elementos necessários
 const menuBurger = document.getElementById('menuBurger');
 const navbar = document.getElementById('navbar');
 const closeButton = document.getElementById('closeButton');

 // Adiciona o evento de clique para abrir o menu em telas menores
 menuBurger.addEventListener('click', () => {
     if (window.innerWidth < 992) {
         navbar.classList.add('active');
     }
 });

 // Adiciona o evento de clique para fechar o menu
 closeButton.addEventListener('click', () => {
     navbar.classList.remove('active');
 });

 // Garante que o menu não esteja visível como dropdown em telas maiores
 window.addEventListener('resize', () => {
     if (window.innerWidth >= 992) {
         navbar.classList.remove('active');
     }
 });