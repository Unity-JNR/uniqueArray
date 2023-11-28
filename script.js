let array_a=[ 1 , 2, 3, 7]
let array_b=[ 1 , 2, 3 ,4, 5, 6]
function difference(arr1, arr2) {
  // Concatenate the two arrays
  const combinedArray = arr1.concat(arr2);
  // Filter out duplicates
  const uniqueArray = combinedArray.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
  // Map the elements to strings
  const result = uniqueArray.map(String);
  return result;
}
const result = difference(array_a, array_b);
console.log(result.sort());


let arrayc = [1, 2, 3, 4, 5]
let arrayd = [1, [2], [3, [[4]]],[5,6]]


function reducearray(arr) {
    return arr.reduce((flat, item) => {
      return flat.concat(Array.isArray(item) ? reducearray(item) : item);
    }, []);//[] initial  value of flat
  }
  
  function differences(arr1, arr2) {
    const reduce = reducearray(arr1).map(item => String(item));
    const reduce1 = reducearray(arr2).map(item => String(item));
  
    const uniqueElements = [...new Set([...reduce, ...reduce1])];
  
    return uniqueElements;
  }
  
  console.log(differences(arrayc,arrayd));
  