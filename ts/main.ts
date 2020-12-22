import {
  FPS,
  HEIGHT,
  SIZE,
  WIDTH,
  WORLD_HEIGHT,
  WORLD_WIDTH,
} from "./constants.js";
import lib from "./lib/index.js";
import { TimerCallback } from "./lib/types";
import Ground from "./src/Ground.js";
import Player from "./src/Player.js";

const { Engine, Container, Entity, Game, Scene, Timer, Vector } = lib;

const ground = new Ground(0, WORLD_HEIGHT, WORLD_WIDTH, SIZE * 5);

const player = new Player(100, 100);

const scene = new Scene("main", ground, player);

const game = new Game(
  {
    id: "canvas",
    width: 1600,
    height: 900,
  },
  player,
  scene
);

player.setCtx(game.ctx);

game.setActive("main");

const update: TimerCallback = (ctx, deltaTime) => {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);

  ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
  ctx.beginPath();

  for (let x = -((player.pos.x / 4) % SIZE) * 4; x <= WIDTH; x += SIZE * 4) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, HEIGHT);
  }

  for (let y = -((player.pos.y / 4) % SIZE) * 4; y <= HEIGHT; y += SIZE * 4) {
    ctx.moveTo(0, y);
    ctx.lineTo(WIDTH, y);
  }

  ctx.lineWidth = 2;
  ctx.stroke();

  game.engine.update(ctx, deltaTime);
};

const timer = new Timer(game.ctx, FPS, update);

timer.start();
