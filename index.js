// Code your solution in this file!
function returnFirstTwoDrivers(array) {
    return array.slice(0, 2);
}

function returnLastTwoDrivers(array) {
    return array.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return (function(factor) {
        return multiplier * factor;
    })
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, callback) {
    return callback(arrayOfDrivers);
}