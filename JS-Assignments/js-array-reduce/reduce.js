/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractValue(arr, key) {
    return arr.reduce(function(accum, nextVal) {
        // push nextVal of [key] onto accum
        accum.push(nextVal[key]);
        return accum;
        
    }, []); // start with empty array to populate as we move through logic
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str){
    const vowels = "aeiou";
    // split up each element in the string into an array
    return str.split('').reduce(function(accum, nextVal) {
        let lowerCased = nextVal.toLowerCase()
        // -1 is the output if a letter is not a vowel found in the variable vowels
        if(vowels.indexOf(lowerCased) !== -1) {
            // checks to see is there's an 'a' from vowels as a key in the object
            if (accum[lowerCased]) {
                // increment by one
                accum[lowerCased]++;
            } else {
                accum[lowerCased] = 1; // at the beginning there is nothing in the object, so the if statement doesn't run and the accum of [lowerCased] is set to 1, but next time we hit 'a' in the variable vowels, the if statement becomes true, and we add one to it and update it. Then it's done again with 'eiou'
            }
        }
        return accum;
        
    }, {}); // start with empty object to populate as we move through logic
}

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

function addKeyAndValue(arr, key, value) {
    return arr.reduce(function(accum, nextVal, index) {
        // we update the value, setting it equal to accum with each object including the key and value passed in
        accum[index][key] = value;
        return accum;
    }, arr);
}

/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    const arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, callback) {
    return arr.reduce(function(accum, nextVal) {
        if (callback(nextVal)) {
            // push to first array if true
            accum[0].push(nextVal);
        } else {
            // push to second array if false
            accum[1].push(nextVal);
        }
        return accum;
    }, [ [], [] ]); // start with two empty arrays to populate as we move through logic
}
