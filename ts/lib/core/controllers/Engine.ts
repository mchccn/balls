import Container from "../classes/Container.js";
import Entity from "../classes/Entity.js";
import Game from "../env/Game.js";

export default class Engine extends Entity {
  public target: Entity;
  public game: Game;
  private shake = {
    active: false,
    time: 0,
    start: 0,
  };

  constructor(x: number, y: number, target: Entity, game: Game) {
    super(x, y);
    this.target = target;
    this.game = game;
  }

  public update(ctx: CanvasRenderingContext2D, deltaTime: number) {
    if (this.game.activeScene) this.game.activeScene.update(ctx, deltaTime);

    this.render(ctx);

    return this;
  }

  /**
   * The Engine class also acts like the camera.
   * @param ctx The context to render to.
   */
  public render(ctx: CanvasRenderingContext2D) {
    if (this.shake.active) {
      const dt = Date.now() - this.shake.start;
      const easingCoef = dt / this.shake.time;
      const easing = Math.pow(easingCoef - 1, 3) + 1;

      const dx = easing * (Math.cos(dt * 0.1) + Math.cos(dt * 0.3115)) * 2;
      const dy = easing * (Math.sin(dt * 0.05) + Math.sin(dt * 0.057113)) * 2;

      ctx.translate(dx, dy);
    }

    ctx.save();

    ctx.translate(
      this.game.canvas.width / 2 - this.target.pos.x,
      this.game.canvas.height / 2 - this.target.pos.y
    );

    if (this.game.activeScene)
      this.game.activeScene.entities.forEach((ent) => {
        if (!(ent instanceof Container)) ent.render(ctx);
      });

    ctx.restore();
    return this;
  }

  public cameraShake(time: number) {
    this.shake.active = true;
    this.shake.time = time * 1000;
    this.shake.start = Date.now();
    setTimeout(() => (this.shake.active = false), time * 1000);
  }

  public get canvas() {
    return this.game.canvas;
  }

  public get ctx() {
    return this.game.ctx;
  }
}
