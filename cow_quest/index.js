const wilder = require("./information");
const cow = require("cowsay");

console.log(wilder.name);
console.log(cow.say);
console.log(cow.say({
    text : wilder.name + wilder.Campus,
    e : "XX",
    T : "UU"
}));
