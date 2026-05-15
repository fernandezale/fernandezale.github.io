import {Calculadora} from './calculadoraScript.js'

const miCalc = new Calculadora('display', '.btn');

const btnVolver = document.getElementById('volver');

btnVolver.addEventListener('click', () => {
    window.location.href = '../pages/PaginaFrontend.html';
});