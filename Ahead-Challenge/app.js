const url =
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const cities = [];
fetch(url)
    .then((res) => res.json())
    .then((data) => cities.push(...data));
console.log(cities);

function findMatch(wordToMatch, cities) {
    return cities.filter((place) => {
        const regex = new RegExp(wordToMatch, "gi");
        return place.city.match(regex) || place.state.match(regex);
    });
}

function displayMatches() {
    const matchArray = findMatch(this.value, cities);
    const html = matchArray
        .map((place) => {
            const regex = new RegExp(this.value, "gi");
            const cityName = place.city.replace(regex, `<span>${this.value}</span>`);
            const stateName = place.state.replace(
                regex,
                `<span>${this.value}</span>`
            );
            return `
      <li>
      <span class="name">${cityName}, ${stateName}</span>
      </li>`;
        })
        .join("");
    suggestions.innerHTML = html;
}
searchInput.addEventListener("input", displayMatches);

const searchInput = document.querySelector(".search-input");
const suggestions = document.querySelector(".suggestion");

searchInput.addEventListener("input", displayMatches);