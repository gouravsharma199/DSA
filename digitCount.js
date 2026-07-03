function digitCount(num){
    if(num==0)return 1;
    let count =0;
    num = Math.abs(num); //abs return absolute value of a number
    
    while(num>0){
        num= Math.floor(num/10);
        count++;
    }
    return count;
}

console.log(digitCount(-45464)); //5