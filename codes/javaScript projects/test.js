
let data1 = null;
let text = document.querySelector(".settingContainer");

fetch('pratice.json')
  .then(response => {
   return response.text()
  })
  .then(data => {
   data1 = JSON.parse(data)
   console.log(data1);
  });

// let options = {};

// let id = setInterval(()=>{
//    if(data1){
//       for(item in data1){
//          options[item] = data1[item].values;
//       }
//       text.innerHTML = JSON.stringify(options);
//       clearInterval(id);
//    }
// },50);