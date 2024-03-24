var ordinalnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, ordinalnumbers_1 = ordinalnumbers; _i < ordinalnumbers_1.length; _i++) {
    var num = ordinalnumbers_1[_i];
    var ordinal_end = void 0;
    if (num == 1) {
        ordinal_end = "st";
    }
    else if (num == 2) {
        ordinal_end = "nd";
    }
    else if (num == 3) {
        ordinal_end = "rd";
    }
    else {
        ordinal_end = "th";
    }
    console.log("".concat(num).concat(ordinal_end));
}
