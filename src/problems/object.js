// var/let/const variableName = {
//     key1 : value1,
//     key2 : value2,
//     ke3 : value2
// }

// object constructor
// var/let/const variableName = new Object()

let studentList = [
  {
    name: "Monjur bokth mojumdar",
    department: "CSE",
    contact: {
      email: "test@gmail.com",
      phone: "01478457874",
    },
  },
  {
    name: "Digotha das",
    department: "Chemistry",
    contact: {
      email: "test1@gmail.com",
      phone: "014578457",
    },
  },
];

studentList[1]["contact"]["email"] = "update@gmail.com"

console.log(studentList)