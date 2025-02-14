// Crear corazones flotantes
function createFloatingHearts() {
    const container = document.getElementById('floatingHearts');
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = `
            <svg width="${Math.random() * 30 + 20}" height="${Math.random() * 30 + 20}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
        `;
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(heart);
    }
}

// Crear fuegos artificiales
function createFirework(x, y) {
    const fireworks = document.getElementById('fireworks');
    const colors = ['#ef4444', '#f472b6', '#fcd34d', '#60a5fa']; // Agregados más colores
    
    for (let i = 0; i < 40; i++) { // Duplicado el número de partículas
        const particle = document.createElement('div');
        particle.className = 'firework';
        particle.style.left = `${x}%`;
        particle.style.top = `${y}%`;
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.setProperty('--translate-x', `${(Math.random() - 0.5) * 200}px`); // Aumentado el rango
        particle.style.setProperty('--translate-y', `${(Math.random() - 0.5) * 200}px`); // Aumentado el rango
        particle.style.animation = 'firework 2s ease-out forwards';
        particle.style.animationDelay = `${Math.random() * 0.5}s`;
        
        fireworks.appendChild(particle);
        setTimeout(() => particle.remove(), 2000);
    }
}

// Crear múltiples fuegos artificiales
function createMultipleFireworks() {
    for (let i = 0; i < 8; i++) { // Aumentado el número de fuegos artificiales
        createFirework(Math.random() * 100, Math.random() * 100);
    }
}

let fireworksInterval; // Variable para almacenar el intervalo

// Manejar la apertura del sobre
function handleEnvelopeClick() {
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    const container = document.getElementById('envelopeContainer');
    
    if (!envelope.classList.contains('hidden')) {
        envelope.classList.add('hidden');
        letter.classList.add('visible');
        container.style.transform = 'scale(1.1)';
        
        // Crear fuegos artificiales iniciales
        setTimeout(createMultipleFireworks, 1000);
        
        // Iniciar el intervalo de fuegos artificiales
        fireworksInterval = setInterval(createMultipleFireworks, 5000);
        
        // Guardar el estado en el localStorage
        localStorage.setItem('envelopeOpened', 'true');
    }
}

// Detener los fuegos artificiales cuando se cierra la página
window.addEventListener('beforeunload', () => {
    if (fireworksInterval) {
        clearInterval(fireworksInterval);
    }
});

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    createFloatingHearts();
    document.getElementById('envelopeContainer').addEventListener('click', handleEnvelopeClick);
});


// Función mejorada para crear elementos flotantes
function createFloatingElements() {
    const container = document.getElementById('floatingHearts');
    
    // Duplicar corazones flotantes (60 en lugar de 30)
    for (let i = 0; i < 60; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = `
            <svg width="${Math.random() * 30 + 20}" height="${Math.random() * 30 + 20}" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
        `;
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${Math.random() * 8}s`;
        container.appendChild(heart);
    }

    // Duplicar burbujas (40 en lugar de 20)
    for (let i = 0; i < 40; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.width = `${Math.random() * 30 + 10}px`;
        bubble.style.height = bubble.style.width;
        bubble.style.animationDelay = `${Math.random() * 10}s`;
        container.appendChild(bubble);
    }

    // Duplicar frecuencia de pétalos (150ms en lugar de 300ms)
    setInterval(() => {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.left = `${Math.random() * 100}%`;
        petal.style.animationDuration = `${Math.random() * 5 + 5}s`;
        container.appendChild(petal);
        setTimeout(() => petal.remove(), 10000);
    }, 150);

    // Duplicar brillos
    setInterval(() => {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = `${Math.random() * 100}%`;
        sparkle.style.animationDelay = `${Math.random() * 4}s`;
        container.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 4000);
    }, 100);
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    createFloatingElements();
    // Resto de las inicializaciones existentes...
});




