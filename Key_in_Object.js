//Key in Object

//Keep in mind Js think internally object as string
const checkInObject = (key, Object) => {
    if(!Object){
        return false;
    }
    //return key.toString() in Object;
    return Object.hasOwnProperty(key);  //avoid parent or global
}

const obj = { name: "Piyush", age: 22};

console.log(checkInObject("toString", obj))