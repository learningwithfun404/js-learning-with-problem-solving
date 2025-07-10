const student = {
    name : "monjur",
    role : 2545,
    department : "CSE",
    profession : "DEV",
    email : "test@gmail.com",
    address : "Moulvibazar"
}
 
// for (let key in objectName){
//     statement
// }

for(let key in student){
    console.log(key , student[key])
}