let guest_list :string[] = ["Saba", "Aleena", "Aima"];
let CannotAttend : string = "Aleena";
//console.log(`${CannotAttend} is not coming for dinner because she is not feeling well.`);

let NewGuest :string ="Nadia";
guest_list [guest_list.indexOf(CannotAttend)] = NewGuest;
//console.log(guest_list);

//console.log(`${guest_list[0]}, I want to invite you on dinner.` );
//console.log(`${guest_list[1]},I want to invite you on dinner.`);
//console.log(`${guest_list[2]}, I want to invite you on dinner.`);

let guestlist :string[]=["Saba","Aleena","Aima"];
//console.log(guest_list);

//console.log(`${guestlist[0]}, I have found a bigger dinner table so I have decided to invite three more friends.\n`);
//console.log(`${guestlist[1]}, I have found a bigger dinner table so I have decided to invite three more friends.\n`);
//console.log(`${guestlist[2]}, I have found a bigger dinner table so I have decided to invite three more friends.\n`);

guestlist.unshift("Farwa");
//console.log(guestlist);

guestlist.splice(1, 0, "Anaya");
//console.log(guestlist);

guestlist.push("Sameena");
//console.log(guestlist);

console.log(`${guestlist[0]}.I want to invite you for dinner.` );
console.log(`${guestlist[1]}.I want to invite you for dinner.` );
console.log(`${guestlist[2]}.I want to invite you for dinner.` );
console.log(`${guestlist[3]}.I want to invite you for dinner.` );
console.log(`${guestlist[4]}.I want to invite you for dinner.` );
console.log(`${guestlist[5]}.I want to invite you for dinner.` );