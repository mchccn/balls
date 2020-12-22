import { MethodNotImplementedError } from "../../types.js";
import Entity from "./Entity.js";

export default class Container extends Entity {
  public entities: Entity[];

  constructor(...entities: Entity[]) {
    super(0, 0);
    this.entities = entities;
  }

  /**
   * Updates every entity in the container.
   * @param ctx The canvas context to render to.
   * @param deltaTime Time passed in milliseconds from the last frame.
   */
  public update(ctx: CanvasRenderingContext2D, deltaTime: number) {
    this.entities.forEach((entity) => {
      entity.update(ctx, deltaTime);
    });
    return this;
  }

  /**
   * Do not call this method on Container unless you want an error.
   * @deprecated The container class has no need for a render method.
   */
  public render(ctx: CanvasRenderingContext2D): this {
    throw new MethodNotImplementedError(
      "Container.prototype.render is not implemented and should not be called."
    );
  }

  /**
   * Adds an entity to the container
   * @param e Entity to add.
   */
  public add(e: Entity) {
    this.entities.push(e);
    return e;
  }

  /**
   * Removes an entity from the container.
   * @param e Entity to remove.
   */
  public remove(e: Entity) {
    this.entities = this.entities.filter((ent) => ent !== e);
    return e;
  }
}
