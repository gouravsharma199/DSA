function uniquevalue(nums,val){
    let x = 0;
    for(let i=0;i< nums.length;i++){

        if(nums[i]!== val){
            nums[x] = nums[i];
            x++;
        }

    }
    return nums
}

let  nums = [0,1,2,2,3,0,4,2];
let val = 2;
console.log(uniquevalue( nums,val));