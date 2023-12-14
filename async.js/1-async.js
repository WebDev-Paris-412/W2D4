// setTimeout(() => {
// 	while (true) {
// 		console.log("Woohoo")
// 	}
// }, 2000)

/**
 * setTimeout(callback, time (ms))
 */
// console.log("before???")
// console.time("timing")
// setTimeout(() => {
// 	console.timeEnd("timing")
// 	console.log("later in time")
// }, 5000)
// console.log("after???")

// console.log("before")
// setTimeout(() => {
// 	console.log("Where am i?")
// }, 0)
// console.log("after")

const person = {
	name: "John",
	age: 21,
	birthday() {
		console.log(`Happy birthday to ${this.name}, I am ${this.age} yo.`)
	},
}

// const intervalId = setInterval(() => {
// 	person.birthday()
// 	if (person.age === 25) {
// 		clearInterval(intervalId)
// 	}
// 	person.age++
// }, 1000)

let i = 0
function generateInterval(time) {
	const timeoutId = setTimeout(() => {
		console.log("test", i++)
		if (time <= 10) {
			return clearTimeout(timeoutId)
		}
		generateInterval(time - 1)
	}, time)
	// setInterval(() => {
	// 	console.log("test", i++)
	// 	time -= 50
	// }, time)
}

generateInterval(200)

const chronometer = document.querySelector("h1")

chronometer.addEventListener("mouseenter", startTheChronometer, { once: true })
let intervalId,
	counter = 10
function startTheChronometer() {
	intervalId = setInterval(() => {
		chronometer.textContent = counter
		if (counter === 0) {
			clearInterval(intervalId)
		}
		counter--
	}, 1000)
}

function getHours(seconds) {}
// :) To discover today :)
function getMinutes(seconds) {}
