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


//palindrome for Strings
function twoPointerPalindrome(str){
    let left = 0;
    let right = str.length -1;
    
    while(left<right){

        if(str[left]!==str[right]) return false

        left ++;
        right --;
    }
    return true;

}

console.log(twoPointerPalindrome("madam"));