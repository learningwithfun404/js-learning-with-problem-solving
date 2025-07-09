// var/let/const variableName = [value, value,value]


let names = ["Monjur", "Digotha", "Sakil", "Saidul", "Tayef", "Anirban", "joy"];

// 1. splice – removes items and inserts new ones at a specific index

names.splice(2, 2, "Md Sakil", "Md Saidul");
console.log("1. splice:", names);

// 2. slice – returns a portion of the array (original array remains unchanged)
let sliceExample = names.slice(1, 4);
console.log("2. slice:", sliceExample);

// 3. pop – removes the last item from the array

names.pop();
console.log("3. pop:", names);

// 4. push – adds a new item to the end of the array

names.push("Shihab");
console.log("4. push:", names);

// 5. shift – removes the first item from the array

names.shift();
console.log("5. shift:", names);

// 6. unshift – adds a new item at the beginning of the array

names.unshift("Hasan");
console.log("6. unshift:", names);

// 7. reverse – reverses the order of the array

names.reverse();
console.log("7. reverse:", names);

// 8. concat – merges two arrays into a new array
let concatExample = names.concat(["Rakib", "Nadim"]);
console.log("8. concat:", concatExample);

// 9. includes – checks if an item exists in the array (returns true/false)
let includesExample = names.includes("Sakil");
console.log("9. includes (Is 'Sakil' present?):", includesExample);

let includesExample2 = names.includes("Md Sakil");
console.log("9-2. includes (Is 'Sakil' present?):", includesExample2);

// 10. indexOf – returns the index of an item (or -1 if not found)
let indexOfExample = names.indexOf("Anirban");
console.log("10. indexOf (Position of 'Anirban'):", indexOfExample);

// 11. toString – converts the array into a comma-separated string
let toStringExample = names.toString();
console.log("11. toString:", toStringExample);
