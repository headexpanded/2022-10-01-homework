/**
 *
 * A list of AFL clubs,  which can be sorted alphabetically.
 *
 */

const uList = document.body.querySelector("ul");

let clubs = [];

// fetch club data from squiggle.com.au

const fetcher = fetch("https://api.squiggle.com.au/?q=teams")
  .then((response) => {
    return response.json();
  })
  .then((teams) => {
    clubs = teams.teams;
    for (let index = 0; index < clubs.length; index++) {
      const club = clubs[index];

      const li = document.createElement("li");
      uList?.appendChild(li);
      li.className = "list-group-item";
      const row = document.createElement("div");
      row.id = "clubRow";
      (row.className = "row"), "align-items-left";
      const clubNameDiv = document.createElement("div");
      clubNameDiv.id = "clubNameDiv";
      (clubNameDiv.className = "col-6"), "clubNameDiv";
      li.appendChild(row);
      row.appendChild(clubNameDiv);
      clubNameDiv.textContent = `${club.name}`;
      const clubDebut = document.createElement("div");
      clubDebut.id = "clubDebut";
      clubDebut.className = "col-6";
      row.appendChild(clubDebut);
      clubDebut.textContent = `${club.debut}`;
    }
  });

// user sorts by name
const nameSort = document.body.querySelector("#sortByName");
nameSort?.addEventListener("click", () => {
  const listItems = uList.querySelectorAll("#clubRow");
  clubs = clubs.reverse();

  for (let index = 0; index < listItems.length; index++) {
    const listItem1 = listItems[index].firstChild;
    const listItem2 = listItems[index].lastChild;
    listItem1.textContent = `${clubs[index].name}`;
    listItem2.textContent = `${clubs[index].debut}`;
  }
});

// user sorts by debut
const debutSort = document.body.querySelector("#sortByDebut");
debutSort?.addEventListener("click", () => {
  const listItems = uList.querySelectorAll("#clubRow");

  for (let index = 0; index < listItems.length; index++) {
    const listItem1 = listItems[index].firstChild;
    const listItem2 = listItems[index].lastChild;

    if (listItem2.textContent > 2000) {
      let oldClubs = clubs.sort((a, b) =>
        a.debut < b.debut ? -1 : b.debut > a.debut ? 1 : 0
      );
      listItem1.textContent = `${oldClubs[index].name}`;
      listItem2.textContent = `${oldClubs[index].debut}`;
    } else {
      let newClubs = clubs.sort((a, b) =>
        a.debut > b.debut ? -1 : b.debut < a.debut ? 1 : 0
      );
      listItem1.textContent = `${newClubs[index].name}`;
      listItem2.textContent = `${newClubs[index].debut}`;
    }
  }
});

// END
