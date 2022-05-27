exports.isCharacterMatch = function(string1, string2) {
    
    let arr1 = [];
    let arr2 = [];

    for(let i=0; i<string1.length; i++) {
        if(string1[i] !== ' ') {
            arr1.push(string1[i].toLowerCase());
        }
    }

    for(let i=0; i<string2.length; i++) {
        if(string2[i] !== ' ') {
            arr2.push(string2[i].toLowerCase());
        }
    }

    const compareArr = (a,b) => JSON.stringify(a) === JSON.stringify(b);
    if(compareArr(arr1.sort(), arr2.sort())) {
        return true;
    } else {
        return false;
    }
    // console.log(arr1.sort())
    // console.log(arr2.sort())
};

// console.log(exports.isCharacterMatch('zach', 'attack'));