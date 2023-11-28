let array1=[ 1 , 2, 3, 9]
let array2=[ 1 , 2, 3 ,4, 5, 6]
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
const result = difference(array1, array2);
console.log(result.sort());


let array3 = [1, 2, 3, 4, 5]
let array4 = [1, [2], [3, [[4]]],[5,6]]


function reducearray(arr) {
    return arr.reduce((flat, item) => {
      return flat.concat(Array.isArray(item) ? reducearray(item) : item);
    }, []);//[] initial  value of flat
  }
  
  function diff(arr1, arr2) {
    const reduce = reducearray(arr1).map(item => String(item));
    const reduce1 = reducearray(arr2).map(item => String(item));
  
    const combinedArray = [...new Set([...reduce, ...reduce1])];
  
    return combinedArray;
  }
  
  console.log(differences(array4,array5));
  