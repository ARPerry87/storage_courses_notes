Longest palindrome substring 

var longestPalindrome = function(s) {
	if (s.length < 1 || s.length == null) return "";
	let maxPallindrome = "";
	for (let i = 0; i < s.length; i++) {
		let oddPallindrom = checkPalindrome(s, i, i);
		let evenPallindrom = checkPalindrome(s, i, i + 1);
		if (oddPallindrome.length > maxPallindrome.length) {
			maxPallindrome = oddPallindrome;
		}
		if (evenPallindrom.length>maxPallindrome.length) {
			maxPallindrome = evenPallindrom;
		}
	}

return maxPallindrome;

};

var checkPalindrome function (str, left, right) {
	while (left >= 0 && right < str.length) { 
		if (str[left] !== str[right]) break;
		right++;
		left--;
	}

	return str.substring(left + 1, right);

}