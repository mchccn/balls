import { MethodNotImplementedError } from "../../types.js";
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
        throw new MethodNotImplementedError("Container.prototype.render is not implemented and should not be called.");
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