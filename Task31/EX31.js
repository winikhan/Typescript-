var userNames = ["Admin", "Nadia", "Abeeha", "Aima", "Aleena",];
userNames = [];
if (userNames.length < 0) {
    for (var i = 0; i < userNames.length; i++) {
        if (userNames[i] == "Admin") {
            console.log("\n Hello ".concat(userNames[i], " would you like to see astatus report? \n"));
        }
        else {
            console.log("Hello ".concat(userNames[i], " thank you for logging in again."));
        }
    }
}
else {
    console.log("We need to find some users!");
}
