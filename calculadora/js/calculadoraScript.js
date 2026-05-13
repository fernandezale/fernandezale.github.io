export class Calculadora {
    constructor(idDisplay, claseBotones) {
        this.display = document.getElementById(idDisplay);
        this.botones = document.querySelectorAll(claseBotones);
        this.operacionActual = '';
        
        this.iniciarEventos();
    }

    iniciarEventos() {
        this.botones.forEach(boton => {
            boton.addEventListener('click', () => {
                const valor = boton.innerText;
                this.procesarEntrada(valor);
            });
        });
    }

    procesarEntrada(valor) {
        if (valor === 'AC') return this.limpiar();
        if (valor === 'DEL') return this.borrar();
        if (valor === '=') return this.calcular();
        
        this.agregarDato(valor);
    }

    limpiar() {
        this.operacionActual = '';
        this.actualizarDisplay('0');
    }

    borrar() {
        this.operacionActual = this.operacionActual.slice(0, -1);
        this.actualizarDisplay(this.operacionActual || '0');
    }

    calcular() {
        try {
            this.operacionActual = eval(this.operacionActual).toString();
            this.actualizarDisplay(this.operacionActual);
        } catch {
            this.actualizarDisplay("ERROR_SYS");
            this.operacionActual = "";
        }
    }

    agregarDato(valor) {
        if (this.operacionActual === '0') {
            this.operacionActual = valor;
        } else {
            this.operacionActual += valor;
        }
        this.actualizarDisplay(this.operacionActual);
    }

    actualizarDisplay(texto) {
        this.display.innerText = texto;
    }
}