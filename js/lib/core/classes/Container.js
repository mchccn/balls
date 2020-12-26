import Entity from "./Entity.js";
export default class Container extends Entity {
    constructor(...entities) {
        super(0, 0);
        this.entities = entities;
    }
    update(ctx, deltaTime) {
        this.entities.forEach((entity) => {
            entity.update(ctx, deltaTime);
        });
        return this;
    }
    render(ctx) {
        this.entities.forEach((e) => {
            e.render(ctx);
        });
        return this;
    }
    add(e) {
        this.entities.push(e);
        return e;
    }
    remove(e) {
        this.entities = this.entities.filter((ent) => ent !== e);
        return e;
    }
}
//# sourceMappingURL=Container.js.map