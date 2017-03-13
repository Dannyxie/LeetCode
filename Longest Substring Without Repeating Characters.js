function lengthOfLongestSubstring(s) {
    const map = {};
    var left = 0;
    
    return s.split('').reduce((max, v, i) => {
        left = map[v] >= left ? map[v] + 1 : left;
        map[v] = i;
        return Math.max(max, i - left + 1);
    }, 0);
}




/**
 * @param {string} s
 * @return {number}
 */


//思考用正则是不是可以解决？
// var lengthOfLongestSubstring = function(s) {
//    // let obj = {}
//     let maxLength = 0
//    // let curLength = 0
//     //let startIndex = 0
//     let regex = /([a-z])(?:(?!\1).)*/g
//     //let regex = /([a-z])([a-z](?!\1)+)/g
//     for (let i = 0, length = s.length; i < length; i++) {
//         let string = s.slice(i)
//         let result = string.match(regex)
//         if(result){
//             result.forEach(function(val){
//                 if(!/([a-z]).*\1/g.test(val)){
//                     maxLength = maxLength > val.length? maxLength : val.length
//                 }
//             })
//         }

//         string = s.split("").reverse().join("").slice(i)
//         result =  string.match(regex)
//         if(result){
//             result.forEach(function(val){
//                 if(!/([a-z]).*\1/g.test(val)){
//                     maxLength = maxLength > val.length? maxLength : val.length
//                 }
//             })
//         }
//     }
//    // maxLength = maxLength > curLength ? maxLength : curLength
//     return maxLength
// };