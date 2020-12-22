import { GameAlreadyExistsError, MethodNotImplementedError, } from "../../types.js";
import Container from "../classes/Container.js";
import Engine from "../controllers/Engine.js";
import Scene from "./Scene.js";
export default class Game extends Container {
    constructor(config, player, ...scenes) {
        super();
        this.scenes = {};
        this._activeScene = null;
        if (!Game.instance) {
            scenes.forEach((scene) => {
                this.scenes[scene.key] = scene;
            });
            this._player = player;
            this.engine = new Engine(0, 0, this._player, this);
            const canvas = document.getElementById(config.id);
            if (canvas instanceof HTMLCanvasElement)
                this._canvas = canvas;
            else
                throw new Error(`Element of id '${config.id}' is not a canvas element.`);
            canvas.width = config.width;
            canvas.height = config.height;
            const ctx = canvas.getContext("2d");
            if (ctx)
                this._ctx = ctx;
            else
                throw new Error("Canvas context '2d' not supported.");
            Game.instance = this;
        }
        else {
            throw new GameAlreadyExistsError("There is a game in place already. Call Game.prototype.destroy if you wish to start a new game.");
        }
    }
    setActive(scene) {
        if (scene instanceof Scene) {
            const s = Object.values(this.scenes).find((s) => s === scene);
            if (s)
                this._activeScene = s;
        }
        else {
            const s = Object.keys(this.scenes).find((k) => k === scene);
            if (s)
                this._activeScene = this.scenes[s];
        }
        return !!this._activeScene;
    }
    update(ctx, deltaTime) {
        throw new MethodNotImplementedError("Game.prototype.update is not implemented and should not be called.");
    }
    render(ctx) {
        throw new MethodNotImplementedError("Game.prototype.render is not implemented and should not be called.");
    }
    get activeScene() {
        return this._activeScene;
    }
    get canvas() {
        return this._canvas;
    }
    get ctx() {
        return this._ctx;
    }
    get player() {
        return this._player;
    }
    destroy() {
        Game.instance = null;
        return Game;
    }
}
Game.instance = null;
//# sourceMappingURL=Game.js.map