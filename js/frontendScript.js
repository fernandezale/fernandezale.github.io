/**
 * FRONTEND PORTFOLIO SCRIPT
 * Alexis - Frontend Developer
 */

document.addEventListener('DOMContentLoaded', () => {
    // ---------------------------------------------------------
    // 1. Redirección de Proyectos
    // ---------------------------------------------------------
    const btcCalc = document.getElementById('btn-calculadora');
    const btcGymweb = document.getElementById('btn-gymweb');

    if (btcCalc) {
        btcCalc.addEventListener('click', () => {
            window.location.href = '../calculadora/calculadora.html';
        });
    }

    if (btcGymweb) {
        btcGymweb.addEventListener('click', () => {
            window.location.href = '../gymlandingpage/GymLandingPage.html';
        });
    }

    // ---------------------------------------------------------
    // 2. Menú de Navegación Móvil
    // ---------------------------------------------------------
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            const isOpen = navMenu.classList.contains('open');
            navToggle.setAttribute('aria-expanded', isOpen);
            navToggle.innerHTML = isOpen 
                ? '<i class="bi bi-x-lg"></i>' 
                : '<i class="bi bi-list"></i>';
        });

        // Cerrar menú al hacer clic en cualquier enlace
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.innerHTML = '<i class="bi bi-list"></i>';
            });
        });
    }

    // ---------------------------------------------------------
    // 3. Animación de Lluvia Matrix Optimizada (requestAnimationFrame)
    // ---------------------------------------------------------
    const canvas = document.getElementById('matrixCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&*()ｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ";
    const fontSize = 16;
    let columns = 0;
    let drops = [];
    let isTabActive = true;
    let lastFrameTime = 0;
    const targetFpsInterval = 1000 / 30; // ~30 fps para rendimiento óptimo

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        columns = Math.floor(canvas.width / fontSize);
        
        drops = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -80; // Distribución aleatoria inicial
        }
    }

    function renderMatrix(timestamp) {
        if (!isTabActive) {
            requestAnimationFrame(renderMatrix);
            return;
        }

        const elapsed = timestamp - lastFrameTime;
        if (elapsed > targetFpsInterval) {
            lastFrameTime = timestamp - (elapsed % targetFpsInterval);

            // Capa de desvanecimiento suave (fade trail)
            ctx.fillStyle = "rgba(6, 9, 7, 0.08)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Caracteres Matrix en verde brillante
            ctx.fillStyle = "#00ff41";
            ctx.font = `${fontSize}px 'Fira Code', monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = characters.charAt(Math.floor(Math.random() * characters.length));
                const x = i * fontSize;
                const y = drops[i] * fontSize;

                ctx.fillText(text, x, y);

                // Reiniciar al inicio cuando sale de pantalla de forma probabilística
                if (y > canvas.height && Math.random() > 0.98) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        }

        requestAnimationFrame(renderMatrix);
    }

    // Pausar render cuando la pestaña pasa a segundo plano
    document.addEventListener('visibilitychange', () => {
        isTabActive = !document.hidden;
    });

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(resizeCanvas, 150);
    });

    // Iniciar
    resizeCanvas();
    requestAnimationFrame(renderMatrix);
});