function writeCards(names, event){
    let newArray =[];
     for(let i = 0; i < names.length; i++) {

     newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);

     }

     return newArray; 
}


function countDown(number){

let i = 0;

while(i <= 10){
console.log(i++);
}

}
