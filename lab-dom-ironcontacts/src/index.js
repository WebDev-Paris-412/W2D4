// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random")
const tableBody = document.querySelector("tbody#contacts")
const template = document.querySelector("#contact-row")
// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
// const randomIndex = Math.floor(Math.random() * contacts.length);
// const splicedArr = contacts.splice(randomIndex, 1);

// // Get the element from the spliced array
// const randomContact = splicedArr[0];

// const exampleRow = document.createElement("tr");
// exampleRow.innerHTML = `
//   <td>
//     <img src="${randomContact.pictureUrl}" />
//   </td>
//   <td> ${randomContact.name} </td>
//   <td> ${randomContact.popularity.toFixed(2)} </td>
//   <td>
//     <button class="btn-delete">Delete</button>
//   </td>
//   <td>
//     <button class="btn-like">
//       <img src="./images/icon.png" alt="like" />
//     </button>
//   </td>
// `;

// tableBody.appendChild(exampleRow);

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.

buttonAddRandom.addEventListener("click", createRandomContact)

const threeContacts = contacts.splice(0, 3)

function createRandomContact() {
	const randomIndex = Math.floor(Math.random() * contacts.length)
	const splicedArr = contacts.splice(randomIndex, 1)

	// Get the element from the spliced array
	const randomContact = splicedArr[0]
	createContact(randomContact)
}

// threeContacts.forEach(createContact)
threeContacts.forEach(createContact)

function createContact(contact) {
	const clone = template.content.cloneNode(true)
	const img = clone.querySelector("td > img")
	img.src = contact.pictureUrl

	// console.log(clone)
	clone.querySelector("td:nth-child(2)").textContent = contact.name
	clone.querySelector("td:nth-child(3)").textContent =
		contact.popularity.toFixed(2)
	const deleteButton = clone.querySelector(".btn-delete")
	const likeButton = clone.querySelector(".btn-like")

	deleteButton.addEventListener("click", deleteRow)
	likeButton.addEventListener("click", () => {
		likeButton.classList.toggle("selected")
	})
	tableBody.append(clone)
}

/**
 *
 * @param {Event} event
 */
function deleteRow(event) {
	console.log(event.target)
	event.target.closest("tr").remove()
}

function toggleFavorite(event) {
	// // console.log(event.currentTarget)
	// const button = event.currentTarget
	// console.log(button)
	// if (button.classList.contains("selected")) {
	// 	button.classList.remove("selected")
	// } else {
	// 	button.classList.add("selected")
	// }
}
// function createContact (contact) {}
// Your code goes here ...

// ITERATION 2 - Delete Buttons

// Your code goes here ...

// ITERATION 3 - Like Buttons

// Your code goes here ...

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

let number = document.querySelector("gbrjke")

/**
 *
 * @param {number} a
 * @param {string} b
 */
function sum(a, b) {}

// sum(3, function () {})
