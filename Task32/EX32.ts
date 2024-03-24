let current_users :string[] = ["SAba","AlEena","AimA","NaDia","WaNiyA","AreeSha"];

let newuser_names : string[] =["Anabiya","Samiya","Kashaf","Saba","Hiba","Aleena",];

newuser_names.forEach(new_users => {
let lowercase_names :string = new_users.toLowerCase();

if (current_users.map(currentUser => currentUser.toLowerCase()).includes(lowercase_names))
console.log(`The usernamne ${new_users} is already taken. Please enter new name `)
 else{
    console.log(`The username ${new_users} is available`);
 }


})