$(document).ready(function(){
    // const collectArmiesFor = new Set(['Mephisto', 'Sand Runners', 'Death Breath', 'Iron Gang', "Moloch", "Smart", "Pirates"])
    // const collectArmiesAgainst = new Set(['Doomsday Machine', 'Iron Gang', 'Steel Police', 'Pirates', 'Smart', 'Moloch', 'Partisans'])
    const collectArmiesFor = new Set()
    const collectArmiesAgainst = new Set()
    var armiesList = [];


    // collect list of armies
    for(var armyName in DATA["ArmiesStatsMap"]) {
        armiesList.push(armyName);
    }

    //TODO: UI for selecting your armies
    for (var armyName of armiesList) {
        $(".yourArmies").append('<button type="button" class="btn btn-primary your-Armies" data-bs-toggle="button">' + armyName + '</button>')
        $(".opponentArmies").append('<button  type="button" class="btn btn-primary opponent-Armies" data-bs-toggle="button">' + armyName + '</button>')

        $("button.your-Armies").unbind().click(function(){
            var selectedArmyName = $(this).text();

            if (collectArmiesFor.has(selectedArmyName)) {
                collectArmiesFor.delete(selectedArmyName)
            } else {
                collectArmiesFor.add(selectedArmyName)
            }
        });

        $("button.opponent-Armies").unbind().click(function(){
            var selectedArmyName = $(this).text();

            if (collectArmiesAgainst.has(selectedArmyName)) {
                collectArmiesAgainst.delete(selectedArmyName)
            } else {
                collectArmiesAgainst.add(selectedArmyName)
            }
        });
    }

    $("button#showGamesCount").hide()
    $("button#compute").click(function(){
        $("#statistics").empty()
        for (var armyName of armiesList) {
            if (collectArmiesFor.has(armyName)) {
                var min = 100
                var max = 0
                var avg = 0
                var sum = 0
                var iterator = 0
                const armyNameWithoutSpaces = armyName.replaceAll(" ", "")

                $("#statistics").append("<div class='card' id='" + armyNameWithoutSpaces + "'>") //OPENING DIV/UL
                $('div#'+armyNameWithoutSpaces).append("<div class='card-header fs-3 bg-primary-subtle'>" + armyName + "</div>")
                $('div#'+armyNameWithoutSpaces).append("<ul id='" + armyNameWithoutSpaces + "' class='list-group list-group-flush'>") //OPENING DIV/UL
                for (let againstArmy of collectArmiesAgainst) {
                    if (armyName !== againstArmy) {
                        var percentage = DATA["ArmiesStatsMap"][armyName]["StatsVsOtherArmiesMap"][againstArmy]["armyWinPercentage"]
                        var gamesCount = DATA["ArmiesStatsMap"][armyName]["StatsVsOtherArmiesMap"][againstArmy]["armyGamesCount"]
                        $('ul#'+armyNameWithoutSpaces).append("<li class='list-group-item " + cssClassForPercentage(percentage) + "'>" + " wygrywa <strong>" + percentage + "% </strong> meczów przeciwko <strong>" + againstArmy + "</strong> <small style='display: none;' class='gamesCount'> (" + gamesCount + " gier)</small></li>")

                        if (percentage < min || min === undefined) {
                            min = percentage
                        }

                        if (percentage > max || max === undefined) {
                            max = percentage
                        }

                        sum += percentage
                        iterator++
                        avg = sum / iterator
                    }
                }

                $('div#'+armyNameWithoutSpaces).append("<div class='card-footer fw-semibold'>" + " min: " + min + "% max: " + max + "% avg: " + avg.toFixed(2) + "%</div>")
            }
        }
        $("button#showGamesCount").show()
    });

    $("button#showGamesCount").click(function(){
        $("small.gamesCount").toggle()

        $(this).text(function(i, text){
            return text === "Pokaż liczbę gier" ? "Schowaj liczbę gier" : "Pokaż liczbę gier";
        })
    });


});

function cssClassForPercentage(percentage) {
    if (percentage > 65 ) {
        return "bg-success"
    } else if (percentage > 55) {
        return "bg-success-subtle"
    } else if (percentage < 35) {
        return "bg-danger"
    } else if (percentage < 45) {
        return "bg-warning-subtle"
    } else {
        return ""
    }
}