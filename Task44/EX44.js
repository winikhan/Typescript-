function sandwichitems(items) {
    console.log("Prepare the sandwhich conataining:");
    items.forEach(function (element) { return console.log('_' + element); });
    console.log("\nHave a delicious sandwich \n");
}
sandwichitems(['Chicken', 'Ice berg', 'tomato slice']);
sandwichitems(['Oregano', 'Parsley']);
sandwichitems(['Roasted vegies']);
