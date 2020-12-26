import { SIZE } from "../../constants.js";
import Entity from "../../lib/core/classes/Entity.js";

export default class Enemy extends Entity {
  protected color = "red";
  public r = SIZE;

  constructor(x: number, y: number) {
    super(x, y);
  }

  public update(ctx: CanvasRenderingContext2D, deltaTime: number) {
    return this;
  }

  public render(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.r, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.closePath();
    return this;
  }
}
