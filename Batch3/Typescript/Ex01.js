//syntax of typescript
var value = 123;
//declaration is similar to JS but with the data type mentioned. Typescript has the data types supported by js and in addition has any, void, tuples, enums as other types,
var strName = "Phaniraj";
var strAddress = "Bangalore";
var nSalary = 56000;
function addFunc(first, second) {
    return first + second;
}
var result = addFunc(123, 234);
console.log(result);
//Typescript cannot be executed directly. U should compile this file to generate the JS file which will be used for distribution and execution.
