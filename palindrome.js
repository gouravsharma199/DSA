function palindrome(num){
    let rev= 0;
    let rem = 0;
    let numCopy = num;

    while(num>0){      
        rem = num%10;
        rev = (rev*10)+rem;
        num = Math.floor(num/10);
    }
    
    if(rev==numCopy){
        console.log("palindrome");
    }else{
        console.log("not Palindrome");
    }
}

palindrome(-121);