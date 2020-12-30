import { D } from "../../../constants.js";
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
    render(ctx, cameraPos) {
        this.entities.forEach((e) => {
            if (!(e instanceof Container)) {
                const dx = e.pos.x - cameraPos.x;
                const dy = e.pos.y - cameraPos.y;
                const d = Math.sqrt(dx * dx + dy * dy);
                if (d < D)
                    return e.render(ctx, cameraPos);
            }
            e.render(ctx, cameraPos);
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