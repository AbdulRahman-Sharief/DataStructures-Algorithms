function stringSearch(long, short) {
    var count = 0;
    for (var i = 0; i < long.length; i++) {
        for (var j = 0; j < short.length; j++) {
            if (short[j] !== long[i + j]) break;
            if (j === short.length - 1) count++;
        }
    }

    //Count how many times the short is repeated in the long string
    return count;
}

console.log(stringSearch("lorie loled", "lo"))