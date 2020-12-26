import { SIZE } from "../../constants.js";
import Enemy from "./Enemy.js";

export default class Greenemy extends Enemy {
  constructor(x: number, y: number) {
    super(x, y);
    this.color = "#00ee00";
    this.r = SIZE * 2;
  }

  public render(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.pos.x, this.pos.y, this.r, this.r);

    return this;
  }
}
