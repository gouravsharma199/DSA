function revInt(num){
    let numCopy = num;
    let rev = 0;
    let last = 0;
    num = Math.abs(num);
    while(num>0){
        last = num%10;
        rev = (rev*10)+last;
        num = Math.floor(num/10);

    }
    return (numCopy<0)?-rev:rev;
}

console.log(revInt(-123456));


