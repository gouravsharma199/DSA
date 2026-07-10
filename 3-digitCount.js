function digitCount(numb){
    if(numb==0){
        return 1;
    }
    let count = 0;
    numb = Math.abs(numb);
    for(let i=0;0<numb;i++){
        numb = Math.floor(numb/10);
        count++;
    }
    return count;

}

console.log(digitCount(-568))