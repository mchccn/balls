import { HEIGHT, WIDTH, WORLD_HEIGHT, WORLD_WIDTH, } from "../../../constants.js";
import Entity from "../classes/Entity.js";
import Vector from "../classes/Vector.js";
export default class Camera extends Entity {
    constructor(x, y, target, game) {
        super(x, y);
        this.target = target;
        this.game = game;
        this._canvas = this.game.canvas;
        this._ctx = this.game.ctx;
        this.pos = new Vector(WORLD_WIDTH / 2 - WIDTH / 2, WORLD_HEIGHT / 2 - HEIGHT / 2);
    }
    update(ctx, deltaTime) {
        if (this.game.activeScene)
            this.game.activeScene.update(ctx, deltaTime);
        this.render(ctx);
        return this;
    }
    render(ctx) {
        ctx.save();
        ctx.translate(Math.random(), Math.random());
        ctx.restore();
        if (this.game.activeScene)
            this.game.activeScene.entities.forEach((ent) => {
                ent.render(ctx);
            });
        return this;
    }
    get canvas() {
        return this._canvas;
    }
    get ctx() {
        return this._ctx;
    }
}
