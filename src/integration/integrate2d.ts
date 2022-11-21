export type derivableFunction2D ={
  (x:number,y:number):number
}

export function createDerivableFunction2D(f:derivableFunction2D|number):derivableFunction2D{
  if(typeof f == 'number'){
      return (x,y)=>f
  }else if(typeof f == 'function'){
      return f
  }
}

export function checkAccuracy(acc:number){
  if(acc === 0) throw new Error("accuracy cannot equal zero")
}

/** 
    @description returns the area of a shape bounded by the surface produced by the function, bound inputs, and the xy axis
    @param  f function to integrate
    @param  xLower lower bound of the function on the x-axis
    @param  xUpper upper bound of the function on the x-axis
    @param  yLower lower bound of the function on the y-axis
    @param  yUpper upper bound of the function on the y-axis
    @param  accuracy a number between 0.00000000001 and 1 (smaller is more accurate)
*/

export function integrate2D(f:derivableFunction2D|number,xLower:number,xUpper:number,yLower:number,yUpper:number,accuracy:number){
  let fn = createDerivableFunction2D(f)
  checkAccuracy(accuracy)

  let temp = 0;
  for(let i = xLower;i<(xUpper-accuracy);i+=(xUpper-xLower)*accuracy){
      for(let j = yLower;i<(yUpper-accuracy);i+=(yUpper-yLower)*accuracy){
      //for all xy pairs,
      temp+= ((fn(i,j)+fn(i+accuracy,j)+fn(i,j+accuracy)+fn(i+accuracy,j+accuracy))/4)*((xUpper-xLower)*(yUpper-yLower)*accuracy);
      }
  }
  return temp;
}