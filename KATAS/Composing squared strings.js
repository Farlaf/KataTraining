//Composing squared strings
/*
A squared string is a string of n lines, each substring being n characters long. We are given two n-squared strings. For example:

s1 = "abcd\nefgh\nijkl\nmnop" s2 = "qrst\nuvwx\nyz12\n3456"

Let us build a new string strng of size (n + 1) x n in the following way:

The first line of strng has the first char of the first line of s1 plus the chars of the last line of s2.
The second line of strng has the first two chars of the second line of s1 plus the chars of the penultimate line of s2 except the last char
and so on until the nth line of strng has the n chars of the nth line of s1 plus the first char of the first line of s2.
Calling this function compose(s1, s2) we have:

compose(s1, s2) -> "a3456\nefyz1\nijkuv\nmnopq"
or printed:
abcd    3456    qrst  -->  a3456
efgh    yz1 2    uvwx       efyz1
ijkl    uv wx    yz12       ijkuv
mnop    q rst    3456       mnopq
*/


function compose(s1, s2) {
    let arr1 = s1.split("\n");
    let arr2 = s2.split("\n").reverse();
    let rezString = [];

    for (let i=0; i < arr1.length; i++) {
      rezString.push( arr1[i].substr(0,i+1) + arr2[i].substr(0, arr2[i].length - i) );
    }

    return rezString.join("\n");
}


console.log(compose("byGt\nhTts\nRTFF\nCnnI", "jIRl\nViBu\nrWOb\nNkTB"),"bNkTB\nhTrWO\nRTFVi\nCnnIj");
console.log(compose("HXxA\nTGBf\nIPhg\nuUMD", "Hcbj\nqteH\nGbMJ\ngYPW"));
        //"HgYPW\nTGGbM\nIPhqt\nuUMDH")
console.log(compose("tSrJ\nOONy\nsqPF\nxMkB", "hLqw\nEZuh\nmYFl\nzlYf"));
    //    "tzlYf\nOOmYF\nsqPEZ\nxMkBh")