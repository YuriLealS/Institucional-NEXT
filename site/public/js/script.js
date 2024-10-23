// Função para verificar se o elemento está visível na tela
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Função para adicionar a classe fade-in ao elemento quando ele estiver visível
function checkFadeInElements() {
  const elements = document.querySelectorAll('.fadeIn'); // Seleciona todos os elementos com a classe 'fadeIn'
  elements.forEach(function (element) {
      if (isElementInViewport(element)) {
          element.classList.add('fadeIn'); // Adiciona a classe que ativa a animação
      }
  });
}

// Função para ocultar ou mostrar o cabeçalho conforme o movimento do scroll
function handleHeaderVisibility() {
  let prevScrollPos = window.pageYOffset; // Posição anterior do scroll
  const header = document.querySelector('.cabecalho'); // O elemento do cabeçalho

  window.onscroll = function() {
      let currentScrollPos = window.pageYOffset; // Posição atual do scroll

      if (prevScrollPos > currentScrollPos) {
          // Rolou para cima
          header.classList.remove('hidden');
      } else {
          // Rolou para baixo
          header.classList.add('hidden');
      }

      // Atualiza a posição anterior do scroll
      prevScrollPos = currentScrollPos;
  };
}

// Executa a função ao carregar a página e ao rolar a página para verificar os elementos visíveis para o fade-in
window.addEventListener('load', () => {
  checkFadeInElements(); // Verifica fade-in ao carregar a página
  handleHeaderVisibility(); // Configura o comportamento do cabeçalho no scroll
});

window.addEventListener('scroll', () => {
  checkFadeInElements(); // Verifica fade-in quando rola a página
});

// Função para alterar a logo conforme o tamanho da tela
function verificarTamanhoTela() {
  const logo = document.getElementById('logo');
  if (window.innerWidth <= 500) {  // Considera telas menores que 500px como dispositivos móveis
      logo.src = 'css/img/logo.png'; // Altere o caminho para sua logo pequena
  } else {
      logo.src = 'css/img/logo-escura.png'; // Altere o caminho para sua logo padrão
  }
}

// Executar a função ao carregar a página
verificarTamanhoTela();

// Adicionar o evento de resize para que a logo mude quando o usuário redimensionar a janela
window.addEventListener('resize', verificarTamanhoTela);

window.onload = function() {
  // Função para esconder o bloco do Instagram
  document.getElementById('closeBtn').addEventListener('click', function() {
      document.getElementById('instagramEmbed').style.display = 'none';
  });
};