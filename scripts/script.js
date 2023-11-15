// lista
var listfilm = JSON.parse(localStorage.getItem("listfilm")) || [];

// lätt till i lista
function skapa() {
  let movie = document.getElementById("titel").value;

  let information = document.getElementById("beskrivning").value;

  let ålder = document.getElementById("åldersgräns").value;

  film = {
    titel: movie,
    beskrivning: information,
    åldersgräns: ålder,
  };

  listfilm.push(film);

  localStorage.setItem("listfilm", JSON.stringify(listfilm));

  document.getElementById("titel").value = "";
  document.getElementById("beskrivning").value = "";
}

// sökfunktion
function sök() {
  let resultat = listfilm.find(
    (film) => film.titel === document.getElementById("sök").value
  );

  console.log(resultat);

  let searchResultElementTitel = document.getElementById("resultTitel");
  let searchResultElementBeskrivning =
    document.getElementById("resultBeskrivning");
  let searchResultElementAlder = document.getElementById("resultAlder");

  if (resultat) {
    searchResultElementTitel.innerHTML = `<h2>Titel</h2>${resultat.titel}</h2>`;

    searchResultElementBeskrivning.innerHTML = `<h2>Beskrivning</h2><p>${resultat.beskrivning}</p>`;

    searchResultElementAlder.innerHTML = `<p>Åldersgräns: ${resultat.åldersgräns}</p>`;
  } else {
    searchResultElementTitel.innerHTML = "No results found.";
    searchResultElementBeskrivning.innerHTML = "";
    searchResultElementAlder.innerHTML = "";
  }
}

// rensa
function rensa() {
  let userConfirmation = window.confirm(
    "Är du säker på att du vill rensa all data?"
  );
  if (userConfirmation) {
    localStorage.removeItem("listfilm");
    alert("Listan är rensad");
    window.location.reload();
  } else {
  }
}

// visa lista
function lagradLista() {
  var ul = document.getElementById("programList");
  ul.innerHTML = "";

  listfilm.sort((a, b) => a.titel.localeCompare(b.titel));

  for (let i = 0; i < listfilm.length; i++) {
    var li = document.createElement("li");
    li.textContent = listfilm[i].titel;
    ul.appendChild(li);
  }
}
