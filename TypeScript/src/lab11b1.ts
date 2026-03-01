type PointType = { 
x: number; 
y: number; 
}; 
function printCoord(pt: PointType) { 
console.log("X :"  + pt.x); 
console.log("Y :" + pt.y); 
} 
printCoord({ x: 100, y: 100 }); 