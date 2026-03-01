function checkData(x: string | number): void {
  if (typeof x === "string") {
    console.log(x.toUpperCase());     
  } else {
    console.log(Math.round(x));  
  }
}

checkData("woman");   
checkData(15.4);     
