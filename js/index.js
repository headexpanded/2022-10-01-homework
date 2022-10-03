/**
 *
 * A list of AFL clubs,
 * which can be sorted alphabetically,
 * and by the year of their debut in the league.
 *
 */

let clubs = [];

// fetch club data from squiggle.com.au

const fetcher = fetch("https://api.squiggle.com.au/?q=teams")
  .then((response) => {
    return response.json();
  })
  .then((teams) => {
    clubs = teams.teams;
    builder(clubs);
  });

// user sorts by name
const nameSort = document.body.querySelector("#sortByName");
nameSort?.addEventListener("click", () => {
  console.log(clubs[0].id);
  clubs = clubs.reverse();
  const goAway = document.body.querySelector("li");
  goAway?.parentElement.removeChild(goAway);
  builder(clubs);
});

// user sorts by debut
const debutSort = document.body.querySelector("#sortByDebut");
debutSort?.addEventListener("click", () => {});

const builder = function (clubs) {
  for (let index = 0; index < clubs.length; index++) {
    const club = clubs[index];
    const uList = document.body.querySelector("ul");
    const li = document.createElement("li");
    const row = document.createElement("div");
    const clubNameDiv = document.createElement("div");
    const clubDebut = document.createElement("div");
    li.className = "list-group-item";
    row.id = "clubRow";
    clubNameDiv.id = "clubNameDiv";
    clubDebut.id = "clubDebut";
    (row.className = "row"), "align-items-left";
    (clubNameDiv.className = "col-6"), "clubNameDiv";
    (clubDebut.className = "col-6"), "clubDebutDiv";
    uList?.appendChild(li);
    li.appendChild(row);
    row.appendChild(clubNameDiv);
    row.appendChild(clubDebut);
    clubNameDiv.textContent = club.name;
    clubDebut.textContent = club.debut;
  }
};

// END
