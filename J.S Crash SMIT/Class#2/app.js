// var a = "abc";
// var b = "123";
// var c = a+b;

// alert(c);


// let user = +prompt("Enter Number");
// let compNum = Math.round(Math.random() * 10);
// if(user === compNum){

//     document.write("You Won");
// }else{document.write("You Lose!" + compNum)}


// let user = +prompt("Even or Odd");
// let compNum = Math.round(Math.random() * 10);
// if(compNum % 2 === 0){

//     document.write("You Won");
// }else{document.write("You Lose!" + compNum)}


// let table = 2;

// for(i=2; i<=10; ++i){
//     document.write(table + " * " + i +
//     " =  " + table * i)
// }


// let user = +prompt("put ur number");
// let compNum = Math.round(Math.random(   ) * 10);

// if(user === compNum){
//     document.write("you Won!") + compNum
// }else{document.write( "you lose") + compNum }


// function factorial(num){
//     if(num > 1){
//         return num * factorial(num -1)
//     }
//     return 1
// }
// console.log(factorial(5))

// function greet(student){
//     console.log("Hello " + student )
// }
// greet("GMG")
// greet("Ali")

// function data(fileNo){
//     return "Working on file no= " + fileNo;
// }
// let num = data(9);
// console.log(num);

function saveURL(url){
    return function()
    {fetch(url)
.then(res => res.json())
.then(json => console.log(json))}
}
let data = saveURL('https://dummyjson.com/products/1');
data();