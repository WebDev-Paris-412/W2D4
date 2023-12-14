let a = "5"
const b = "globally available variable"
if (true) {
	let a = "freeee"
	console.log(a)
}
if (true) {
	const localVariable = "test"
	if (true) {
		console.log(localVariable)
		if (true) {
			// ? ? ? ?
			const localVariable = 7
			console.log(localVariable)
		}

		console.log(localVariable)
	}
}

function sum(a, b) {
	return a + b
}
function multiply(a, b) {
	const secret = 5
	function doSomething() {
		const a = "Shadow !"
		const secret = "local one"
	}
	undefined
	return a * b
}
// console["log"]("hey")
const result = multiply(sum(3, 5), multiply(1, 2))

// console.log(i)

// var i = 0

// var i = "hey"
// var i = 5
// var i = {}
// var i = function () {}
let i = 0

for (i = 0; i < 10; i++) {}

if (true) {
	// var i = function () {}
	let i = function () {}
}

console.log(i)
