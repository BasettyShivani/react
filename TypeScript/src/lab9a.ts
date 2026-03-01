type Direction = "up" | "down" | "left" | "right";

function Move(dir: Direction): void {
  console.log("Moving", dir);
}
Move("up");    
Move("left");  
Move("down");
Move("right");