var translation = {
    "lang-en":  {
        "hide-canvas": "Shrink board",
        "show-canvas": "Enlarge board",
        "print-button": "Print scenario",
        "edition": "Available editions",
        "doors": "Doors",
        "objectives": "Objectives",
        "cars": "Cars",
        "spawns": "Spawns",
        "helicopter": "Helicopter",
        "tents": "Tents",
        "other": "Other",
        "game-title": "Title",
        "easy": "Easy",
        "medium": "Medium",
        "hard": "Hard",
        "suicide": "Suicide",
        "players_no": "Players",
        "edit-story": "Story",
        "edit-goals": "Objectives",
        "edit-special": "Special rules",
        "header-needed": "Needed items",
        "used-tiles": "Used tiles"
    },
    "lang-pl":  {
        "hide-canvas": "Zmniejsz planszę",
        "show-canvas": "Powiększ planszę",
        "print-button": "Drukuj scenariusz",
        "edition": "Dostępne edycje",
        "doors": "Drzwi",
        "objectives": "Znaczniki",
        "cars": "Samochody",
        "spawns": "Strefy namnażania",
        "helicopter": "Helikopter",
        "tents": "Namioty",
        "other": "Inne",
        "game-title": "Tytuł",
        "easy": "Łatwy",
        "medium": "Średni",
        "hard": "Trudny",
        "suicide": "Samobójstwo",
        "players_no": "Graczy",
        "edit-story": "Opis",
        "edit-goals": "Cele",
        "edit-special": "Zasady specjalne",
        "header-needed": "Potrzebne elementy",
        "used-tiles": "Użyte kafelki"
    }
};

var lang = "lang-en";

$(document).ready(function() {
    $(".languages a").click(function(evt) {
        var key = $(this).attr("id")
        lang = key;
        $.each(translation[key], function(id, val) {
           $("#" + id).text(val);
        });
        $("#edit-title").attr("placeholder", translation[key]["game-title"]);
        $("#header-goals").text(translation[key]["edit-goals"].toUpperCase());
        $("#header-special").text(translation[key]["edit-special"].toUpperCase());
        $("#level").text(translation[key]["easy"].toUpperCase());
    });

    $("#lang-en").click();
});