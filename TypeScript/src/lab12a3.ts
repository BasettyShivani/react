enum Status {
  Success = "SUCCESS",
  Failed = "FAILED",
  Pending = "Pending"
}

enum Direction{
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

function printStatusOrDirection(value: Status | Direction) {
  console.log(value);
}

let currentStatus: Status = Status.Success;
let nextDirection: Direction = Direction.Right;

printStatusOrDirection(currentStatus);
printStatusOrDirection(nextDirection);