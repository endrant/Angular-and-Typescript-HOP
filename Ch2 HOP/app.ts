interface Person {
    firstName: string;
    lastName?: string;
    birthday?: Date;

};

class Entry implements Person {
    firstName: any;
    lastName: any;
    birthday: Date;

};

function sortArray(values: any[], orderType: any) {
return values.sort((a,b) => {
    if (a[orderType] < b[orderType]) {
        return -1;
    }

    if (a[orderType] > b[orderType]) {
        return 1;
    }

    return 0
});
}

let animals = [{name : "cat"}, {name: "dog"}, { name: "lizzard"}];
let test = [{score: 34}, {score: 76}, {score: 98}]

console.log(sortArray(animals,"name").map(item => item.name));

var d = new Date('December 17, 1995 03:24:00');
var locale = "en-us";
var month = d.toLocaleString(locale, {month: "long"});
console.log(month);




}




