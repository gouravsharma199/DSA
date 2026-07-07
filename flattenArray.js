const arr =  [1, 2, 3, [4, 5, [6, 7, 8], 9], 10];

//using gloabal variable flate the array

const result = [];
function flattenArray(array){
    
    for(let i = 0;i<array.length;i++){

        if(Array.isArray(array[i])){
            flattenArray(array[i]);
        }else{
            result.push(array[i]);
        }
    }
    return result;
}

//without Using Global Variable flat the Array

function flattenArray2(array){

    const result2 = [];

    for(let i = 0;i<array.length;i++){

        if(Array.isArray(array[i])){

            const temp = flattenArray(array[i]);

            for(let j=0;j<temp.length;j++){
                result2.push(temp[j]);
            }
        }else{
            result2.push(array[i]);
        }
    }
    return result2;
}


// console.log(flattenArray2(arr));


function flattenArrayWithLevel(array,level=1){

    const result = [];

    for(let i = 0;i<array.length;i++){

        if(Array.isArray(array[i])){

            const temp = flattenArray(array[i]);
            
        }else{
            result.push(array[i]);
        }
    }
    return result;
}


console.log(flattenArrayWithLevel(arr));