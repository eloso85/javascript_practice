// //Document Object Model

// //DOM Manipulation

//GetElementById()

const title = document.getElementById('main-heading');
//console.log(title);

//GetElementByClass

const listItem = document.getElementsByClassName('list-items');

//console.log(listItem);

// getElementByTagname()

const liElement = document.getElementsByTagName('li');

//console.log(liElement);

//queryselector() only slects first div

const container = document.querySelector('div');
//console.log(container);

//querySelectorAll()

const allContainers = document.querySelectorAll('div')
//console.log(allContainers);




/* Styling Elements*/

const maintitle = document.querySelector('#main-heading')
title.style.color = 'red';

//console.log(title);


const listItems = document.querySelectorAll('.list-items');


//console.log(listItems);
for(i=0; i < listItems.length; i++){
    listItems[i].style.fontSize = '3rem'
}

/*creating elements */

const ul = document.querySelector('ul')
const li = document.createElement('li');

/*addig element */

ul.append(li)

/**modifying text */

li.innerText = 'X-men';

/*Modifiying attirbutes */

li.setAttribute('id', 'main-heading');
li.removeAttribute('id');

const titleText = document.querySelector('#main-heading');

//console.log(title.getAttribute('id'));

//Classes
li.classList.add('list-items');
//li.classList.remove('list-items');

//console.log(li.classList.contains('list-items'));

/*Remove Elements */

li.remove()


// const firstListItem = document.querySelector('.list-items');
// console.log(firstListItem.innerHTML);
// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);

/*Travers Dom */


//Parent Node traverser

let ulSelect = document.querySelector('ul');

//console.log(ulSelect.parentNode);//show parent node to ul
// console.log(ulSelect.parentNode.parentNode);moves up parent tree

//console.log(ulSelect.parentElement);
//console.log(ulSelect.parentElement.parentElement);

// const html = document.documentElement;
// console.log(html.parentNode);
// console.log(html.parentElement);

/*Child node traversal */

let ulChild = document.querySelector('ul')

//ulChild.childNodes[1].style.backgroundColor='blue';

let ulChildren = ulChild.children
let ulFirstElementChild = ulChild.firstElementChild;
let ulLastElementChild = ulChild.lastElementChild;

//console.log(ul.childNodes)//indentention are counted as child nodes check code,
//console.log(ul.firstChild)
//console.log(ul.lastChild)

// console.log(ulChildren);
// console.log(ulFirstElementChild);
// console.log(ulLastElementChild);

/*sibling node traversal */

let ulSibiling = document.querySelector('ul');
const div = document.querySelector('div');

console.log(div.childNodes)

console.log(ulSibiling.previousElementSibling);
console.log(ulSibiling.nextElementSibling);


//Event Listeners


































