'use strict';


function letters(string, deleteOption) {
    string = string || '';
    if (typeof string !== 'string') {
        return undefined;
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
    if (deleteOption === undefined) {
        for (let i = 0; i < string.length; ++i) {
            resultString += lettersWithCount[string[i]] === 1 ? string[i] : '';
        }
    } else if (deleteOption === true) {
        for (let i = 0; i < string.length; ++i) {
            resultString += lettersWithCount[string[i]] > 0 ? string[i] : '';
            lettersWithCount[string[i]] = -1;
        }
    } else if (deleteOption === false) {
        resultString = [];
        for (let i = string.length - 1; i >= 0 ; --i) {
            if (lettersWithCount[string[i]] > 0 ) {
                resultString.push(string[i]);
                lettersWithCount[string[i]] = -1;
            }
        }
        resultString = resultString.reverse().join('');
    }

    return resultString;
}