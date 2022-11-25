// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];
function returnFirstTwoDrivers() {
  return drivers.slice(0, 2);
}

function returnLastTwoDrivers() {
  return drivers.slice(2, 4);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier() {
  return function multiply(mul) {
    return mul ** 2;
  };
}

function fareDoubler(fareDol) {
  return fareDol * 2;
}

function fareTripler(fareTrip) {
  return fareTrip * 3;
}
function selectDifferentDrivers(drivers, func) {
  return func(drivers);
}