function getArrayParams(...arr) {
	let min = arr[0];
	let max = arr[0];
	let sum = arr[0];
	let avg;

	for (let i = 1; i <= arr.length - 1; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
		sum = sum + arr[i];
	}

	avg = +((sum / arr.length).toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	} else {
		let sum = 0;
		for (let i = 0; i < arr.length; i++) {
			sum = sum + arr[i];
		}
		return sum;
	}
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	} else {
		let min = arr[0];
		let max = arr[0];
		for (let i = 1; i <= arr.length - 1; i++) {
			if (arr[i] > max) {
				max = arr[i];
			}
			if (arr[i] < min) {
				min = arr[i];
			}
		}
		let difference = max - min;
		return difference;
	}
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	} else {
		let sumEvenElement = 0;
		let sumOddElement = 0;
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 == 0) {
				sumEvenElement = sumEvenElement + arr[i];
			} else {
				sumOddElement = sumOddElement + arr[i];
			}
		}
		let difference = sumEvenElement - sumOddElement;
		return difference;
	}
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	} else {
		let sumEvenElement = 0;
		let countEvenElements = 0;
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 == 0) {
				sumEvenElement = sumEvenElement + arr[i];
				countEvenElements = countEvenElements + 1;
			}
		}
		let avg = sumEvenElement / countEvenElements;
		return avg;
	}
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		let result = func(...arrOfArr[i]);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}
	return maxWorkerResult;
}
