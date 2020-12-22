import { WORLD_HEIGHT, WORLD_WIDTH } from "../constants.js";
import Entity from "../lib/core/classes/Entity.js";
export default class Ground extends Entity {
    constructor(x, y, w, h) {
        super(x, y);
        this.w = w;
        this.h = h;
    }
    update(ctx, deltaTime) {
        return this;
    }
    render(ctx) {
        ctx.fillStyle = "white";
        ctx.fillRect(this.pos.x, this.pos.y, this.w, this.h);
        ctx.strokeStyle = "white";
        ctx.beginPath();
        ctx.moveTo(1, WORLD_HEIGHT);
        ctx.lineTo(1, 1);
        ctx.lineTo(WORLD_WIDTH - 1, 1);
        ctx.lineTo(WORLD_WIDTH - 1, WORLD_HEIGHT - 1);
        ctx.closePath();
        ctx.stroke();
        return this;
    }
}
//# sourceMappingURL=Ground.js.map