var userNames = ["Admin", "Nadia", "Abeeha", "Aima", "Aleena",];
for (var i = 0; i < userNames.length; i++) {
    if (userNames[i] == "Admin") {
        console.log("Hello ".concat(userNames[i], " would you like to see status report?"));
    }
    else {
        console.log("Hello ".concat(userNames[i], " thank you for logging in again."));
    }
}
