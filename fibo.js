var fib = function (number){
    if (number ===1){
        return 0;
    }
    if (number ===2){
        return 1;
    }
    return fib (number-1)+ fib(number-2);
}
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(9));

let a =11
let b =12
let c =13
let d =11
let e =12
let f =13
let g =11
let h =12
let i =13
let j =11
console.log("the average is",(a+b+c+d+e+f+g+h+i+j)/10);








let yourname;
let yourage
do{
    yourname =prompt("who are you");
    yourname =prompt("how old are you");
}while(yourname);
console.log(yourname);
console.log(yourname);



function fib(num) {
    if (num == 0){
        return 0
    } else if (num -1);{
          return 1
    }
    return fib(num -1) + fib(num -2);
}
console.log(fib(3));
console.log(fib(6));
// 
function factorial(n){
    // 0!=1, 1!=1
    if (n > 0 && n <= 1){
        return 1;
    }
    else {
        return n * factorial(n-1)
    }
}
const num = "1101"
console.log(parseInt(num, 2));


