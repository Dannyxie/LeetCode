/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    let arr = []
    for (let i = 0, length = s.length; i < length; i++) {
        if (/[{\[(]/.test(s[i])) {
            arr.push(s[i])
        } else if (/[)\]}]/.test(s[i])) {
            let pair = arr.pop()
              , expect = ''
            switch (s[i]) {
            case '}':
                expect = '{'
                break;
            case ']':
                expect = '['
                break
            case ')':
                expect = '('
                break
            }

            if (expect === pair) {
                continue
            } else {
                return false
            }
        }
    }
    return (arr.length === 0) //if the array is clean, then the pair is successful
};