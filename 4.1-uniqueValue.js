function uniquevalue(arr){
    let x = 0;
    for(let i=0;i<arr.length;i++){

        if(arr[i]>arr[x]){
            
            x++;
            arr[x] = arr[i];
        }
    }
    console.log(x+1+" arr "+ arr);
}

let arr = [0,0,1,1,1,2,2,3,3,3,3,4,4,4];
uniquevalue(arr);