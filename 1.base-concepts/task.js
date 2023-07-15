"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	let discriminant = Math.pow(b, 2) - 4 * a * c;

	if (discriminant < 0) {} else if (discriminant === 0) {
		arr.push(-b / (2 * a));
	} else {
		arr.push((-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a));
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	if (((typeof percent === "number") && (typeof contribution === "number") && (typeof amount === "number") && (typeof countMonths === "number")) === true) {
		percent = (percent / 100) / 12;
		let bodyCredit = amount - contribution;
		let payment = bodyCredit * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
		let Sum = (payment * countMonths).toFixed(2);
		return Number(Sum);
	} else {
		return false;
	}
}