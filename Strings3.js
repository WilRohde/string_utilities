function ParensValid(string) {
    var arr = string.split("");
    console.log(arr);

    var leftParens = 0;
    var rightParens = 0;
    var Valid = false;
    if ((arr[0] == ')') || (arr[arr.length-1] == '('))
    {
        // neither of these can be valid
        return false;
    }
    for (let k = 0; k <= arr.length - 1; k++) {
        switch (arr[k]) {
            case '(': leftParens = leftParens + 1; break;
            case ')': rightParens = rightParens + 1; break;
            default: // do nothing
        }
    }
    console.log(`leftParents = ${leftParens}`);
    console.log(`rightParens = ${rightParens}`);
    if (leftParens == rightParens) {
        Valid = true;
    }
    else {
        Valid = false;
    }

    console.log(arr);
    return Valid;
}

function bracesValid(string) {
    //Note: need to figure this one out...
    var arr = string.split("");
    console.log(arr);

    if ((arr[0] == ")") || (arr[0] == "]") || (arr[0] = "}")) {
        // none of these can be valid;
        return false;
    }

    if ((arr[arr.length-1] == "(") || (arr[arr.length-1] == "[") || (arr[arr.length-1] = "{")) {
        // none of these can be valid either;
        return false;
    }

    var need = ")";  // default
    var midPointer = arr.length/2;
    var leftPointer,rightPointer = midPointer;
    for (leftPointer = midPointer; leftPointer >= 0; leftPointer--) {
        switch (arr[leftPointer]) {
            case "(":
                // need to find ")"
                need = ")";
                break;
            case "[":
                // need to find "]"
                need = "]";
                break;
            case "{":
                // need to find "}"
                need = "}";
                break;
            default: // don't do anything
        }
        
    }

    console.log(arr);
    return Valid;

}

function isPalindrome(string, strict = true) {
    result = false;
    console.log(`strict = ${strict}`);
    var forward = string.split("");
    var backward = [];
    var forString,backString = "";
    for (let k = forward.length-1;k >= 0; k--) {
                backward.push(forward[k]);
        }

    console.log(`forward = ${forward}`);
    console.log(`backward = ${backward}`);

    forString = forward.join("");
    backString = backward.join("");
    console.log(`forString = ${forString}`);
    console.log(`backString = ${backString}`);

    if (strict == false) {
        console.log("in strict = false block...");
        // get rid of the spaces
        var forarr = forString.split(" ");
        forString = forarr.join("");
        var backarr = backString.split(" ");
        backString = backarr.join("");

        // get rid of punctuation
        forString = forString
                        .replace(/[.,'\/#!$%\^&\*;:{}=\-_`~()]/g,"")
                        .replace(/s{2,}/g, "")
                        .toLowerCase();
        backString = backString
                        .replace(/[.,'\/#!$%\^&\*;:{}=\-_`~()]/g,"")
                        .replace(/s{2,}/g, "")
                        .toLowerCase();
    }
    console.log(`forString = ${forString}`)
    console.log(`backString = ${backString}`)

    if (forString == backString) {
        result = true;
    }
    else {
        result = false;
    }
    return result;
}

const paren1 = '((((d2kfr)kslkdls)kdskkk)';
console.log(ParensValid(paren1));
const paren2 = ')299dr()4(sldkds)';
console.log(ParensValid(paren2));
const paren3 = '(sdfs),((dsdfsd)sddd)(';
console.log(ParensValid(paren3));
const paren4 = '((Ali)-(Babba))';
console.log(ParensValid(paren4));
// const braces1 = '[{[something]else}]';
// console.log(bracesValid(braces1));
// const braces2 = '[{long run]}';
// console.log(bracesValid(braces2));
const pal1 = "Madam, I'm Adam";
console.log(isPalindrome(pal1));
console.log(isPalindrome(pal1,false));
const pal2 = 'madam';
console.log(isPalindrome(pal2));