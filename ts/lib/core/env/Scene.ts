import { NameAlreadyExistsError } from "../../types.js";
import Container from "../classes/Container.js";
import Entity from "../classes/Entity.js";

export default class Scene extends Container {
  public static keys: string[] = [];
  public key: string;

  constructor(key: string, ...entities: Entity[]) {
    super(...entities);
    if (!Scene.keys.includes(key)) {
      this.key = key;
      Scene.keys.push(key);
    } else {
      console.log(Scene.keys);

      throw new NameAlreadyExistsError(
        `The key '${key}' already exists. Choose a different key.`
      );
    }
  }

  public static destroy() {
    Scene.keys = [];
  }
}
