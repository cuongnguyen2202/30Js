"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var url = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
var cities = [];
fetch(url).then(function (res) {
  return res.json();
}).then(function (data) {
  return cities.push.apply(cities, _toConsumableArray(data));
});
console.log(cities);
var alo = cities.filter(function (c) {
  return c.city;
});
console.log(alo); // function findMatch(wordToMatch, cities) {
//     return cities.filter((place) => {
//         place.city.includes(wordToMatch);
//     });
// }
// const suggestions = document.querySelector(".suggestion");
// const searchInput = document.querySelector(".search-input");
// console.log(findMatch());
// function displayMatches() {
//     const matchArray = findMatch(this.value, cities);
//     const html = matchArray
//         .map(() => {
//             return `<li>
//     <span class="name"> this.value</span>;
//     </li>`;
//         })
//         .join("");
//     suggestions.innerHTML = html;
// }
// searchInput.addEventListener("input", displayMatches);