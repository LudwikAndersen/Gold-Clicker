import { rectangleOverlap } from './collisions.js';

const rect1 = coinRain.getBoundingClientRect();
const rect2 = bottomMid.getBoundingClientRect();

export function tutorial(context) {
    const collisionResult = rectangleOverlap(rect1, rect2);

    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    

    const alpha = collisionResult ? 0.4 : 1;
    rect1(context, `rgb(47 66 212 / ${alpha})`, 'A');
    rect2(context, `rgb(217 84 54 / ${alpha})`, 'B');

}