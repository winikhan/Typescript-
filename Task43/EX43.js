var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicians_name = ["Asad", "Arham", "Safeer", "Naeem"];
function arraycopy(array2) {
    return __spreadArray([], array2, true);
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians_name[i] = "the Great " + magicians[i];
    }
}
function show_magician(magicians_name) {
    magicians_name.forEach(function (element) {
        console.log(element);
    });
}
var magiciancopy = arraycopy(magicians_name);
make_great(magiciancopy);
console.log("\n Here is my modifid copy of the array");
show_magician(magicians_name);
console.log("\n Here is my original array.");
show_magician(magiciancopy);
