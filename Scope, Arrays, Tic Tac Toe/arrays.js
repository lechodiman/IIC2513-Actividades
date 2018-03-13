function printArrayElements(array){
	array.forEach(i => console.log(i));
}

function printMatrixElements(matrix){
	matrix.forEach(function(col){
		console.log('Row: ' + matrix.indexOf(col));
		col.forEach(i => console.log(i));
	})
};

function elementsToPowerTwo(array){
	powArray =array.map(elem => Math.pow(elem, 2));
	return powArray;
}

function elementsSum(array){
	let sum = 0;
	for (let i=0; i<=array.length; i++){
		sum += i;
	}
	console.log(sum);
}

function elementsSumWithReduce(array){
	sum = array.reduce(function(val, elem){
		return val + elem;
	})
	console.log(sum);
}

array = [1,2 ,3 ,4, 5];
matrix = [[1, 2,],
		[2, 3],
		[4, 5]];
// printArrayElements(array);
// printMatrixElements(matrix);
// console.log(elementsToPowerTwo(array));
// elementsSum(array);
elementsSumWithReduce(array);