$(document).ready(function () {
    "use strict";
    var prison_outbreak = {
        spawns: [
            "pictures/prison-outbreak/spawns/blue.jpg",
            "pictures/prison-outbreak/spawns/red.jpg",
            "pictures/prison-outbreak/spawns/green.png",
            "pictures/prison-outbreak/spawns/white.png",
            "pictures/prison-outbreak/spawns/yellow.png",
            "pictures/prison-outbreak/spawns/violet.png"
        ],
        cars: [
            "pictures/prison-outbreak/cars/taxi-2.png",
            "pictures/prison-outbreak/cars/muscle.png",
            "pictures/prison-outbreak/cars/police-1.jpg",
            "pictures/prison-outbreak/cars/hippie.png",
            "pictures/prison-outbreak/cars/pimp-2.jpg",
            "pictures/prison-outbreak/cars/taxi-1.png",
            "pictures/prison-outbreak/cars/pimp-1.jpg",
            "pictures/prison-outbreak/cars/police-2.jpg"
        ],
        doors: [
            "pictures/prison-outbreak/doors/main-white-closed.png",
            "pictures/prison-outbreak/doors/yellow-open.png",
            "pictures/prison-outbreak/doors/red-open.jpg",
            "pictures/prison-outbreak/doors/security-gate-2.png",
            "pictures/prison-outbreak/doors/white-closed.png",
            "pictures/prison-outbreak/doors/white-open.png",
            "pictures/prison-outbreak/doors/main-white-open.png",
            "pictures/prison-outbreak/doors/main-standard-closed.png",
            "pictures/prison-outbreak/doors/red-closed.jpg",
            "pictures/prison-outbreak/doors/security-gate-1.png",
            "pictures/prison-outbreak/doors/green-open.jpg",
            "pictures/prison-outbreak/doors/cell-violet-closed.png",
            "pictures/prison-outbreak/doors/blue-closed.jpg",
            "pictures/prison-outbreak/doors/blue-open.jpg",
            "pictures/prison-outbreak/doors/green-closed.jpg",
            "pictures/prison-outbreak/doors/cell-white-open.png",
            "pictures/prison-outbreak/doors/cell-white-closed.png",
            "pictures/prison-outbreak/doors/cell-violet-open.png",
            "pictures/prison-outbreak/doors/violet-open.png",
            "pictures/prison-outbreak/doors/yellow-closed.png",
            "pictures/prison-outbreak/doors/main-violet-open.png",
            "pictures/prison-outbreak/doors/main-violet-closed.png",
            "pictures/prison-outbreak/doors/violet-closed.png",
            "pictures/prison-outbreak/doors/main-standard-open.png"
        ],
        objectives: [
            "pictures/prison-outbreak/objectives/blue.jpg",
            "pictures/prison-outbreak/objectives/white.png",
            "pictures/prison-outbreak/objectives/yellow.png",
            "pictures/prison-outbreak/objectives/red.jpg",
            "pictures/prison-outbreak/objectives/violet.png",
            "pictures/prison-outbreak/objectives/green.jpg"
        ],
        other: [
            "pictures/prison-outbreak/other/exit.jpg",
            "pictures/prison-outbreak/other/start.jpg",
            "pictures/prison-outbreak/other/observation-1.png",
            "pictures/prison-outbreak/other/noise.png",
            "pictures/prison-outbreak/other/switch-violet.png",
            "pictures/prison-outbreak/other/observation-2.png",
            "pictures/prison-outbreak/other/switch-white.png",
            "pictures/prison-outbreak/other/torn-barbwire.png",
            "pictures/prison-outbreak/other/switch-yellow.png"
        ],
        tiles: {
            "a" : ["pictures/prison-outbreak/tiles/a1.png", "pictures/prison-outbreak/tiles/a2.png"],
            "b" : ["pictures/prison-outbreak/tiles/b1.png", "pictures/prison-outbreak/tiles/b2.png"],
            "c" : ["pictures/prison-outbreak/tiles/c1.png", "pictures/prison-outbreak/tiles/c2.png"],
            "d" : ["pictures/prison-outbreak/tiles/d1.png", "pictures/prison-outbreak/tiles/d2.png"],
            "e" : ["pictures/prison-outbreak/tiles/e1.png", "pictures/prison-outbreak/tiles/e2.png"],
            "f" : ["pictures/prison-outbreak/tiles/f1.png", "pictures/prison-outbreak/tiles/f2.png"],
            "g" : ["pictures/prison-outbreak/tiles/g1.png", "pictures/prison-outbreak/tiles/g2.png"],
            "h" : ["pictures/prison-outbreak/tiles/h1.png", "pictures/prison-outbreak/tiles/h2.png"],
            "i" : ["pictures/prison-outbreak/tiles/i1.png", "pictures/prison-outbreak/tiles/i2.png"]
        }
    }, zombicide = {
        cars: [
            "pictures/zombicide/cars/police.jpg",
            "pictures/zombicide/cars/pimp.jpg"
        ],
        doors: [
            "pictures/zombicide/doors/closed-green.jpg",
            "pictures/zombicide/doors/open-green.jpg",
            "pictures/zombicide/doors/open-red.jpg",
            "pictures/zombicide/doors/open-blue.jpg",
            "pictures/zombicide/doors/closed-red.jpg",
            "pictures/zombicide/doors/closed-blue.jpg"
        ],
        objectives: [
            "pictures/zombicide/objectives/blue.jpg",
            "pictures/zombicide/objectives/red.jpg",
            "pictures/zombicide/objectives/green.jpg"
        ],
        others: [
            "pictures/zombicide/others/exit.jpg",
            "pictures/zombicide/others/start.jpg",
            "pictures/zombicide/others/noise.png"
        ],
        spawns: [
            "pictures/zombicide/spawns/blue.jpg",
            "pictures/zombicide/spawns/red.jpg"
        ],
        tiles: {
            "a" : ["pictures/zombicide/tiles/a-1.jpg", "pictures/zombicide/tiles/a-2.jpg"],
            "b" : ["pictures/zombicide/tiles/b-1.jpg", "pictures/zombicide/tiles/b-2.jpg"],
            "c" : ["pictures/zombicide/tiles/c-1.jpg", "pictures/zombicide/tiles/c-2.jpg"],
            "d" : ["pictures/zombicide/tiles/d-1.jpg", "pictures/zombicide/tiles/d-2.jpg"],
            "e" : ["pictures/zombicide/tiles/e-1.jpg", "pictures/zombicide/tiles/e-2.jpg"],
            "f" : ["pictures/zombicide/tiles/f-1.jpg", "pictures/zombicide/tiles/f-2.jpg"],
            "g" : ["pictures/zombicide/tiles/g-1.jpg", "pictures/zombicide/tiles/g-2.jpg"],
            "h" : ["pictures/zombicide/tiles/h-1.jpg", "pictures/zombicide/tiles/h-2.jpg"],
            "i" : ["pictures/zombicide/tiles/i-1.jpg", "pictures/zombicide/tiles/i-2.jpg"]
        }
    };
    
    $.each(zombicide.cars, function (index, value) {
        var id_name = value.replace(/\/|\./g, "-");
        var object = '<div class="draggable zombicide" id="' + id_name + '"><img src="' + value + '"></div>';
        $("div.cars").append(object);
    });
    
    $.each(zombicide.doors, function (index, value) {
        var id_name = value.replace(/\/|\./g, "-");
        var object = '<div class="draggable zombicide" id="' + id_name + '"><img src="' + value + '"></div>';
        $("div.doors").append(object);
    });
    
    $.each(zombicide.objectives, function (index, value) {
        var id_name = value.replace(/\/|\./g, "-");
        var object = '<div class="draggable zombicide" id="' + id_name + '"><img src="' + value + '"></div>';
        $("div.objectives").append(object);
    });
    
    $.each(zombicide.others, function (index, value) {
        var id_name = value.replace(/\/|\./g, "-");
        var object = '<div class="draggable zombicide" id="' + id_name + '"><img src="' + value + '"></div>';
        $("div.other").append(object);
    });
    
    $.each(zombicide.spawns, function (index, value) {
        var id_name = value.replace(/\/|\./g, "-");
        var object = '<div class="draggable zombicide" id="' + id_name + '"><img src="' + value + '"></div>';
        $("div.spawns").append(object);
    });
    
    $.each(zombicide.tiles, function (ind, val) {
        $(".minitiles").append('<div class="zombicide ' + ind + '"></div>');
        $.each(val, function(index, value) {
            var id_name = value.replace(/\/|\./g, "-");
            var object = '<div class="draggable zombicide tile" id="' + id_name + '"><img src="' + value + '"></div>';
            $(".minitiles .zombicide." + ind).append(object);
        });
    });
    
    $.each(prison_outbreak.cars, function (index, value) {
        var id_name = value.replace(/\/|\./g, "-");
        var object = '<div class="draggable prison-outbreak" id="' + id_name + '"><img src="' + value + '"></div>';
        $("div.cars").append(object);
    });
    
    $.each(prison_outbreak.cars, function (index, value) {
        var id_name = value.replace(/\/|\./g, "-");
        var object = '<div class="draggable prison-outbreak" id="' + id_name + '"><img src="' + value + '"></div>';
        $("div.cars").append(object);
    });
    
    $.each(prison_outbreak.doors, function (index, value) {
        var id_name = value.replace(/\/|\./g, "-");
        var object = '<div class="draggable prison-outbreak" id="' + id_name + '"><img src="' + value + '"></div>';
        $("div.doors").append(object);
    });
    
    $.each(prison_outbreak.objectives, function (index, value) {
        var id_name = value.replace(/\/|\./g, "-");
        var object = '<div class="draggable prison-outbreak" id="' + id_name + '"><img src="' + value + '"></div>';
        $("div.objectives").append(object);
    });
    
    $.each(prison_outbreak.other, function (index, value) {
        var id_name = value.replace(/\/|\./g, "-");
        var object = '<div class="draggable prison-outbreak" id="' + id_name + '"><img src="' + value + '"></div>';
        $("div.other").append(object);
    });
    
    $.each(prison_outbreak.spawns, function (index, value) {
        var id_name = value.replace(/\/|\./g, "-");
        var object = '<div class="draggable prison-outbreak" id="' + id_name + '"><img src="' + value + '"></div>';
        $("div.spawns").append(object);
    });
    
    $.each(prison_outbreak.tiles, function (ind, val) {
        $(".minitiles").append('<div class="prison-outbreak ' + ind + '"></div>');
        $.each(val, function(index, value) {
            var id_name = value.replace(/\/|\./g, "-");
            var object = '<div class="draggable prison-outbreak tile" id="' + id_name + '"><img src="' + value + '"></div>';
            $(".minitiles .prison-outbreak." + ind).append(object);
        });
    });
});