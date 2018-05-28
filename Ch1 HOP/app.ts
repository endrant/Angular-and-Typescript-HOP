interface Person {
    firstName: string;
    lastName?: string;
    birthday?: Date;

};

interface Contact extends Person {
    phoneNumber: string;
    email?: string;
    slack?: string;
};

function formatNumber(phoneNumber: Contact["phoneNumber"]) {
    var ac = phoneNumber.substr(0,3);
    var lc = phoneNumber.substr(3,3);
    var pn = phoneNumber.substr(6,4);
console.log("("+ac+")" + "-" + lc + "-" + pn)

}

function sendMessage(person: Person, contact: Contact) {
console.log (
    "sent message to" + person.firstName + " at " + contact.phoneNumber + "." ); }

function addToFavorites(person: Person) {
console.log(
    person.firstName + "has been added as a favorite"
  );
}

let Sam =  <Contact>{};
Sam.firstName = "Sam";
Sam.phoneNumber = "6014314526"


sendMessage(Sam,Sam)

addToFavorites(Sam)

formatNumber(Sam.phoneNumber)





