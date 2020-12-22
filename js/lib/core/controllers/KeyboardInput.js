export default class KeyboardInput {
    constructor() {
        this.keys = {};
        document.addEventListener("keydown", (e) => {
            this.keys[e.code] = true;
        });
        document.addEventListener("keyup", (e) => {
            delete this.keys[e.code];
        });
    }
}
//# sourceMappingURL=KeyboardInput.js.map