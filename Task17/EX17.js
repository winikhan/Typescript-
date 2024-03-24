var GuestList = ["Saba", "Farwa", "Aleena", "Aima", "Sameena"];
console.log("Unfortunately, I have only two tables so I can invite only two peoples.");
var friendfirst = GuestList.pop();
console.log("Sorry ".concat(friendfirst, ", but you are not invited in dinner."));
var friendSecond = GuestList.pop();
console.log("Sorry ".concat(friendSecond, ", but you are not invited in dinner."));
var friend_third = GuestList.pop();
console.log("Sorry ".concat(friend_third, ", but you are not invited in dinner.\n"));
for (var i = 0; i < GuestList.length; i++)
    (console.log("".concat(GuestList[i], " It is to inform you that you are still invited on dinner}")));
GuestList.pop();
GuestList.pop();
console.log(GuestList);
