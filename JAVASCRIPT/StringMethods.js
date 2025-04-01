let named = "Vinod kumar";

console.log(named.length);

const character = named.charAt(4);

console.log(character);

let name2 = "Vinodkumar";

const slice = name2.slice(5, 7);
const substr = name2.substr(5, 7);

console.log(slice, substr);
const updated = name2.concat(" " + "is easy" + "      ");
console.log(updated);

let name4 = "         PHP hghg     ";

const updated2 = name4.trimEnd();
console.log(updated2);

const updated3 = name3.repeat(200);
console.log(updated3);

let name5 = "I am Vinod Vinod Vinod";

const updated5 = name5.replaceAll("Vinod", "Sam");
console.log(updated5);

let name6 = "dashboard/page/contact/12345";

const updated6 = name6.split("/");
console.log(updated6[3]);
