// Create remove button to append to each list
const listItem = document.getElementsByTagName('LI');
for(let i = 0; i < listItem.length; i++) {
	let button = document.createElement('BUTTON');
	let removeTxt = document.createTextNode('\u00D7');
	button.className = 'remove';
	button.appendChild(removeTxt);
	listItem[i].appendChild(button);
}

// Button to remove list item
const remove = document.getElementsByClassName('remove');
for(let i = 0; i < remove.length; i++) {
	remove[i].onclick = function() {
		let div = this.parentElement;
		div.style.display = 'none';
	}
}

// When list item is clicked as done, make it a done item by adding the checked class
// 
const list = document.querySelector('ul');
list.addEventListener('click', (e) => {
	if(e.target.tagName === 'LI') {
		e.target.classList.toggle('checked');
	}
}, false);

// Create new list item when the add button is clicked if there is value in the input field
// 
function addListItem() {
	let li = document.createElement('li');
	let itemValue = document.querySelector('#todo-input').value;
	let createItem = document.createTextNode(itemValue);
	li.appendChild(createItem);
	if(itemValue === '') {
		alert('field can not be empty, type todo item');
	} else {
		document.querySelector('#todo-list').appendChild(li);
	}
	document.querySelector('#todo-input').value = '';

	let button = document.createElement('button');
	let removeTxt = document.createTextNode('\u00D7');
	button.className = 'remove';
	button.appendChild(removeTxt);
	li.appendChild(button);

	for(let i = 0; i < remove.length; i++) {
		remove[i].onclick = function() {
			let div = this.parentElement;
			div.style.display = 'none'
		}
	}
}