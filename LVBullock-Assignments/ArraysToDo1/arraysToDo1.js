// //PUSH FRONT
var pushFrontArray = [3, 9, 56, 79, 28]; //original array
var pushNum = 100; //number to be pushed to the front of the original array

console.log(`\nOriginal Array:  ${pushFrontArray}`); 
console.log(`Number to push to the front:  ${pushNum}`);

    for (var x = pushFrontArray.length-1; x >= 0; x--){ //move to the left by 1 as long as the length the index(?) is greater than or equal to 0 
        pushFrontArray[x + 1] = pushFrontArray[x]  //shifts the array 1 space to the right(?)
    }

pushFrontArray[0] = pushNum; //sets new index 0 to 100

console.log(`Array after push:  ${pushFrontArray}`);

// //ALTERNATIVE USING A FUNCTION
// function pushFront(pushFrontArray, pushNum){
//     console.log(`Original Array:  ${pushFrontArray}`);
//     console.log(`Number to push to the front:  ${pushNum}`);

//     for (var x = pushFrontArray.length-1; x >= 0; x--){ //
//         pushFrontArray[x + 1] = pushFrontArray[x]
//     }
//     pushFrontArray[0] = pushNum;
//     console.log(`Array after push:  ${pushFrontArray}`);
// }
// pushFront([3, 9, 56, 79, 28],100) //pushes last number to the front of the array


// //POP FRONT
var popFrontArray = [12, 0, 78, 62, 1000]; //original array
var popIndex = popFrontArray[0]; // The value we will return

console.log(`\nOriginal Array:  ${popFrontArray}`); 
console.log(`Value to pop:  ${popIndex}`);

    // Loop through the array - starting at index 1
    for (var p = 1; p < popFrontArray.length; p++) {
        popFrontArray[p-1] = popFrontArray[p];
    }
    popFrontArray.pop(); // Remove the last value

console.log(`Array after pop:  ${popFrontArray}`);


// //POP FRONT USING A FUNCTION:
// function popFrontArray(arr) {
//     console.log(`Original Array:  ${arr}`); 

//     var popIndex =  arr[0]; // The value we will return
//     // Loop through the array - starting at index 1
//     for (var p = 1; p < arr.length; p++) { //moving the values to the (right) back by 1?
//         arr[p-1] = arr[p];
//     }

//     arr.pop(); // Remove the last value

//     console.log(`Index to pop:  ${popIndex}`);
//     console.log(`Array after pop:  ${arr}`);

// }
// popFrontArray([12, 0, 78, 62, 1000]);


// //INSERT AT
var insertAtArray = [12, 0, 78, 62, 1000];
var index = 3;
var insertNum = 81;

console.log(`\nOriginal Array:  ${insertAtArray}`); 
console.log(`Insert:  ${insertNum} at index ${index}`);

for (var m = insertAtArray.length-1; m >= index; m--){
    insertAtArray[m + 1] = insertAtArray[m];
}

insertAtArray[index] = insertNum;
console.log(`Array after insert:  ${insertAtArray}`);


//REMOVE AT  

//Totally wrong?????????????????????????????????
// var removeAtArray = [12, 0, 78, 62, 1000];
// var index = 3;
// var removeNum = 62;

// console.log("\n" + `Original Array:  ${removeAtArray}`); 
// console.log(`Remove:  ${removeNum} from index ${index}`);

// for (var n = removeAtArray.length-1; n >= index; n++){
//     removeAtArray[n + 1] = removeAtArray[n];
// }

// removeAtArray[index] = removeNum;
// console.log(`Array after removal:  ${removeAtArray}`);

//SOLUTION
function removeAt(removeArray, ind) {

    console.log(`\nOriginal Array:  ${removeArray}`)
    console.log(`Index to remove:  ${ind}`)
    ind = Math.floor(ind); // Rounds the index down
    // If index is out of bounds
    if (ind >= removeArray.length || ind < 0) {
        return null; // Return an arbitrary value
    }
    var returnVal = removeArray[ind]; // The value we will return
    // Loop through the array - starting at the index after the one whose value will be removed
    for (var z = ind + 1; z < removeArray.length; z++) {
        removeArray[z-1] =removeArray[z];
    }
    removeArray.pop(); // Remove the last value
    // arr.length--; // Alternate way to remove last value
    console.log(`Array after removing index ${ind}:  ${removeArray}`)
    return returnVal;
}

removeAt([30, 16, 59, 77, 200, 7], 4);

//SWAP PAIRS
swapPairsArray = [1, 2, 3, 4];
swapPairsArray2 = ["Brendan", true, 42];

function SwapPairs(arr){
    var temp = 0;

    for (var i = 0; i<arr.length-1; i = i + 2){
        temp = arr[i]
        // console.log("temp is " + temp);
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
    return arr;
}

console.log(`\nArray before swap1:  ${swapPairsArray}`)
SwapPairs(swapPairsArray);
console.log(`Array after swap1:  ${swapPairsArray}`);

console.log(`Array before swap2:  ${swapPairsArray2}`)
SwapPairs(swapPairsArray2);
console.log(`Array after swap2:  ${swapPairsArray2}`);


// //REMOVING DUPLICATES
// //resource:  https://www.javascripttutorial.net/array/javascript-remove-duplicates-from-array/
var dupesArray = [82, 16, 34, 18, 82, 34, 16]

var uniqueNums = [...new Set(dupesArray)];
console.log(`\nOriginal Array:   ${dupesArray}`);

console.log(`Array after removing duplicates: ${uniqueNums}\n`);


// //resource:  https://levelup.gitconnected.com/7-ways-to-remove-duplicates-from-array-in-javascript-cea4144caf31

var arr = ["banana", "apple", "orange", "lemon", "apple", "lemon"];
function removeDuplicates(data){
    return[...new Set(data)]
}
console.log(`Original Array:  ${arr}`);
console.log(`Array after removing duplicates:  ${removeDuplicates(arr)}`);



var users = [
    { name: "jay", age: 25, address: '123 Fix & Flip Road' },
    { name: "larry", age: 23, address: '456 Wholesale Blvd' },
    { name: "jordyn", age: 22, address: '123 Fix & Flip Road' },
    { name: "lakia", age: 30, address: 'Ad' },
    { name: "jay", age: 28, address: 'Ad' },
    { name: "lakia", age: 36, address: '456 Wholesale Blvd' },
]
console.log("\nArray of objects before removing duplicates by name:")
console.log([users]);
function uniqByKeepLast(data, key){
    return [
        ...new Map(
            data.map(x => [key(x), x])
        ).values()
    ]
}

// console.log(JSON.stringify(uniqByKeepLast(users, location => location.address))); //prints to console in single line
console.log("\nArray of objects after removing duplicates by name:")
console.log((uniqByKeepLast(users, person => person.name)));//looks like it removes the first instance and keeps the 2nd
