/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    return nums.join(',').replace(/(\d+),\1/g, '$1').split(',').map(function(val){return parseInt(val,10)})
};
