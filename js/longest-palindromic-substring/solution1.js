/**
 * This is not an optimized solution. this is the first solution I came up with.
 * this approach can work when we have a constraint of 1 <= s.length <= 50
 */


/**
 * @param {string} s
 * @return {string}
 * SC - O(n)
 * TC - O(n^3)
 */
var longestPalindrome = function(s) {
    let sarr = s.split('')
    let smap = {}

    let pali = "";

    for (const item of sarr) {
        smap[item] = Number(smap?.[item] || 0) + 1;
    }

    sarr.forEach((item, index) => {
         let sclone = s;

        let si = index;
        let li = sclone.lastIndexOf(item)
        while (li != -1) {
            const str = sclone.slice(si, li + 1)
            let rev = str.split('').reverse().join('')

            if (str == rev && rev.length > pali.length) {
            pali = rev;
            }
            // console.log({si, li, str, rev})
            sclone = sclone.slice(0, li)
            li = sclone.lastIndexOf(item)
        }
    })

    return pali;
};

console.log(longestPalindrome("babad")) // bab;
console.log(longestPalindrome("cbbd")) // bb;
console.log(longestPalindrome("a")) // a;