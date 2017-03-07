/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var num = 0;
    for(var i = 0, length = nums.length; i < length ; i ++){
        if(nums.indexOf(num) < 0) break
        num++
    }
    
    return num
};