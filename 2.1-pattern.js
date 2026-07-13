// *****
// *****
// *****
// *****
// *****
function star(num){
for (let i =0;i<num;i++){
    let row = "";
    for (let j=0;j<num;j++){
        row += "*";
    }    
    console.log(row);
}
}


//star(5);



// *
// **
// ***
// ****
// *****

function secondStar(num){
 for (let i =0;i<num;i++){
    let row = "";
    for (let j=0;j<=i;j++){   //j<i+1 ==== j<=i 
        row += "*";
    }   
     console.log(row);
}

}

// secondStar(5);



// 1
// 12
// 123
// 1234
// 12345

function numberPrint(num){
 for (let i =0;i<num;i++){
    let row = "";
    for (let j=0;j<=i;j++){   
        row += j+1;
    }   
     console.log(row);
}

}

// numberPrint(5);

// 1
// 22
// 333
// 4444
// 55555

function secondNumberPrint(num){
 for (let i =0;i<num;i++){
    let row = "";
    for (let j=0;j<=i;j++){   
        row += i+1;
    }   
     console.log(row);
}

}

// secondNumberPrint(8);


// 12345
// 1234
// 123
// 12
// 1

function thirdNumPrint(num){
 for (let i =0;i<num;i++){
    let row = "";
    for (let j=0;j<num-i;j++){   
        row += j+1;
    }   
     console.log(row);
}
}

// thirdNumPrint(5);



// *****
// ****
// ***
// **
// *
function thirdStarPrint(num){
 for (let i =0;i<num;i++){
    let row = "";
    for (let j=0;j<num-i;j++){   
        row += "*";
    }   
     console.log(row);
}
}

// thirdStarPrint(5); 



//     *
//    **
//   ***
//  ****
function fourthStarPattern(num){
    //i start form 1
    // for(let i=1;i<num;i++){
    //     let row="";
    //     for(let j=0;j<num-i;j++){
    //         row += " ";
    //     }
    //     for(let k=0;k<i;k++){
    //         row += "*";
    //     }
    //     console.log(row);
    // }

    // i start from 0
     for(let i=0;i<num;i++){
        let row="";
        for(let j=0;j<num-(i+1);j++){
            row += " ";
        }
        for(let k=0;k<i+1;k++){
            row += "*";
        } 
        console.log(row);
    }
}

// fourthStarPattern(5);


// 1
// 10
// 101
// 1010

function toggle(num){
    for(let i=0;i<num;i++){
        let row = ""
        let toggle = 1;
        for(let j=0;j<i;j++){
            row+=toggle;
            if(toggle){
                toggle=0
            }else{
                toggle=1;
            }
        }
        console.log(row)
    }
}

// toggle(5);


// 1
// 01
// 010
// 1010
// 10101
// 010101
// 0101010

function toggleS(num){
     let toggle = 1;
    for(let i=0;i<num;i++){
        let row = ""
       
        for(let j=0;j<i;j++){
            row+=toggle;
            if(toggle){
                toggle=0
            }else{
                toggle=1;
            }
        }
        console.log(row)
    }
}

toggleS(8);
