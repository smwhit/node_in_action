var newObject = {};
//or
var newObject = Object.create( null );
//or
var newObject = new Object();

console.log(newObject);

//assigning values and keys
newObject.someKey = "helo world";
console.log(newObject);

var key = newObject.someKey;
console.log(key);

newObject["someKey"] = "Goodbye world";
var key = newObject["someKey"];

Object.defineProperty(newObject, "anotherKey", {
    value: "for more control of the property's behavior",
    writable:true,
    enumerable:true,
    configurable:true
});

console.log(newObject.anotherKey);

var config = {
    writable: true, 
    enumerable: true,
    configurable: true
};

var defineProp = function(obj, key, value) {
    config.value = value;
    Object.defineProperty(obj, key, config);
}

var person = {};
defineProp(person, "car", "Delorean");
defineProp(person, "dob", "1981");
defineProp(person, "likes", "curry");

console.log(person);

Object.defineProperties(newObject, {
    "Name": {
        value: "Simon",
        configurable: true,
        writable: true,
        enumerable:true
    },
    "Address:":{
        value: "NM",
        writable: true
    }
});

var driver = Object.create(person);

defineProp(driver, "topSpeed", 100);

console.log(driver.dob);
console.log(driver.topSpeed);