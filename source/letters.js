'use strict';


function letters(string = '', deleteOption = null) {
    if (typeof string !== 'string') {
        return;
    }
    let lettersWithCount = {};
    for (let i = 0; i < string.length; ++i) {
        if (string[i] in lettersWithCount) {
            lettersWithCount[string[i]] += 1;
        } else {
            lettersWithCount[string[i]] = 1;
        }
    }

    let resultString = '';
    switch (deleteOption) {
        case true:
            for (let i = 0; i < string.length; ++i) {
                resultString += lettersWithCount[string[i]] > 0 ? string[i] : '';
                lettersWithCount[string[i]] = -1;
            }
            break;

        case false:
            let uniqueLetters = [];
            for (let i = string.length - 1; i >= 0 ; --i) {
                if (lettersWithCount[string[i]] > 0 ) {
                    uniqueLetters.push(string[i]);
                    lettersWithCount[string[i]] = -1;
                }
            }
            resultString = uniqueLetters.reverse().join('');
            break;

        case null:
            for (let i = 0; i < string.length; ++i) {
                resultString += lettersWithCount[string[i]] === 1 ? string[i] : '';
            }
            break;
    }

    return resultString;
}