//1
function greatestOfTwo(x,y){
  if( x > y){
      return x
  } else{
      return y
  }
}

//2
function greatestOfThree(a,b,c){
  if(( a > b) && (a > c)){
      return a
  } else if((b > a) && ( b > c)){
      return b
  } else{
      return c
  }
}
//3
function greatestOfFour(a,b,c,d){
  if(( a > b) && (a > c) && (a > d)){
      return a
  } else if((b > a) && ( b > c) && (b > d)){
      return b
  } else if((c > a) && (c > b) && (c > d)){
      return c
  } else{
      return d
  }
}


//4
function leastOfFour(a,b,c,d){
  if(( a < b) && (a < c) && (a < d)){
      return a
  } else if((b < a) && ( b < c) && (b < d)){
      return b
  } else if((c < a) && (c < b) && (c < d)){
      return c
  } else{
      return d
  }
}

console.log(greatestOfTwo(9,8))
console.log(greatestOfThree(5,2,3))
console.log(greatestOfFour(7,2,3,1))
console.log(leastOfFour(38,34,46,80))