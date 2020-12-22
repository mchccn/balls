export default class Timer {
    constructor(ctx, fps, callback) {
        this.id = 0;
        this.deltaTime = 0;
        this.lastTime = Date.now();
        this._ctx = ctx;
        this.fps = fps;
        this.callback = callback;
        document.addEventListener("visibilitychange", () => {
            if (document.visibilityState === "hidden")
                this.stop();
            else
                this.start();
        });
    }
    start() {
        const time = Date.now();
        this.deltaTime = time - this.lastTime;
        if (this.deltaTime === time || this.deltaTime === 0)
            this.deltaTime = Math.round(1000 / this.fps);
        this.lastTime = time;
        this.callback(this._ctx, this.deltaTime / 1000);
        this.id = window.setTimeout(() => {
            this.start();
        }, 1000 / this.fps);
    }
    stop() {
        window.clearTimeout(this.id);
        this.lastTime = 0;
        this.deltaTime = 0;
    }
}
//# sourceMappingURL=Timer.js.map