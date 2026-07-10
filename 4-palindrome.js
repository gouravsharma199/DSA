function palindrome(num){
    let numCopy = num;
    num = Math.abs(num);
    let rev = "";
    let rem = "";

    while(0<num){

        rem = num%10;
        rev = (rev*10)+rem;

        num = Math.floor(num/10);

    }
    if(numCopy==rev){
        console.log(numCopy+" is palindrome")
    }
    else{
        console.log(numCopy+" is not palindrome")
    }
    

}

// palindrome(-121);

