function countLetters(inputStr) 
{
    var inputLwr = inputStr.toLowerCase().split(' ').join('');
    var uniqueChar = {};

    for (var i = 0; i < inputLwr.length; i++) 
    {        
        if (uniqueChar[inputLwr.charAt(i)] !== undefined)
            uniqueChar[inputLwr.charAt(i)] += ", " + i;
        else
            uniqueChar[inputLwr.charAt(i)] = i;
    }
    return uniqueChar;
}

console.log(countLetters("lighthouse in the house"));
