import Enemy from "./Enemy.js";

export default class Greenemy extends Enemy {
  constructor(x: number, y: number) {
    super(x, y);
    this.color = "#00ee00";
  }
}
