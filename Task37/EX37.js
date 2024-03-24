function make_shirt(size, text) {
    if (size === void 0) { size = "Large"; }
    if (text === void 0) { text = "I love TypeScript"; }
    console.log("Make a shirt of ".concat(size, " size with the text: ").concat(text));
}
make_shirt();
make_shirt('Medium');
make_shirt('small', 'I love Progamming');
