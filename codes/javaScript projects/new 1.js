let editorOptions = {};

for(let i = 0;i<a.length;i++){
let info = {};
let name = a[i].children[2].innerText.split(":");
editorOptions[name[0]] = {
name : name[0],
values : name[1].replace(/["]/g,""),
discription : a[i].lastElementChild.innerText

};

};

let ISuggestOptions = {name : "ISuggestOptions"};

for(let i = 0;i<a.length;i++){
let name = a[i].children[2].innerText.split(":");
ISuggestOptions[name[0]] = {
name : name[0],
values : name[1].replace(/["]/g,""),

};

};
let text = document.createElement("textArea");
text.innerText = '"ISuggestOptions" : '+JSON.stringify(ISuggestOptions);
let body = document.querySelector("body");
body.appendChild(text);
text.select();
document.execCommand("copy");
text.remove();
console.log("ISuggestOptions : "+JSON.stringify(ISuggestOptions));
