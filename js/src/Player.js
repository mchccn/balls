import { GRAVITY, HEIGHT, SIZE, WIDTH, WORLD_HEIGHT, WORLD_WIDTH, } from "../constants.js";
import Entity from "../lib/core/classes/Entity.js";
import Vector from "../lib/core/classes/Vector.js";
export default class Player extends Entity {
    constructor(x, y) {
        super(x, y);
        this.color = "cyan";
        this.r = SIZE;
        this.mass = 50;
        this.gravitySpeed = 0;
        this.mousePos = { x: WIDTH / 2, y: HEIGHT / 2 };
        this.mouseDown = false;
        this.game = null;
        this.isGrounded = false;
        this.health = WIDTH;
        this.score = 0;
        this.pos = new Vector(WORLD_WIDTH / 2 - WIDTH / 2, WORLD_HEIGHT - this.r);
        document.addEventListener("mousedown", (e) => {
            this.mouseDown = true;
        });
        document.addEventListener("mouseup", (e) => {
            this.mouseDown = false;
            this.shoot();
        });
        document.addEventListener("mousemove", (e) => {
            this.mousePos = this.getMousePos(this.game?.canvas, e);
        });
    }
    setGame(game) {
        this.game = game;
    }
    update(ctx, deltaTime) {
        if (this.health > WIDTH)
            this.health = WIDTH;
        this.health -= 2;
        if (this.score < 0)
            this.score = 0;
        this.gravitySpeed += GRAVITY * deltaTime * this.mass;
        if (this.gravitySpeed > SIZE * 2)
            this.gravitySpeed = SIZE * 2;
        this.vel.y += this.gravitySpeed + this.gravitySpeed * 2;
        if (!this.isGrounded && this.vel.y > 0)
            this.vel.x *= 1.1;
        this.vel.multiply(0.9);
        this.pos.x += this.vel.x * deltaTime;
        this.pos.y += this.vel.y * deltaTime;
        if (this.pos.y + this.r > WORLD_HEIGHT) {
            this.pos.y = WORLD_HEIGHT - this.r;
            this.vel.y = -this.vel.y;
            this.isGrounded = true;
        }
        else if (this.pos.y - this.r < 0) {
            this.pos.y = 0 + this.r;
            this.vel.y = -this.vel.y;
        }
        if (this.pos.x + this.r > WORLD_WIDTH) {
            this.pos.x = WORLD_WIDTH - this.r;
            this.vel.x = -this.vel.x;
        }
        else if (this.pos.x - this.r < 0) {
            this.pos.x = 0 + this.r;
            this.vel.x = -this.vel.x;
        }
        return this;
    }
    render(ctx) {
        ctx.save();
        ctx.resetTransform();
        ctx.fillStyle = "darkred";
        ctx.fillRect(0, 0, WIDTH, SIZE);
        ctx.fillStyle = "lightgreen";
        ctx.fillRect(0, 0, this.health, SIZE);
        ctx.fillStyle = "white";
        ctx.font = "36px Arial";
        ctx.fillText(this.score.toString(), SIZE / 2, HEIGHT - SIZE / 2);
        if (this.mouseDown) {
            const { x, y } = this.mousePos;
            const g = ctx.createLinearGradient(WIDTH / 2, HEIGHT / 2, x, y);
            g.addColorStop(0, `rgba(255, 255, 255, ${this.isGrounded ? "1" : "0"})`);
            g.addColorStop(1, "rgba(255, 255, 255, 0)");
            ctx.strokeStyle = g;
            ctx.lineWidth = SIZE * 2;
            ctx.beginPath();
            ctx.moveTo(WIDTH / 2, HEIGHT / 2);
            ctx.lineTo(x, y);
            ctx.closePath();
            ctx.stroke();
            if (this.isGrounded) {
                this.vel.y *= 0.25;
                this.health--;
            }
        }
        ctx.restore();
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.r, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();
        return this;
    }
    shoot() {
        if (this.isGrounded) {
            this.isGrounded = false;
            this.gravitySpeed = 0;
            let { x, y } = this.mousePos;
            x = x - WIDTH / 2;
            y = y - HEIGHT / 2;
            let v = new Vector(x, y).multiply(2);
            if (v.magnitude > HEIGHT)
                v = v.normalized.multiply(HEIGHT);
            this.vel.add(v.multiply(10));
            this.health -= 100;
        }
    }
    getMousePos(canvas, e) {
        const rect = canvas.getBoundingClientRect();
        const scaleX = WIDTH / rect.width;
        const scaleY = HEIGHT / rect.height;
        return {
            x: (e.clientX - rect.left) * scaleX,
            y: (e.clientY - rect.top) * scaleY,
        };
    }
}
//# sourceMappingURL=Player.js.map