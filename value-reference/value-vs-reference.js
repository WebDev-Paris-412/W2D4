let a = 5
let b = a

console.log(a, b)
b = 7

console.log(a, b)

// const anArray = [1, 2, 3]
// //! This is not the way to create a copy.
// const anotherArray = anArray
// const aShallowCopy = [...anArray]
// const aMaybeIdenticalArray = [1, 2, 3]
// console.log(anArray === anotherArray)
// console.log(anArray === aMaybeIdenticalArray)

// anArray[1] = "Weird things happening!"

// console.log(anArray, anotherArray)

// console.log(aShallowCopy)

const students = [
	{ name: "Bob", skills: ["skateboarding"] },
	{ name: "Alice", skills: ["bouldering", "hiking"] },
]

//! This is a shallow copy, meaning that only the first layer does not have references to the original
const copy = [...students, { name: "John" }]

students[0].age = 25

console.log(copy)

//! deep copy
const deepCopy = structuredClone(students)
deepCopy[1].age = 29
const aStringObject = `{"cat": "Ileo"}`
console.log(JSON.stringify(deepCopy))
console.log(typeof JSON.parse(aStringObject))

console.log(students)

const animals = ["Giraffe", "Lion"]
const seaAnimals = ["Whale", "Catfish", "Ray"]

const allAnimalsTogether = [...animals, "Parrot", ...seaAnimals, "Eeet voila!"]
console.log(allAnimalsTogether)

const cat = {
	name: "Illiu",
	colors: ["black", "green"],
	meow: function () {
		console.log(this.name + " : Meow")
	},
}

cat.meow()
const anotherGreenCat = { ...cat, name: "Boo", name: "Dragon" }
// anotherGreenCat
anotherGreenCat.meow()

const newStudents = students.map((student) => {
	const oneStudent = { ...student, age: 29, hobbies: [] }
	return oneStudent
})

console.log(newStudents)
