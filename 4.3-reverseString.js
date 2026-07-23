function reverseString(s){
  const len = s.length;
  const helfLen = Math.floor(len/2);

  for(let i=0;i<helfLen;i++){
    const temp = s[i];
    s[i]= s[len-1-i];
    s[len-1-i] = temp;
  }
  return s;
}

const s = ["h","e","l","l","o","w"]
console.log(reverseString(s));


// also can we solve by 2 pointer string