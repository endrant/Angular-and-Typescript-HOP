;
;
function formatNumber(phoneNumber) {
    var ac = phoneNumber.substr(0, 3);
    var lc = phoneNumber.substr(3, 3);
    var pn = phoneNumber.substr(6, 4);
    console.log("(" + ac + ")" + "-" + lc + "-" + pn);
}
function sendMessage(person, contact) {
    console.log("sent message to" + person.firstName + " at " + contact.phoneNumber + ".");
}
function addToFavorites(person) {
    console.log(person.firstName + "has been added as a favorite");
}
var Sam = {};
Sam.firstName = "Sam";
Sam.phoneNumber = "6014314526";
sendMessage(Sam, Sam);
addToFavorites(Sam);
formatNumber(Sam.phoneNumber);
