import {
  GameAlreadyExistsError,
  MethodNotImplementedError,
} from "../../types.js";
import Container from "../classes/Container.js";
import Entity from "../classes/Entity.js";
import Engine from "../controllers/Engine.js";
import Scene from "./Scene.js";

export default class Game extends Container {
  public scenes: {
    [key: string]: Scene;
  } = {};
  private _activeScene: Scene | null = null;
  public engine: Engine;
  private static instance: Game | null = null;
  private _canvas: HTMLCanvasElement;
  private _ctx: CanvasRenderingContext2D;
  private _player: Entity;

  constructor(
    config: { id: string; width: number; height: number },
    player: Entity,
    ...scenes: Scene[]
  ) {
    super();

    if (!Game.instance) {
      scenes.forEach((scene) => {
        this.scenes[scene.key] = scene;
      });

      this._player = player;

      this.engine = new Engine(0, 0, this._player, this);

      const canvas = document.getElementById(config.id);
      if (canvas instanceof HTMLCanvasElement) this._canvas = canvas;
      else
        throw new Error(
          `Element of id '${config.id}' is not a canvas element.`
        );
      canvas.width = config.width;
      canvas.height = config.height;

      const ctx = canvas.getContext("2d");
      if (ctx) this._ctx = ctx;
      else throw new Error("Canvas context '2d' not supported.");

      Game.instance = this;
    } else {
      throw new GameAlreadyExistsError(
        "There is a game in place already. Call Game.prototype.destroy if you wish to start a new game."
      );
    }
  }

  /**
   * Sets the active scene.
   * @param scene A scene key or scene instance to use.
   */
  public setActive(scene: string | Scene) {
    if (scene instanceof Scene) {
      const s = Object.values(this.scenes).find((s) => s === scene);
      if (s) this._activeScene = s;
    } else {
      const s = Object.keys(this.scenes).find((k) => k === scene);
      if (s) this._activeScene = this.scenes[s];
    }

    return !!this._activeScene;
  }

  public update(ctx: CanvasRenderingContext2D, deltaTime: number): this {
    throw new MethodNotImplementedError(
      "Game.prototype.update is not implemented and should not be called."
    );
  }

  public render(ctx: CanvasRenderingContext2D): this {
    throw new MethodNotImplementedError(
      "Game.prototype.render is not implemented and should not be called."
    );
  }

  public get activeScene() {
    return this._activeScene;
  }

  public get canvas() {
    return this._canvas;
  }

  public get ctx() {
    return this._ctx;
  }

  public get player() {
    return this._player;
  }

  /**
   * Destroys the game so you can make another one!
   */
  public destroy() {
    Game.instance = null;
    return Game;
  }
}
