let dinner_guest :string[] = ["Saba", "Nadia", "Aleena", "Aima", "Sameena"];

console.log(`Following  ${dinner_guest.length} are the friends whom I have invited for dinner. `)
for (let i = 0; i< dinner_guest.length; i++){
    console.log(`${i + 1}. ${dinner_guest[i]} `)
}