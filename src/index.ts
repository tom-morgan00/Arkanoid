// Start here
console.log('Start here!');

import { CanvasView } from './view/CanvasView';
import { Ball } from './sprites/Ball';
import { Brick } from './sprites/Brick';
import { Paddle } from './sprites/Paddle';

import PADDLE_IMAGE from './images/paddle.png';
import BALL_IMAGE from './images/ball.png';

import {
  PADDLE_SPEED,
  PADDLE_WIDTH,
  PADDLE_HEIGHT,
  PADDLE_STARTX,
  BALL_SPEED,
  BALL_SIZE,
  BALL_STARTX,
  BALL_STARTY,
} from './setup';

let gameOver = false;
let score = 0;

function setGameOver(view: CanvasView): void {
  view.drawInfo('Game Over!');
  gameOver = false;
}

function setGameWin(view: CanvasView): void {
  view.drawInfo('Winner!');
  gameOver = false;
}

function gameLoop(
  view: CanvasView,
  bricks: Brick[],
  paddle: Paddle,
  ball: Ball
): void {}

function startGame(view: CanvasView) {}

//create new view
const view = new CanvasView('#playField');
view.initStartButton(startGame);
