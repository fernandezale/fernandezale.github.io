import {Calculadora} from './calculadora.js'

const miCalc = new Calculadora('display', '.btn');

const btnVolver = document.getElementById('volver');

btnVolver.addEventListener('click', () => {
    window.location.href = '../../index.html';
});