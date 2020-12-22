export default class KeyboardInput {
    constructor() {
        this.pos = { x: 0, y: 0 };
        this.isDown = false;
        document.addEventListener("mousedown", () => {
            this.isDown = true;
        });
        document.addEventListener("mouseup", () => {
            this.isDown = false;
        });
        document.addEventListener("mousemove", (e) => {
            this.pos.x = e.clientX;
            this.pos.y = e.clientY;
        });
    }
}
//# sourceMappingURL=MouseInput.js.map