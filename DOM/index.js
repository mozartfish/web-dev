// Examine the document object
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// // get a list of items of the elements
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms[0]); // collection of all the forms
// console.log(document.links); // collection of all the links
// console.log(document.images);

// Get Element by ID
// console.log(document.getElementById('header-title'));
// const header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'hello';
// headerTitle.innerText = 'Goodbye'; // Pays attention to styling
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// Get Elements by Class Name
// const items = document.getElementsByClassName('list-group-item');
// console.log(items)
// console.log(items[1]);
// items[1].textContent = 'Hello 2'
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// for (let i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = 'cornflowerblue';
// }

// Get Element by Tag Name
// const li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// for (let i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = 'cornflowerblue';
// }

// Query Selector
// const header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';
// const input = document.querySelector('input');
// input.value = 'Hello, World';
// const submit = document.querySelector('input[type = "submit"]');
// submit.value = 'SEND';
// const item = document.querySelector('.list-group-item');
// item.style.color = 'red';
// const lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'coral';
// const secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'cornflowerblue';

// Query Selector All
// const titles = document.querySelectorAll('.title');
// titles[0].textContent = 'Hello';
// const odd = document.querySelectorAll('li:nth-child(odd)');
// const even = document.querySelectorAll('li:nth-child(even)');
// // console.log(odd);
// for (let i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = 'cornflowerblue';
//   even[i].style.backgroundColor = 'coral';
// }

// Traversing the DOM
// Parents
const itemList = document.querySelector('#items');
// console.log('parent node:', itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log('grandparent node:', itemList.parentNode.parentNode);
// console.log('the main node:', itemList.parentNode.parentNode.parentNode);
// console.log(itemList.parentElement);

// Children
// text-node represents line break/white space
// console.log(itemList.childNodes);
// console.log(itemList.children)
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// First Child
// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'this is content 1';

// LastChild
// itemList.lastElementChild.textContent = 'this is content last element child';
// console.log(itemList.lastElementChild);

// Siblings
// nextSibling
// console.log(itemList.nextElementSibling);

// next element sibling
// console.log(itemList.nextElementSibling);

// previous sibling
// console.log(itemList.previousElementSibling);

// Events
// const button = document
//   .getElementById('button')
//   .addEventListener('click', buttonClick);

// function buttonClick(e) {
//   console.log('button clicked');
//   //   document.getElementById('header-title').textContent = 'Changed';
//   //   document.querySelector('#main').style.backgroundColor = 'orange';
//   //   console.log(e);
//   console.log(e.target);
//   console.log(e.target.id);
//   console.log(e.target.className);
//   console.log(e.target.classList);
//   console.log(`client mouse position: ${e.clientX}, ${e.clientY}`);
//   console.log(`mouse position: ${e.offsetX}, ${e.offsetY}`);
//   console.log(e.altKey);
//   console.log(e.ctrlKey);
//   console.log(e.shiftKey);
// }

const button = document.getElementById('button');
// button.addEventListener('mousedown', runEvent);
button.addEventListener('mouseup', runEvent);
function runEvent(e) {
  console.log('Event Type: ' + e.type);
}
