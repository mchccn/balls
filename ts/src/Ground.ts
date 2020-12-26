import { WORLD_HEIGHT, WORLD_WIDTH } from "../constants.js";
import Entity from "../lib/core/classes/Entity.js";

export default class Ground extends Entity {
  public w: number;
  public h: number;

  constructor(x: number, y: number, w: number, h: number) {
    super(x, y);
    this.w = w;
    this.h = h;
  }

  public update(ctx: CanvasRenderingContext2D, deltaTime: number) {
    return this;
  }

  public render(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "white";
    ctx.fillRect(this.pos.x, this.pos.y, this.w, this.h);
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.moveTo(1, WORLD_HEIGHT + 1);
    ctx.lineTo(1, 1);
    ctx.lineTo(WORLD_WIDTH - 1, 1);
    ctx.lineTo(WORLD_WIDTH - 1, WORLD_HEIGHT + 1);
    ctx.closePath();
    ctx.stroke();
    return this;
  }
}
