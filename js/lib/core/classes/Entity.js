import Vector from "./Vector.js";
export default class Entity {
    constructor(x, y) {
        this.pos = new Vector(x, y);
        this.vel = new Vector(0, 0);
    }
}
//# sourceMappingURL=Entity.js.map