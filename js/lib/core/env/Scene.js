import { NameAlreadyExistsError } from "../../types.js";
import Container from "../classes/Container.js";
export default class Scene extends Container {
    constructor(key, ...entities) {
        super(...entities);
        if (!Scene.keys.includes(key)) {
            this.key = key;
            Scene.keys.push(key);
        }
        else {
            console.log(Scene.keys);
            throw new NameAlreadyExistsError(`The key '${key}' already exists. Choose a different key.`);
        }
    }
    static destroy() {
        Scene.keys = [];
    }
}
Scene.keys = [];
//# sourceMappingURL=Scene.js.map