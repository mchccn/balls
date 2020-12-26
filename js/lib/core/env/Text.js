import Entity from "../classes/Entity.js";
export default class Text extends Entity {
    constructor(x, y, text, font, color, center) {
        super(x, y);
        this.text = text;
        this.font = font;
        this.color = color;
        this.center = center;
    }
    update() {
        return this;
    }
    render(ctx) {
        ctx.save();
        ctx.resetTransform();
        ctx.fillStyle = this.color;
        ctx.font = this.font;
        if (this.center)
            ctx.textAlign = "center";
        ctx.fillText(this.text, this.pos.x, this.pos.y);
        ctx.restore();
        return this;
    }
}
//# sourceMappingURL=Text.js.map