document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-theme');
    const body = document.body;
  
    toggleButton.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      // Atualize o texto ou o ícone do botão, se desejar
      const isDarkMode = body.classList.contains('dark-mode');
      toggleButton.innerHTML = isDarkMode 
        ? '<i class="fa-solid fa-moon"></i> <span id="button-text">Modo Claro</span>'
        : '<i class="fa-solid fa-sun"></i> <span id="button-text">Modo Escuro</span>';
    });
  });