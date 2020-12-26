import Enemy from "./Enemy.js";

export default class Pinkemy extends Enemy {
  constructor(x: number, y: number) {
    super(x, y);
    this.color = "#ff8888";
  }
}
