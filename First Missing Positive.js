/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    var obj = {}
    for(var i=0,length = nums.length; i< length; i++ ){
        if(nums[i] < 0) continue
        
        obj[nums[i]] = true
    }
    
    var num = 1
    for(var j=0,length = nums.length; j< length; j++ ){
        if(obj[num]){
            num++
        } else {
            break
        }
    }
    return num
};