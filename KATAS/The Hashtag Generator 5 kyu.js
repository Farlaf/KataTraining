// * The Hashtag Generator 5 kyu
// * https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript
/*

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.

*/

function generateHashtag (str) {
	str = str.replace(/\s+/g, ' ');
	if (str == " " || str.length == 0) return false;

  str = "#" + str.split(' ').map((item) => item.charAt(0).toUpperCase()+item.slice(1)).join('');

	return str.length <= 140 ? str : false
}

//TEST
console.log(generateHashtag(" ".repeat(200)));
console.log(generateHashtag(""));
console.log(generateHashtag("Do We   have A Hashtag"));
console.log(generateHashtag("Codewars is nice"));


// Like it
/*

function generateHashtag (str) {

  var hashtag = str.split(' ').reduce(function(tag, word) {
	return tag + word.charAt(0).toUpperCase() + word.substring(1);
  }, '#');

  return hashtag.length == 1 || hashtag.length > 140 ? false : hashtag;
}

*/