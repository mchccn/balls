export default class Vector {
    constructor(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }
    *[Symbol.iterator]() {
        yield this.x;
        yield this.y;
    }
    negate() {
        this.x = -this.x;
        this.y = -this.y;
        return this;
    }
    add(v) {
        if (v instanceof Vector) {
            this.x += v.x;
            this.y += v.y;
        }
        else {
            this.x += v;
            this.y += v;
        }
        return this;
    }
    subtract(v) {
        if (v instanceof Vector) {
            this.x -= v.x;
            this.y -= v.y;
        }
        else {
            this.x -= v;
            this.y -= v;
        }
        return this;
    }
    multiply(v) {
        if (v instanceof Vector) {
            this.x *= v.x;
            this.y *= v.y;
        }
        else {
            this.x *= v;
            this.y *= v;
        }
        return this;
    }
    divide(v) {
        if (v instanceof Vector) {
            if (v.x != 0)
                this.x /= v.x;
            if (v.y != 0)
                this.y /= v.y;
        }
        else {
            if (v != 0) {
                this.x /= v;
                this.y /= v;
            }
        }
        return this;
    }
    dot(v) {
        return this.x * v.x + this.y * v.y;
    }
    cross(v) {
        return this.x * v.y - this.y * v.x;
    }
    get magnitude() {
        return Math.sqrt(this.dot(this));
    }
    get normalized() {
        return this.divide(this.magnitude);
    }
    get angle() {
        return -Math.atan2(-this.y, this.x);
    }
    angleTo(a) {
        return Math.acos(this.dot(a) / (this.magnitude * a.magnitude));
    }
    clone() {
        return new Vector(this.x, this.y);
    }
    static negate(v) {
        return new Vector(-v.x, -v.y);
    }
    static add(a, b) {
        if (b instanceof Vector)
            return new Vector(a.x + b.x, a.y + b.y);
        else
            return new Vector(a.x + b, a.y + b);
    }
    static subtract(a, b) {
        if (b instanceof Vector)
            return new Vector(a.x - b.x, a.y - b.y);
        else
            return new Vector(a.x - b, a.y - b);
    }
    static multiply(a, b) {
        if (b instanceof Vector)
            return new Vector(a.x * b.x, a.y * b.y);
        else
            return new Vector(a.x * b, a.y * b);
    }
    static divide(a, b) {
        if (b instanceof Vector)
            return new Vector(a.x / b.x, a.y / b.y);
        else
            return new Vector(a.x / b, a.y / b);
    }
    static dot(a, b) {
        return a.x * b.x + a.y * b.y;
    }
    static cross(a, b) {
        return a.x * b.y - a.y * b.x;
    }
}
//# sourceMappingURL=Vector.js.map