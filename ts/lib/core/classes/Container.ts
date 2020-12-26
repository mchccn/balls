import Entity from "./Entity.js";

export default class Container<E extends Entity = Entity> extends Entity {
  public entities: E[];

  constructor(...entities: E[]) {
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
   * Renders every entity in the container
   * @param ctx The canvas context to render to.
   */
  public render(ctx: CanvasRenderingContext2D): this {
    this.entities.forEach((e) => {
      e.render(ctx);
    });
    return this;
  }

  /**
   * Adds an entity to the container
   * @param e Entity to add.
   */
  public add(e: E) {
    this.entities.push(e);
    return e;
  }

  /**
   * Removes an entity from the container.
   * @param e Entity to remove.
   */
  public remove(e: E) {
    this.entities = this.entities.filter((ent) => ent !== e);
    return e;
  }
}
