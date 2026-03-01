interface PointInterface { 
x: number; 
y: number; 
} 
function printCoord(pt: PointInterface) { 
console.log("X :" + pt.x); 
console.log("Y : " + pt.y); 
} 
printCoord({ x: 200, y: 200 });