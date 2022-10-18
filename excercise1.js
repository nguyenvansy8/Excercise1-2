let array1 = [0, 10, 1, 99, 9, 8, 79, 91, 22, 32, 12];
let array2 = [99, 19, 29, 39, 11, 21, 32, 33, 35, 50, 60, 90];
let array3 = [1, 10, 19, 11, 13, 16, 19];

function sort(arr) {
  arr = arr.sort();
  const max = arr.toString();
  var newchar = "";
  mystring = max.split(",").join(newchar);
  newArray = parseInt(mystring);

  return newArray;
}

sort(array1);
sort(array2);
sort(array3);
