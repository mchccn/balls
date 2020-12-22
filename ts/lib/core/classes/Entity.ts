import Vector from "./Vector.js";

interface IEntity {
  pos: Vector;
  vel: Vector;
  update(ctx: CanvasRenderingContext2D, deltaTime: number): this;
  render(ctx: CanvasRenderingContext2D): this;
}

export default abstract class Entity implements IEntity {
  public pos: Vector;
  public vel: Vector;

  constructor(x: number, y: number) {
    this.pos = new Vector(x, y);
    this.vel = new Vector(0, 0);
  }

  /**
   * Updates this entity. It is recommended to call Entity.prototype.render inside.
   * @param ctx The canvas context to render to.
   * @param deltaTime Time passed in milliseconds from the last frame.
   */
  public abstract update(
    ctx: CanvasRenderingContext2D,
    deltaTime: number
  ): this;

  /**
   * Renders this entity.
   * @param ctx The canvas context to render to.
   */
  public abstract render(ctx: CanvasRenderingContext2D): this;
}
