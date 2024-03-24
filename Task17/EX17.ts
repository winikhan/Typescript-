let GuestList : String[]= ["Saba","Farwa","Aleena","Aima", "Sameena"];
console.log(`Unfortunately, I have only two tables so I can invite only two peoples.`);

let friendfirst =GuestList.pop();
console.log(`Sorry ${friendfirst}, but you are not invited in dinner.`);

let friendSecond =GuestList.pop();
console.log(`Sorry ${friendSecond}, but you are not invited in dinner.`);

let friend_third =GuestList.pop();
console.log(`Sorry ${friend_third}, but you are not invited in dinner.\n`);

for(let i = 0; i < GuestList.length; i++)(
      console.log(`${GuestList[i]} It is to inform you that you are still invited on dinner}`)
)

GuestList.pop();
GuestList.pop();

console.log(GuestList);