//syntax of typescript
const value = 123;
//declaration is similar to JS but with the data type mentioned. Typescript has the data types supported by js and in addition has any, void, tuples, enums as other types,
const strName = "Phaniraj";
const strAddress = "Bangalore";
const nSalary = 56000;
function addFunc(first, second) {
    return first + second;
}
const result = addFunc(123, 234);
console.log(result);
//Typescript cannot be executed directly. U should compile this file to generate the JS file which will be used for distribution and execution.
/*
 Ctrl+` : Open the terminal
 tsc filename.ts : compile the ts file to js file.
 node filename.js: to run the js file
*/ 
