let games = [
    "Kirby", "Pokemon", "Mario", "Samus", "Pikmin",
    "Splatoon", "Luigi", "Yo-Kai", "Animal Crossing", "Zelda"
];

// Sort alphabetically
games.sort();

// Output and log each item
const output = document.getElementById("output");

for (let i = 0; i < games.length; i++) {
    console.log(games[i]); // Log to console

    // Create numbered list item
    const li = document.createElement("li");
    li.textContent = `${i + 1}. ${games[i]}`;
    output.appendChild(li);
}

