const link = document.querySelector(".link");
let l = prompt("Enter Port number");

link.href = `http://192.168.43.${l}:4444`;