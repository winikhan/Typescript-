let userNames: string[] = ["Admin", "Nadia", "Abeeha", "Aima", "Aleena",];
userNames = []
if(userNames.length < 0){

 for(let i =0; i < userNames.length; i++){
    if (userNames[i]== "Admin"){
        console.log(`\n Hello ${userNames[i]} would you like to see astatus report? \n`);
    }else{
        console.log(`Hello ${userNames[i]} thank you for logging in again.`)
    }
}
}else{ 
    console.log(`We need to find some users!`)
}