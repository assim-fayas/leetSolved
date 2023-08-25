// 961. N-Repeated Element in Size 2N Array

var repeatedNTimes = function(nums) {
    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            if(nums[i]===nums[j] ){
                return [nums[i]]
            }
        }
    }
};
