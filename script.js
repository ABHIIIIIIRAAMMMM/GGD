var games = ["Slither", "2048", "bballegends", "commandstrikefps", "CrketCty", "crossyroad", "drivemad", "edgesurf", "ev", "flappybird", "fortnitez", "fruitninja", "geodash", "gettingoverit", "headsoccer", "holeio", "motox3m", "pacman", "paperio", "papermc", "Pokemonscratch", "pokemonshowdown", "retrobowl", "shellshockers", "sldratk2", "sldratk3", "smashkartsio", "sonicthehedgehog", "supermariobros", "tag", "tetris", "timbercraft", "tunnelrsh"]
function random_item(games)
{
  
return games[Math.floor(Math.random()*games.length)];
     
}

var randGam = random_item(games)

a = document.getElementById(randGame);
a.setAttribute("href", `Games/${randGam}.html`);