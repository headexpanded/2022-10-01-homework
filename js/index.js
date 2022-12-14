/**
 *
 * A list of AFL clubs,  which can be sorted alphabetically.
 *
 */

// list of AFL clubs
let clubs = [
  "Adelaide",
  "Brisbane",
  "Carlton",
  "Collingwood",
  "Essendon",
  "Fremantle",
  "Geelong",
  "Gold Coast",
  "G.W.S.",
  "Hawthorn",
  "Melbourne",
  "North Melbourne",
  "Richmond",
  "Port Adelaide",
  "St. Kilda",
  "Sydney",
  "West Coast",
  "Western Bulldogs",
];

// create & populate list elements on start-up
function buildTable() {
  for (let index = 0; index < clubs.length; index++) {
    const clubName = clubs[index];
    const li = document.createElement("li");
    uList?.appendChild(li);
    li.className = "list-group-item";
    li.textContent = clubName;
  }
}
// user clicks button to sort
const asc = document.body.querySelector("#sort");
asc?.addEventListener("click", () => {
  clubs = clubs.reverse();
  const listItems = document.body.getElementsByClassName("list-group-item");
  for (let index = 0; index < listItems.length; index++) {
    const listItem = listItems[index];
    listItem.textContent = clubs[index];
  }
});

const uList = document.body.querySelector("ul");
buildTable();

// END
