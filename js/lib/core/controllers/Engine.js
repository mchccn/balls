import Container from "../classes/Container.js";
import Entity from "../classes/Entity.js";
export default class Engine extends Entity {
    constructor(x, y, target, game) {
        super(x, y);
        this.shake = {
            active: false,
            time: 0,
            start: 0,
        };
        this.target = target;
        this.game = game;
    }
    update(ctx, deltaTime) {
        if (this.game.activeScene)
            this.game.activeScene.update(ctx, deltaTime);
        this.render(ctx);
        return this;
    }
    render(ctx) {
        if (this.shake.active) {
            const dt = Date.now() - this.shake.start;
            const easingCoef = dt / this.shake.time;
            const easing = Math.pow(easingCoef - 1, 3) + 1;
            const dx = easing * (Math.cos(dt * 0.1) + Math.cos(dt * 0.3115)) * 2;
            const dy = easing * (Math.sin(dt * 0.05) + Math.sin(dt * 0.057113)) * 2;
            ctx.translate(dx, dy);
        }
        ctx.save();
        ctx.translate(this.game.canvas.width / 2 - this.target.pos.x, this.game.canvas.height / 2 - this.target.pos.y);
        if (this.game.activeScene)
            this.game.activeScene.entities.forEach((ent) => {
                if (!(ent instanceof Container))
                    ent.render(ctx);
            });
        ctx.restore();
        return this;
    }
    cameraShake(time) {
        this.shake.active = true;
        this.shake.time = time * 1000;
        this.shake.start = Date.now();
        setTimeout(() => (this.shake.active = false), time * 1000);
    }
    get canvas() {
        return this.game.canvas;
    }
    get ctx() {
        return this.game.ctx;
    }
}
//# sourceMappingURL=Engine.js.map