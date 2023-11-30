function jatekos(){
    fetch("https://www.balldontlie.io/api/v1/players")
    .then(response => response.json())
    .then(adat => {
        for(player of adat.data){
            document.getElementById("jatekos").innerHTML += 
            "Keresztnév: " + player.first_name + " " + "Vezetéknév: " + player.last_name + " " + "Csapata: " + player.team.full_name + "<br>";
        }
    })
    .catch(error => console.log("Hiba!" + error));
}

function csapat(){
    fetch("https://www.balldontlie.io/api/v1/teams")
    .then(response => response.json)
    .then(elem => {
        for(team of elem.data){
            document.getElementById("csapat").innerHTML += team;
        }
    })
    .catch(error => console.log("Hiba!" + error));
}