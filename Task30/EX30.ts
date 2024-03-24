let userNames: string[] = ["Admin", "Nadia", "Abeeha", "Aima", "Aleena",];
 for(let i =0; i < userNames.length; i++){
    if (userNames[i] == "Admin"){
        console.log(`Hello ${userNames[i]} would you like to see status report?`);
    }else{
        console.log(`Hello ${userNames[i]} thank you for logging in again.`)
    }
}