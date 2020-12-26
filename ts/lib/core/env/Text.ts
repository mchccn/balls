import Entity from "../classes/Entity.js";

/**
 * A text entity. The position is relative to the screen.
 */
export default class Text extends Entity {
  public text: string;
  public font: string;
  public color: string;
  public center: boolean;

  constructor(
    x: number,
    y: number,
    text: string,
    font: string,
    color: string,
    center: boolean
  ) {
    super(x, y);

    this.text = text;
    this.font = font;
    this.color = color;
    this.center = center;
  }

  public update() {
    return this;
  }

  public render(ctx: CanvasRenderingContext2D) {
    ctx.save();

    ctx.resetTransform();

    ctx.fillStyle = this.color;
    ctx.font = this.font;
    if (this.center) ctx.textAlign = "center";
    ctx.fillText(this.text, this.pos.x, this.pos.y);

    ctx.restore();

    return this;
  }
}
