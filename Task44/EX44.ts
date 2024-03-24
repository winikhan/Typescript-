function sandwichitems(items: string[]){
    console.log( `Prepare the sandwhich conataining:`);
    items.forEach(element => console.log('_'+ element)); 

    console.log(`\nHave a delicious sandwich \n`);

}

sandwichitems(['Chicken', 'Ice berg', 'tomato slice']);

sandwichitems(['Oregano', 'Parsley']);

sandwichitems(['Roasted vegies']);