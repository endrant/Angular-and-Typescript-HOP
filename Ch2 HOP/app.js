;
var Entry = /** @class */ (function () {
    function Entry() {
    }
    return Entry;
}());
;
function sortArray(values, orderType) {
    return values.sort(function (a, b) {
        if (a[orderType] < b[orderType]) {
            return -1;
        }
        if (a[orderType] > b[orderType]) {
            return 1;
        }
        return 0;
    });
}
var animals = [{ name: "cat" }, { name: "dog" }, { name: "lizzard" }];
console.log(sortArray(animals, "name").map(function (item) { return item.name; }));


var d = new Date('December 17, 1995 03:24:00');
var locale = "en-us";
var month = d.toLocaleString(locale, {month: "long"});

console.log(month);

console.log(d);