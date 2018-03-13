//console.log("Ejercicio 1 \n");
// var x = 5;
// console.log(x);
// function testOne(){
// 	console.log(x);
// }
// testOne()

// console.log("Ejercicio 2 \n");
// var x = 5;
// console.log(x);
// function testOne(){
// 	var y = 10;
// 	y = x + 14;
// 	console.log(y);
// }
// testOne()
// console.log(y);

// console.log("Ejercicio 3 \n");
// var x = 5;
// console.log(x);
// function testOne(){
// 	x = x + 10;
// 	console.log(x); // I can change values of var inside a function
// }
// testOne();
// console.log(x); // 15

// console.log("Ejercicio 4 \n");
// var x = 5;
// console.log(x);
// function testOne(){
// 	var x = 10; // It does not overwrite var x from outer scope
// 	console.log(x);
// }
// testOne();
// console.log(x); // 5

// console.log("Ejercicio 5");
// var x = 5;
// var z = 1;
// console.log(x); //5
// function testOne(){
// 	var x = 2;
// 	var y = 5;
// 	var z = 2;
// 	console.log(x); // 2
// 	if (x < 5){ //true
// 		var z = 10; // block can change outer scope
// 		console.log(z + y); // 15
// 	}
// 	console.log(z); //10
// }
// testOne();
// console.log(x); // 5

// Now with let and const

// console.log("Ejercicio 1");
// let e1 = 5;
// console.log(e1); // 5
// function testOne(){
// 	e1 = e1 + 3; 
// 	console.log(e1); //8
// }
// testOne();
// console.log(e1); //8

// console.log("Ejercicio 2");
// const e2 = 5;
// console.log(e2); // 5
// function testOne(){
// 	e2 = e2 + 3; // error, const can not be changed
// 	console.log(e2);
// 
// }
// testOne();
// console.log(e2); //8

// console.log("Ej 3");
// const x3 = 5;
// let z3 = 1;
// console.log(x3); // 5
// function testOne(){
// 	let z3 = 2;
// 	console.log(z3); // 2
// 	if (x3 >= 5){
// 		let z3 = 10; // block scope, it can not change outer scope
// 		console.log(z3); //10
// 	}
// 	console.log(z3); // 2
// }
// testOne();

// Mutabilidad
// In JS, only objects and arrays are mutable

// console.log("Ejemplo 1");
// const exampleObject = {
// 	indentifier: 'IIC2513',
// 	name: 'Tec y Aplic Web'
// };
// console.log(exampleObject);
// exampleObject.teacher = 'Gabriel Vidal';
// console.log(exampleObject);

// Arrays
const exampleArray = [1, 2, 3, 4, 5];
console.log(exampleArray);
exampleArray.push(6);
console.log(exampleArray);
const newExampleArray = [9,8 ,7 ,6];
exampleArray = newExampleArray; // Error, assignment to constant variable
