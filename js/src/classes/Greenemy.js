import { SIZE } from "../../constants.js";
import Enemy from "./Enemy.js";
export default class Greenemy extends Enemy {
    constructor(x, y) {
        super(x, y);
        this.color = "#00ee00";
        this.r = SIZE * 2;
    }
    render(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.pos.x, this.pos.y, this.r, this.r);
        return this;
    }
}
//# sourceMappingURL=Greenemy.js.map