/*const myobj = {
  name: "John",
  age: 30,
  city: "New York"
};
console.log(myobj);
console.log("name" in myobj); // true
//javascript statements
//js variables 
//var
var a = 10;
var b = 20;
var c = a + b;
console.log(c);
//let
let x = 10;
 x =20;
console.log(x);
//const
const pi = 3.14;
//pi = 3.15; //error assignment to constant variable gives error
//if variable is not reassigned use const
//js data types
//string
let str = "satya";
console.log(typeof str);
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.includes("tya"));
console.log(str.startsWith("sa"));
console.log(str.endsWith("ya"));
console.log(str.indexOf("t"));
console.log(str.charAt(2));
console.log(str.substring(1,4));
console.log(str.slice(1,4));
console.log(str.replace("sat","pat"));
console.log(str.split("a"));
//number
let num = 10;
console.log(typeof num);
console.log(num.toString());
console.log(num.toFixed(0));
console.log(num.toExponential(2));*/
/*const arr = [10, 20, 30, 40, 50];
const arr2 = [];
const res= [];
function myfun(value, index, array,arr2) {
    if()
    if(value == 80){
        const temp = arr2;
        res.push(temp);
    }

}
const text = `[
  {
    "name": "France",
    "capital": "Paris",
    "population": 67364357,
    "area": 551695,
    "currency": "Euro",
    "languages": [
      "French"
    ],
    "region": "Europe",
    "subregion": "Western Europe",
    "flag": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg"
  },
  {
    "name": "Germany",
    "capital": "Berlin",
    "population": 83240525,
    "area": 357022,
    "currency": "Euro",
    "languages": [
      "German"
    ],
    "region": "Europe",
    "subregion": "Western Europe",
    "flag": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg"
  },
  {
    "name": "United States",
    "capital": "Washington, D.C.",
    "population": 331893745,
    "area": 9833517,
    "currency": "USD",
    "languages": [
      "English"
    ],
    "region": "Americas",
    "subregion": "Northern America",
    "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
  },
  {
    "name": "Belgium",
    "capital": "Brussels",
    "population": 11589623,
    "area": 30528,
    "currency": "Euro",
    "languages": [
      "Flemish",
      "French",
      "German"
    ],
    "region": "Europe",
    "subregion": "Western Europe",
    "flag": "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg"
  }
]`;
const obj = JSON.parse(text);
console.log(typeof obj);
console.log( Array.isArray(obj));
for(let x in obj){
  for(let y in obj[x]){
    console.log(obj[x][y]);
}
}

const arr = ["10", 20, 30, 40, 50];
const myjson  = JSON.stringify(arr);
console.log(myjson);
*/

function displayDate(){
  let date  = new Date();
  console.log(date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());
}
setInterval(displayDate,1000);


