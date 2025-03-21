
 // Animação de flores
 function createFlowers() {
     const flowerContainer = document.getElementById('flower-container');
     if (!flowerContainer) return;
     
     const flowerEmojis = ['🌸', '🌹', '🌺', '🌷', '🌻', '💐', '🌼'];
     const numFlowers = 20;
     
     for (let i = 0; i < numFlowers; i++) {
       setTimeout(() => {
         createFlowerElement(flowerContainer, flowerEmojis);
       }, i * 500);
     }
     
     // Continuar criando flores a cada intervalo
     setInterval(() => {
       createFlowerElement(flowerContainer, flowerEmojis);
     }, 2000);
   }
   
   function createFlowerElement(container, flowerEmojis) {
     const flower = document.createElement('div');
     flower.className = 'floating-flower';
     
     // Selecionar emoji aleatório
     const randomEmoji = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
     flower.textContent = randomEmoji;
     
     // Definir posição horizontal aleatória
     const posX = Math.random() * 100;
     flower.style.left = `${posX}%`;
     
     // Definir tamanho aleatório
     const size = Math.random() * 20 + 20;
     flower.style.fontSize = `${size}px`;
     
     // Definir animação com duração aleatória
     const duration = Math.random() * 5 + 10;
     flower.style.animation = `floatUp ${duration}s linear forwards`;
     
     // Adicionar ao container
     container.appendChild(flower);
     
     // Remover após a animação terminar
     setTimeout(() => {
       flower.remove();
     }, duration * 1000);
   }
   
   // Animação de corações
   function createHearts() {
     const heartContainer = document.getElementById('heart-container');
     if (!heartContainer) return;
     
     const heartEmojis = ['❤️', '💖', '💓', '💗', '💕'];
     const numHearts = 30;
     
     for (let i = 0; i < numHearts; i++) {
       setTimeout(() => {
         createHeartElement(heartContainer, heartEmojis);
       }, i * 300);
     }
     
     // Continuar criando corações a cada intervalo
     setInterval(() => {
       createHeartElement(heartContainer, heartEmojis);
     }, 1000);
   }
   
   function createHeartElement(container, heartEmojis) {
     const heart = document.createElement('div');
     heart.className = 'floating-heart';
     
     // Selecionar emoji aleatório
     const randomEmoji = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
     heart.textContent = randomEmoji;
     
     // Definir posição horizontal aleatória
     const posX = Math.random() * 100;
     heart.style.left = `${posX}%`;
     
     // Definir tamanho aleatório
     const size = Math.random() * 15 + 15;
     heart.style.fontSize = `${size}px`;
     
     // Definir animação com duração aleatória
     const duration = Math.random() * 4 + 8;
     heart.style.animation = `floatUp ${duration}s linear forwards`;
     
     // Adicionar ao container
     container.appendChild(heart);
     
     // Remover após a animação terminar
     setTimeout(() => {
       heart.remove();
     }, duration * 1000);
   }
   
   // Adicionar estilos CSS para as animações
   document.addEventListener('DOMContentLoaded', function() {
     const styleSheet = `
       .floating-flower, .floating-heart {
         position: absolute;
         bottom: -50px;
         z-index: 1;
         user-select: none;
         pointer-events: none;
       }
       
       #flower-container, #heart-container {
         position: fixed;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         pointer-events: none;
         z-index: 1;
       }
     `;
     
     const styleElement = document.createElement('style');
     styleElement.textContent = styleSheet;
     document.head.appendChild(styleElement);
   });