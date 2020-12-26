import Enemy from "./Enemy.js";

export default class Yellowemy extends Enemy {
  constructor(x: number, y: number) {
    super(x, y);
    this.color = "#ffff00";
  }
}
