// * Next bigger number with the same digits 4 kyu
// * https://www.codewars.com/kata/55983863da40caa2c900004e/train/javascript

/*
Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

12 ==> 21
513 ==> 531
2017 ==> 2071
nextBigger(num: 12)   // returns 21
nextBigger(num: 513)  // returns 531
nextBigger(num: 2017) // returns 2071

If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

9 ==> -1
111 ==> -1
531 ==> -1
nextBigger(num: 9)   // returns nil
nextBigger(num: 111) // returns nil
nextBigger(num: 531) // returns nil
*/

function nextBigger(n){
	let array = n.toString().split('');
	let [i, j, k] = Array(3).fill(array.length - 1);

	//ищем с конца элемент который не возрастает
	while(i > 0 && array[i - 1] >= array[i]) i--;

	//если не нашли - выходим
	if(i <= 0) return -1;

	//ищем первый элемент больше найденного
	while(array[j] <= array[i - 1]) j--;

	//меняем их местами
	[array[i - 1], array[j]] = [array[j], array[i - 1]]

	//меняем местами суффикс
	while (i < k) {
		[array[i], array[k]] = [array[k], array[i]];
		i++;
		k--;
	}

	return +array.join('');
}

// Тесты
console.log( nextBigger(12530) );
console.log( nextBigger(2017) );
console.log( nextBigger(12) );
console.log( nextBigger(513) );
console.log( nextBigger(531) );
console.log( nextBigger(111) );
console.log( nextBigger(9) );

