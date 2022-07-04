var lengthOfLongestSubstring = function(s) {
    let right = 0, left = 0;
    let hash = new Map();
    let maxLength = 0;
    while (right < s.length) {
        //while right is less than the length s's total length 
        //then charAtRight is now assigned the string of s's string at right 
        const charAtRight = s.charCodeAt(right);
        //if the hash has the charCodeAtRight in it 
        if (hash.has(charAtRight)) {
            //assign left to the max amount of times the hash gets charAtRight and also the original left
            left = Math.max(hash.get(charAtRight), left  )
        }
        
        // assign to maxLength the result of math.max the original max length, the current right - left and + 1
        maxLength = Math.max(maxLength, right - left + 1);
        // increment right
        right++;
        //create a set of hash, giving it charAtRight, and right
        hash.set(charAtRight,right)
    }

    return maxLength;  
    
};

/*so first we set our left and right pointers, and we 
start them at 0 so that we don't have any conflicting 
values. 

Then we set up a new hashmap

we set up a maxlength and set it to 0 

Now, we start our while loop, and start it up so that while right is less than s.length 
and set up a variable for characters at right to be our strings integers in the right pointer

create the if statement for our hash, see if the hash has charAtRight 
if it does, then left equals the maximum for the left pointer 

We set the maximumLength by passing Math.max to maxLength and then also subtracing the right from left + 1 



*/

var lengthOfLongestSubstring = function(s) {
    let right = 0, left = 0;
    let map = new Map();
    let max = 0;
    while (right < s.length) {
        const rightVal = s.charCodeAt(right);
        if (hash.has(rightVal) {
            left = Math.max(has.get(rightVal), left)
        }

        max = Math.max(max, right - left + 1);
        right ++; 
        hash.set(rightVal, right)
    }

    return max;


};


can also use 

var lengthOfLongestSubstring = function(s) {
    var len = s.length; 
    if (len <=1) return len;

    let left = 0, right = 1;
    result = 1;

    while ( right < len) {
        let sub = s.slice(left, right);
        let i = sub.indexOf[s[right]];
        if (i !== -1) {
            left = left + i + 1;
        }
        right ++; 
        result = right - left > result ? right - left : result; 
    }

    return result;

};
