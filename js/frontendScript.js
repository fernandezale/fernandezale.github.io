const btcCalc = document.getElementById('btn-calculadora');
const btcGymweb = document.getElementById('btn-gymweb');

btcCalc.addEventListener('click', () =>{
    window.location.href = '../calculadora/calculadora.html';
});

btcGymweb.addEventListener('click', () =>{
    window.location.href = '../gymlandingpage/GymLandingPage.html';
});

const canvas = document.getElementById('matrixCanvas');
        const ctx = canvas.getContext('2d');

        // Configuración de la lluvia
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&*()ｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ";
        const fontSize = 18;
        let columns;
        let drops = [];

        // Ajustar el canvas al tamaño de la ventana
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            
            // Recalcular columnas según el ancho y tamaño de fuente
            columns = Math.floor(canvas.width / fontSize);
            
            // Inicializar o reajustar las posiciones de las gotas (drops)
            // drops[i] guarda la coordenada Y de la gota en la columna i
            drops = [];
            for (let i = 0; i < columns; i++) {
                drops[i] = Math.random() * -100; // Inicio aleatorio fuera de pantalla para naturalidad
            }
        }

        function draw() {
            // Fondo semi-transparente para crear el efecto de estela (trail)
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Estilo de los caracteres
            ctx.fillStyle = "#00ff41"; // Color verde Matrix clásico
            ctx.font = fontSize + "px monospace";

            // Dibujar los caracteres
            for (let i = 0; i < drops.length; i++) {
                // Seleccionar un caracter aleatorio
                const text = characters.charAt(Math.floor(Math.random() * characters.length));
                
                // x = posición de columna, y = posición de la gota
                const x = i * fontSize;
                const y = drops[i] * fontSize;

                ctx.fillText(text, x, y);

                // Reiniciar la gota al inicio con una probabilidad aleatoria cuando sale de pantalla
                if (y > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                // Mover la gota hacia abajo
                drops[i]++;
            }
        }

        // Eventos y bucle de animación
        window.addEventListener('resize', resizeCanvas);
        
        // Inicialización
        resizeCanvas();
        
        // Ejecutar a ~30 cuadros por segundo para un look cinematográfico
        setInterval(draw, 35);