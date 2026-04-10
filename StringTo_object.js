//Convert Object to String
const user = {
    name: "Piyush",
    age: 22,
    profession: "FullStack Developer",
    Company: "Searching...."
}

//Keep in mind Data should be Serialize means data should not have any kind of undefined, function etc.
/*{
  name: 'Piyush',
  age: 22,
  profession: 'FullStack Developer',
  Company: undefined
}
{"name":"Piyush","age":22,"profession":"FullStack Developer"} */
const jsonString = JSON.stringify(user);


//Convert String to Object

let stringData = ('{"name":"Piyush","age":22,"profession":"FullStack Developer","Company":"Searching...."}');

const ObjUser = JSON.parse(stringData);

console.log(ObjUser);