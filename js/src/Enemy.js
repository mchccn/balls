import { SIZE } from "../constants.js";
import Entity from "../lib/core/classes/Entity.js";
export default class Enemy extends Entity {
    constructor(x, y) {
        super(x, y);
        this.color = "red";
        this.r = SIZE;
    }
    update(ctx, deltaTime) {
        return this;
    }
    render(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.r, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();
        return this;
    }
}
//# sourceMappingURL=Enemy.js.map