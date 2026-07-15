
// Hellow
//  console.log("Hi Gourav");


// //Add 2 number and print on console.log
function addSum(a,b){
    return a+b;
}

// console.log(addSum(1,5));



// // check even and odd number 
function oddEven(number){
    if(number%2 == 0){
        console.log("Even Number");
    }
    else{
        console.log("Odd number")
    }
}

// oddEven(5);





// //check the smaller number from 2 numbers

function smallNumber(number1,number2){
    if(number1>number2){
        console.log(number1,"is big number");
    }
    else{
        console.log(number2,"is bigger number")
    }
    //ORRRR
    // return number1>number2?console.log(number1): console.log(number2);
}

// smallNumber(7,5);







//Print number by the Loop 
 function printNumber(num){
  for(i=1;i<=num;i++){
    console.log(i);
  }
}

// printNumber(20);





// //Sum of the Array 

function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return console.log(sum);
}

// sumArray([1, 2, 3, 4])





// Count Caracter from String 

function stringCounter(str){
  return console.log(str.length);
}
//     stringCounter("gouravJavascript");




// find the indexs of element 

function loop(num){

   
    for(let i=0;i<num;i++){

       for(let j =0;j<i;j++){
         console.log(i +" and "+j);
       } 
    }

}


// loop(5);