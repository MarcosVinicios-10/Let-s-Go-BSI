// Utilidades: tema, navegação mobile, ano no rodapé
(function(){
  const html = document.documentElement;
  const btn = document.getElementById('themeBtn');
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('menu') || document.querySelector('.nav');
  const yearEl = document.getElementById('year');

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Tema persistente
  const saved = localStorage.getItem('theme');
  if (saved === 'light') html.classList.add('light');
  if (btn){
    btn.addEventListener('click', () => {
      html.classList.toggle('light');
      localStorage.setItem('theme', html.classList.contains('light') ? 'light' : 'dark');
    });
  }

  // Menu mobile
  if (navToggle && nav){
    navToggle.addEventListener('click', () => {
      const expanded = nav.getAttribute('aria-expanded') === 'true';
      const next = !expanded;
      nav.setAttribute('aria-expanded', String(next));
      navToggle.setAttribute('aria-expanded', String(next));
    });
  }
})();

//Pegando as informações de contato
const botao_enviar = document.querySelector('#enviar');

botao_enviar.addEventListener('click',function(e){
      e.preventDefault();
      var nome= document.querySelector('#nome');
      var nome = nome.value;
  
      var email= document.querySelector('#email');
      var email = email.value;
    
      var mensagem= document.querySelector('#mensagem');
      var mensagem = mensagem.value;

      fetch('https://api.sheetmonkey.io/form/94LTj38FmdkV9xSe232n9Z',{
        method:'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({nome,email,mensagem})
      });
});

