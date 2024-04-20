


// função para o menu escondido aparcer e sumir seguindo o scroll

let lastScrollPosition = 0;

window.addEventListener('scroll', function () {
    let menuScrollopcao = document.getElementById('header-2');
    let currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition) {
        // O usuário está rolando para baixo, então esconde o header
        menuScrollopcao.style.top = '-10vh'; // ou '0' para esconder completamente
        menuScrollopcao.style.transition = '0.5s'
        menuScrollopcao.style.opacity = '0'

    } else {
        // O usuário está rolando para cima, então mostra o header
        menuScrollopcao.style.top = '19vh';
        menuScrollopcao.style.opacity = '100'

    }

    lastScrollPosition = currentScrollPosition;
});






// efeito para o menu lateral aparecer quando o botão for clicado
function toggleMenu() {
    var sidebar = document.getElementById("menu-lateral");
    var btn = document.querySelector(".IrLwCg");
    var subMenu = document.getElementById(`sub-menu`)



    if (sidebar.style.display === 'none' || sidebar.style.display === '') {
        sidebar.style.display = 'block';

    } else {
        sidebar.style.display = 'none';
        subMenu.style.display = 'none'

    }




    sidebar.classList.toggle("active");
    btn.classList.toggle("active");




    if (sidebar.classList.contains("active")) {
        sidebar.style.left = "0";
        btn.style.left = "25vw";

    } else {
        sidebar.style.left = "-25vw";
        btn.style.left = "0";

    }
}



// submenu_social
function abrirSubMenu() {
    var subMenu = document.getElementById(`sub-menu`)
    if (subMenu.style.display === 'none' || subMenu.style.display === '') {
        subMenu.style.display = 'block';
    } else {
        subMenu.style.display = 'none';
    }
}


// _____________

// efeito para a section aparecer com a rolagem do scroll

// document.addEventListener('DOMContentLoaded', function () {
//     const sections = document.querySelectorAll('#section-2');

//     function checkPosition() {
//         for (let i = 0; i < sections.length; i++) {
//             const windowHeight = window.innerHeight;
//             const sectionTop = sections[i].getBoundingClientRect().top;
//             const sectionBottom = sectionTop + sections[i].clientHeight;

//             if (sectionTop < windowHeight && sectionBottom >= 0) {
//                 sections[i].classList.add('visible');

//                 // Calcular a porcentagem de visibilidade
//                 const visibilityPercentage = (windowHeight - sectionTop) / windowHeight;
                
//                 // Definir a opacidade com base na porcentagem de visibilidade
//                 sections[i].style.opacity = visibilityPercentage;
//             } else {
//                 sections[i].classList.remove('visible');
                
//                 // Se estiver fora da viewport, definir opacidade para 0
//                 sections[i].style.opacity = 1;
//             }
//         }
//     }

//     document.addEventListener('scroll', checkPosition);
//     document.addEventListener('resize', checkPosition);

//     checkPosition();
// });

// RELOGIO 
setInterval(function () {
    const time = document.getElementById('time');

    // Criar uma data com o fuso horário de Brasília (UTC-3)
    let date = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }));

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = 'am';

    if (hours > 12) {
        day_night = 'pm';
        hours = hours - 12;
    }

    if (hours < 10) {
        hours = '0' + hours;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    time.textContent = hours + ':' + minutes + ':' + seconds + ' ' + day_night;

}, 1000);


// animação imagem login
document.addEventListener('DOMContentLoaded', function () {
    const image = document.querySelector('#img-login');
    let angle = 0;

    function animate() {
        angle += 0.02;
        const x = 1 * Math.cos(angle); // Raio * cos(ângulo)
        const y = 1 * Math.sin(angle); // Raio * sin(ângulo)

        image.style.transform = `translate(5%, 10%) translate(${x}vw, ${y}vh)`;
        requestAnimationFrame(animate);
    }

    animate();
});



//exibe um span no html de senha

document.getElementById("loginForm").addEventListener("submit", function (event) {
    // Reset previous error message
    document.getElementById("senhaError").innerText = "";

    // Check password length (example)
    if (document.getElementById("senha").value.length < 6) {
        // Display error message
        document.getElementById("senhaError").innerText = "A senha deve ter pelo menos 6 caracteres.";

        // Prevent form submission
        event.preventDefault();
    }
});



  






// fecharCard()
function fecharCard(){
    let cardResultado = document.getElementById(`resultado-partida`)
    if(cardResultado.style.display === 'none' ||cardResultado.style.display === '' ){
        cardResultado.style.display = 'block'
    }
    else{
        cardResultado.style.display = 'none'
    }
}

// abrirCardResultado()
function abrirCardResultado(){
    let cardResultado = document.getElementById(`resultado-partida`)
    if(cardResultado.style.display === 'none' ||cardResultado.style.display === '' ){
        cardResultado.style.display = 'block'
    }
    else{
        cardResultado.style.display = 'none'
    }
}