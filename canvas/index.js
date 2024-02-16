import { tutorial } from './tutorial.js';
/**
*@returns {CanvasRenderingContext2D}
*/
function getContext() {
    const canvas = document.querySelector('.mid');
    const context = canvas.getContext('2d');

    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;

    context.textAlign = 'center';
    context.textBaseLine = 'middle';

    return context;
}
/**
*@param {DOMHightResTimeStamp} time
*/
function animationFrame(time) {
    window.requestAnimationFrame(animationFrame);
    tutorial(context, time);
}

const context = getContext();
window.requestAnimationFrame(animationFrame);