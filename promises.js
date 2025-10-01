//callback()

/*function add(callback) {
    let sum = 0;
    for(let i=0;i<10;i++){
        sum += i;   
    }
    callback(sum);
}

add(x =>{console.log(x)});
*/

//promise()
/*let p = new Promise((resolve, reject) => {
    let x = 1;
    if(x == 0) {
        resolve("Success");
    }
    else {
        reject("Failed");
    }
});

p.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
});
*/
//fetch
/*async function myFunction() {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu/');
    let data = await response.json();
    console.log(data.);
    
}
myFunction();
*/
fetch('https://pokeapi.co/api/v2/pokemon/pikachu/')
.then(response => response.json().then(data => console.log(data.keys())));