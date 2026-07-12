function revInt(num){
    if(num==0) return 0;
    let numCopy = num;
    let rev = 0;
    let last = 0;
    num = Math.abs(num);
    while(num>0){
        last = num%10;
        rev = (rev*10)+last;
        num = Math.floor(num/10);

    }
    let limit = Math.pow(2,31);
    if(rev>limit || rev<-limit) return 0;
    return (numCopy<0)?-rev:rev;
}

console.log(revInt(-1234));


