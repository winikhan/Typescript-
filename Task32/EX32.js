var current_users = ["SAba", "AlEena", "AimA", "NaDia", "WaNiyA", "AreeSha"];
var newuser_names = ["Anabiya", "Samiya", "Kashaf", "Saba", "Hiba", "Aleena",];
newuser_names.forEach(function (new_users) {
    var lowercase_names = new_users.toLowerCase();
    if (current_users.map(function (currentUser) { return currentUser.toLowerCase(); }).includes(lowercase_names))
        console.log("The usernamne ".concat(new_users, " is already taken. Please enter new name "));
    else {
        console.log("The username ".concat(new_users, " is available"));
    }
});
