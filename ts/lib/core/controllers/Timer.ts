import { TimerCallback } from "../../types";

export default class Timer {
  private id: number = 0;
  private _ctx: CanvasRenderingContext2D;
  private deltaTime = 0;
  private lastTime = Date.now();
  public fps: number;
  public callback: TimerCallback;

  /**
   * @param ctx Canvas context to render to.
   * @param fps Frames per second.
   * @param callback Callback.
   */
  constructor(
    ctx: CanvasRenderingContext2D,
    fps: number,
    callback: TimerCallback
  ) {
    this._ctx = ctx;
    this.fps = fps;
    this.callback = callback;
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") this.stop();
      else this.start();
    });
  }

  /**
   * Starts the timer.
   */
  public start() {
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

  /**
   * Stops the timer.
   */
  public stop() {
    window.clearTimeout(this.id);
    this.lastTime = 0;
    this.deltaTime = 0;
  }
}
