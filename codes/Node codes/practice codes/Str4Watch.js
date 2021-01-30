// string converter for watchview
const prompt = require("prompt-sync")();

// let data = prompt("Enter the String : ");
let data = `ppppppppppppppppppppppppppppp
ppppppppppppppppppppp
ppppppppppppppppppppppppppppppppppppppp
fffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffff
hhhhhhhhhhhhhhhhhhhhhhhhhh
eeeeeeeeeeeeeeeeeeeee
rrrrrrrrrrrrrrrrrrr
ddddddddddddddddddddddddddf`;
let result = "";
//char in line = 32;
let line_count = 0;
let page = [] ;
let  i = 0 
for(i = 0;i<data.length;i++){
	if(line_count==6){
		line_count = 0;
		// page.push(result);
		console.log(result,result.length);
		result = "";
	}else{
		result += data.substring(i,i+31)+" ";
		i+=31;
	}
	line_count++;
}
result = data.slice(i,);
console.log(result,result.length);
