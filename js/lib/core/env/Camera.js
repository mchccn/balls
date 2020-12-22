import Entity from "../classes/Entity.js";
export default class Camera extends Entity {
    constructor(x, y, target, game) {
        super(x, y);
        this.target = target;
        this.game = game;
        this._canvas = this.game.canvas;
        this._ctx = this.game.ctx;
    }
    update(ctx, deltaTime) {
        this.pos = this.target.pos;
        if (this.game.activeScene)
            this.game.activeScene.update(ctx, deltaTime);
        this.render(ctx);
        return this;
    }
    render(ctx) {
        return this;
    }
    get canvas() {
        return this._canvas;
    }
    get ctx() {
        return this._ctx;
    }
}
