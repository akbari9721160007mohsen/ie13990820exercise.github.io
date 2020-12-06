

var items = document.getElementsByClassName('article-box');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[2].style.fontWeight = 'bold';
items[3].style.backgroundColor = 'yellow';

// Gives error
//items.style.backgroundColor = '#f4f4f4';

for(var i = 4; i < items.length; i++){
  items[i].style.backgroundColor = '#e0c0c0';
}
