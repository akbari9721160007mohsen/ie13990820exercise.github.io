// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title =  123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[9]);
// document.all[10].textContent = 'Hello';
// // console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);
////////////////////////////////////////////////////////////////
// slide 4
console.log(document.getElementById('article-head'));
var headerTitle = document.getElementById('article-head');
var header = document.getElementById('article-box-head');
console.log(headerTitle);
headerTitle.textContent = 'Hello';
headerTitle.innerText = 'Goodbye';
console.log(headerTitle.innerText);
headerTitle.innerHTML = '<h3>Hello</h3>';
header.style.borderBottom = 'solid 3px #000';
//////////////////