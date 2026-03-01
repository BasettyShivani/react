type PointType = {
  x: number;
  y: number;
};
interface PointInterface {
  x: number;
  y: number;
}
function printPoint(pt: PointType | PointInterface) {
  console.log("X:", pt.x);
  console.log("Y:", pt.y);
}
printPoint({ x: 10, y: 20 });            
printPoint({ x: 100, y: 200 }); 