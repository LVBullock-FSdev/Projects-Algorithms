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



//ROTATE
function reverseArr(arr){
    for(var i = 0; i < Math.floor(arr.length/2); i++){ //must stop at the middle of the array
        var temp = arr[i]; //save the overwritten value from the left side in a temporary variable
        arr[i] = arr[arr.length - 1 - i]; //makes it dynamic depending the length of the array, will get the last value -1 of the array.  Will change from the right to the left as i goes from left to right
        arr[arr.length-1-i] = temp; //save the overwritten value from the right side in a temporary variable
    }

    return (arr);
}
//FROM SOLUTION:
function rotateArrV2(arr, moveBy) {
    console.log(`Original Array:  ${arr}`);

    reverseArr(arr); // Reverse entire array
    var actualMovementsNeeded;
    if (moveBy > 0) {
        actualMovementsNeeded = moveBy % arr.length;
    } else {
        actualMovementsNeeded = Math.abs(moveBy) % arr.length;
    }
    if (moveBy > 0) {
        reverseArr(arr,0,actualMovementsNeeded - 1);
        reverseArr(arr,actualMovementsNeeded, arr.length - 1);
    } else {
        reverseArr(arr,0,arr.length-actualMovementsNeeded - 1);
        reverseArr(arr, arr.length - actualMovementsNeeded,arr.length - 1);
    }

    return(arr);
}
console.log(`Rotated Array:  ${rotateArrV2([1, 2, 3], 1)}`);

//Using a built in function:
// function rotateArr(arr, shiftBy){
//     for(let x = 0; x < shiftBy; x++){
//         arr.unshift(arr.pop());
//         // console.log(`Rotation #${x + 1}:  ${arr}`); / use if multiple rotations to see what the code is doing


//     }
//     return(arr);
// }
// console.log(`Rotated Array:  ${rotateArr([1, 2, 3], 1)}`);