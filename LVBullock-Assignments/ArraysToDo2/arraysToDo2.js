// REVERSE the array in place.
// const originalArray = [1, 2, 3, 4, 5, 6, 7];

// function reverseArray(arr){
//     for(var i = 0; i < Math.floor(arr.length/2); i++){ //must stop at the middle of the array
//         var temp = arr[i]; //save the overwritten value from the left side in a temporary variable
//         arr[i] = arr[arr.length - 1 - i]; //makes it dynamic depending the length of the array, will get the last value -1 of the array.  Will change from the right to the left as i goes from left to right
//         arr[arr.length-1-i] = temp; //save the overwritten value from the right side in a temporary variable
//         console.log(`i is:  ${i} and the array is: ${arr}`);
//     }
//     return (arr);
// }
// console.log(`The original array is:  ${originalArray}.\n`);
// console.log(`This is what happens with each iteration:\n`);
// console.log(`\nThis is the reversed array:  ${reverseArray(originalArray)}`);



// //ROTATE
// function reverseArr(arr){
//     for(var i = 0; i < Math.floor(arr.length/2); i++){ //must stop at the middle of the array
//         var temp = arr[i]; //save the overwritten value from the left side in a temporary variable
//         arr[i] = arr[arr.length - 1 - i]; //makes it dynamic depending the length of the array, will get the last value -1 of the array.  Will change from the right to the left as i goes from left to right
//         arr[arr.length-1-i] = temp; //save the overwritten value from the right side in a temporary variable
//     }

//     return (arr);
// }
// //FROM SOLUTION:
// function rotateArrV2(arr, moveBy) {
//     console.log(`Original Array:  ${arr}`);

//     reverseArr(arr); // Reverse entire array
//     var actualMovementsNeeded;
//     if (moveBy > 0) {
//         actualMovementsNeeded = moveBy % arr.length;
//     } else {
//         actualMovementsNeeded = Math.abs(moveBy) % arr.length;
//     }
//     if (moveBy > 0) {
//         reverseArr(arr,0,actualMovementsNeeded - 1);
//         reverseArr(arr,actualMovementsNeeded, arr.length - 1);
//     } else {
//         reverseArr(arr,0,arr.length-actualMovementsNeeded - 1);
//         reverseArr(arr, arr.length - actualMovementsNeeded,arr.length - 1);
//     }

//     return(arr);
// }
// console.log(`Rotated Array:  ${rotateArrV2([1, 2, 3], 1)}`);

//Using a built in function:
// function rotateArr(arr, shiftBy){
//     for(let x = 0; x < shiftBy; x++){
//         arr.unshift(arr.pop());
//         // console.log(`Rotation #${x + 1}:  ${arr}`); / use if multiple rotations to see what the code is doing


//     }
//     return(arr);
// }
// console.log(`Rotated Array:  ${rotateArr([1, 2, 3], 1)}`);



//FILTER RANGE
// Second version with only one for loop
function filterRangeV2(arr, minVal, maxVal) {
    var nextInd = 0; // Index where the next array value that's from min to max (inclusively) will go
    var arr = [7, 2, 10, 6, 100];
    // Loop through the array
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= minVal && arr[i] <= maxVal) {
            arr[nextInd] = arr[i];
            nextInd++; // Increment index for next valid value found
        }
    }
    arr.length = nextInd; // Chop off excess values
    return (arr);
}


console.log(filterRangeV2([arr], 2, 100));

// // First version
// function concatArrays(arr1, arr2) {
//     var newArr = [];
//     var curInd = 0; // Current index for where we'll put new items
//     // Loop through the first array and push those items into the new array
//     for (var i = 0; i < arr1.length; i++) {
//         // newArr.push(arr1[i]);
//         newArr[curInd] = arr1[i];
//         curInd++;
//     }
//     // Loop through the first array and push those items into the new array
//     for (var i = 0; i < arr2.length; i++) {
//         // newArr.push(arr1[i]);
//         newArr[curInd] = arr2[i];
//         curInd++;
//     }
//     return newArr;
// }

// // Second version - with redundancy removed - using a helper function we define
// function concatArraysV2(arr1, arr2) {
//     var newArr = [];
//     buildFrom(newArr,arr1); // Add values from first array to the new array
//     buildFrom(newArr,arr2); // From second array
//     return newArr;
// }

// function buildFrom(arrayToBuild, arrayFrom) {
//     var curInd = arrayToBuild.length; // Starting index
//     // Loop to add values to new array
//     for (var i = 0; i < arrayFrom.length; i++) {
//         arrayToBuild[curInd] = arrayFrom[i];
//         curInd++;
//     }
// }