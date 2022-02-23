// DOM


// window.document windowს არ ვწერთ, ავტომატურად ენიჭება

let newdivelement= document.createElement('div');
newdivelement.textContent = 'hallo';
newdivelement.setAttribute('class', 'child-block');
newdivelement.setAttribute('id', 'anotherdiv');
newdivelement.style.backgroundColor = 'blue';

document.body.appendChild(newdivelement);
//apendchild / როცა ერთ ელემენტს მეორეში ვსვამთ


document.getElementById("wraper-block").appendChild(newdivelement);


let=newAelement = document.createElement('a');
newAelement.setAttribute('href', 'https://www.google.com/');
newAelement.setAttribute('target', '_blank');

document.getElementById('wraper-block').appendChild(newdivelement)