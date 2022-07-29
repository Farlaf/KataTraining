//https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript

function deleteNth(arr,n){
  let resArr = [];
  let checker = new Map();

  for (const pic of arr) {
    if (!checker.has(pic)) {
      checker.set(pic,1);
    } else {
      checker.set(pic, checker.get(pic) + 1 );
    }

    if ( checker.get(pic) <= n ) {
      resArr.push(pic);
    }

  }

  return resArr;
}

// Решение:
/*
function deleteNth(arr,x) {
  var cache = {};
  return arr.filter(function(n) {
    cache[n] = (cache[n]||0) + 1;
    return cache[n] <= x;
  });

}
*/

console.log(deleteNth([20,37,20,21], 1));
console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3));