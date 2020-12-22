class MethodNotImplementedError extends Error {}

class NameAlreadyExistsError extends Error {}

class GameAlreadyExistsError extends Error {}

type TimerCallback = (ctx: CanvasRenderingContext2D, deltaTime: number) => void;

export {
  MethodNotImplementedError,
  NameAlreadyExistsError,
  GameAlreadyExistsError,
  TimerCallback,
};
