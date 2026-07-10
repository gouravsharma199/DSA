
//    *
//   **
//  ***
// ****
//*****


function newStar(n){
    for(let i=0;i<n;i++){
    
        let row = "";
        for(let j=0;j<n-(i+1);j++){
            row = row+" ";
            
        }
        for(let k=0;k<i+1;k++){
                row = row+"*";
            }
        console.log(row) ;
    
    }
}
// newStar(5);

// 1
// 10
// 101
// 1010

function toggle01(num){
    for(let i=0;i<num;i++){
        let row = "";
        let toggle = 1;
        for(let j=0;j<i+1;j++){
            row += toggle
            if(toggle == 1){
                toggle = 0;
            }else{
                toggle = 1;
            }
        }
        console.log(row);
    }
}

// toggle01(5);

// 1
// 01
// 010
// 1010
// 10101
// 010101
// 0101010

function toggle010(num){
   
        let toggle = 1;
    for(let i=0;i<num;i++){
         let row = "";
        for(let j=0;j<i+1;j++){
            row += toggle
            if(toggle == 1){
                toggle = 0;
            }else{
                toggle = 1;
            }
        }
        console.log(row);
    }
}

// toggle010(5);