// 26. Remove Duplicates from Sorted Array,leetcode 26 question


var removeDuplicates = function(nums) {
    let len = nums.length
    let digits = 1;

    for (let i = 1; i < len; i++)
    {
        if (nums[i] != nums[i - 1])
        {
            nums[digits] = nums[i];
            digits++;
        }
    }
    return digits;
};
