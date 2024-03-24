var magicians_name = ["Asad", "Arham", "Safeer", "Naeem"];
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
make_great(magicians_name);
show_magician(magicians_name);
