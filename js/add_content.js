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
            "a" : ["pictures/prison-outbreak/tiles/1P.png", "pictures/prison-outbreak/tiles/15P.png"],
            "b" : ["pictures/prison-outbreak/tiles/2P.png", "pictures/prison-outbreak/tiles/8P.png"],
            "c" : ["pictures/prison-outbreak/tiles/3P.png", "pictures/prison-outbreak/tiles/12P.png"],
            "d" : ["pictures/prison-outbreak/tiles/4P.png", "pictures/prison-outbreak/tiles/6P.png"],
            "e" : ["pictures/prison-outbreak/tiles/5P.png", "pictures/prison-outbreak/tiles/14P.png"],
            "f" : ["pictures/prison-outbreak/tiles/7P.png", "pictures/prison-outbreak/tiles/11P.png"],
            "g" : ["pictures/prison-outbreak/tiles/9P.png", "pictures/prison-outbreak/tiles/13P.png"],
            "h" : ["pictures/prison-outbreak/tiles/10P.png", "pictures/prison-outbreak/tiles/18P.png"],
            "i" : ["pictures/prison-outbreak/tiles/16P.png", "pictures/prison-outbreak/tiles/17P.png"]
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
            "a" : ["pictures/zombicide/tiles/1B.jpg", "pictures/zombicide/tiles/3B.jpg"],
            "b" : ["pictures/zombicide/tiles/1C.jpg", "pictures/zombicide/tiles/3C.jpg"],
            "c" : ["pictures/zombicide/tiles/2B.jpg", "pictures/zombicide/tiles/6B.jpg"],
            "d" : ["pictures/zombicide/tiles/2C.jpg", "pictures/zombicide/tiles/6C.jpg"],
            "e" : ["pictures/zombicide/tiles/4B.jpg", "pictures/zombicide/tiles/5B.jpg"],
            "f" : ["pictures/zombicide/tiles/4C.jpg", "pictures/zombicide/tiles/5C.jpg"],
            "g" : ["pictures/zombicide/tiles/4D.jpg", "pictures/zombicide/tiles/5D.jpg"],
            "h" : ["pictures/zombicide/tiles/4E.jpg", "pictures/zombicide/tiles/5E.jpg"],
            "i" : ["pictures/zombicide/tiles/7B.jpg", "pictures/zombicide/tiles/5F.jpg"]
        }
    }, rue_morgue = {
        spawns: [
            "pictures/rue-morgue/spawns/pink.png",
            "pictures/rue-morgue/spawns/blue.png",
            "pictures/rue-morgue/spawns/red.png"
        ],
        tents: [
            "pictures/rue-morgue/tents/rb2.png",
            "pictures/rue-morgue/tents/rb5.png",
            "pictures/rue-morgue/tents/rb3.png",
            "pictures/rue-morgue/tents/rb1.png",
            "pictures/rue-morgue/tents/r1.png",
            "pictures/rue-morgue/tents/r2.png",
            "pictures/rue-morgue/tents/r3.png",
            "pictures/rue-morgue/tents/rv.png",
            "pictures/rue-morgue/tents/r4.png",
            "pictures/rue-morgue/tents/rb4.png",
            "pictures/rue-morgue/tents/r6.png",
            "pictures/rue-morgue/tents/r5.png"
        ],
        helicopters: [
            "pictures/rue-morgue/helicopter/helicopter.png",
            "pictures/rue-morgue/helicopter/crashed.png"
        ],
        doors: [
            "pictures/rue-morgue/doors/pink-closed.png",
            "pictures/rue-morgue/doors/red-closed.png",
            "pictures/rue-morgue/doors/red-open.png",
            "pictures/rue-morgue/doors/blue-open.png",
            "pictures/rue-morgue/doors/pink-open.png",
            "pictures/rue-morgue/doors/blue-closed.png"
        ],
        objectives: [
            "pictures/rue-morgue/objectives/pink.png",
            "pictures/rue-morgue/objectives/blue.png",
            "pictures/rue-morgue/objectives/red.png"
        ],
        others: [
            "pictures/rue-morgue/other/locator_2.png",
            "pictures/rue-morgue/other/locator_6.png",
            "pictures/rue-morgue/other/trigger_off.png",
            "pictures/rue-morgue/other/locator_4.png",
            "pictures/rue-morgue/other/exit.png",
            "pictures/rue-morgue/other/start.png",
            "pictures/rue-morgue/other/helicopter_stairs.png",
            "pictures/rue-morgue/other/noise.png",
            "pictures/rue-morgue/other/locator_5.png",
            "pictures/rue-morgue/other/locator_1.png",
            "pictures/rue-morgue/other/trigger_on.png",
            "pictures/rue-morgue/other/locator_3.png"
        ],
        tiles: {
            "a": ["pictures/rue-morgue/tiles/1R.png", "pictures/rue-morgue/tiles/1V.png"],
            "b": ["pictures/rue-morgue/tiles/2R.png", "pictures/rue-morgue/tiles/2V.png"],
            "c": ["pictures/rue-morgue/tiles/3R.png", "pictures/rue-morgue/tiles/3V.png"],
            "d": ["pictures/rue-morgue/tiles/4R.png", "pictures/rue-morgue/tiles/4V.png"],
            "e": ["pictures/rue-morgue/tiles/5R.png", "pictures/rue-morgue/tiles/5V.png"],
            "f": ["pictures/rue-morgue/tiles/6R.png", "pictures/rue-morgue/tiles/6V.png"],
            "g": ["pictures/rue-morgue/tiles/7R.png", "pictures/rue-morgue/tiles/7V.png"],
            "h": ["pictures/rue-morgue/tiles/8R.png", "pictures/rue-morgue/tiles/8V.png"],
            "i": ["pictures/rue-morgue/tiles/9R.png", "pictures/rue-morgue/tiles/9V.png"]
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
            var id_name = value.slice(value.lastIndexOf("/") + 1, value.lastIndexOf("."));
            var object = '<div class="draggable zombicide tile" id="' + id_name + '" title="' + id_name + '"><img src="' + value + '"></div>';
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
        var object = '<div class="draggable prison-outbreak" id="' + id_name + '" title="' + id_name + '"><img src="' + value + '"></div>';
        $("div.spawns").append(object);
    });
    
    $.each(prison_outbreak.tiles, function (ind, val) {
        $(".minitiles").append('<div class="prison-outbreak ' + ind + '"></div>');
        $.each(val, function(index, value) {
            var id_name = value.slice(value.lastIndexOf("/") + 1, value.lastIndexOf("."));
            var object = '<div class="draggable prison-outbreak tile" id="' + id_name + '"><img src="' + value + '"></div>';
            $(".minitiles .prison-outbreak." + ind).append(object);
        });
    });
    
    $.each(rue_morgue.spawns, function (index, value) {
        var id_name = value.replace(/\/|\./g, "-");
        var object = '<div class="draggable rue-morgue" id="' + id_name + '"><img src="' + value + '"></div>';
        $("div.spawns").append(object);
    });
    
    $.each(rue_morgue.doors, function (index, value) {
        var id_name = value.replace(/\/|\./g, "-");
        var object = '<div class="draggable rue-morgue" id="' + id_name + '"><img src="' + value + '"></div>';
        $("div.doors").append(object);
    });
    
    $.each(rue_morgue.helicopters, function (index, value) {
        var id_name = value.replace(/\/|\./g, "-");
        var object = '<div class="draggable rue-morgue" id="' + id_name + '"><img src="' + value + '"></div>';
        $("div.helicopter").append(object);
    });
    
    $.each(rue_morgue.objectives, function (index, value) {
        var id_name = value.replace(/\/|\./g, "-");
        var object = '<div class="draggable rue-morgue" id="' + id_name + '"><img src="' + value + '"></div>';
        $("div.objectives").append(object);
    });
    
    $.each(rue_morgue.others, function (index, value) {
        var id_name = value.replace(/\/|\./g, "-");
        var object = '<div class="draggable rue-morgue" id="' + id_name + '"><img src="' + value + '"></div>';
        $("div.other").append(object);
    });
    
    $.each(rue_morgue.tents, function (index, value) {
        var id_name = value.replace(/\/|\./g, "-");
        var object = '<div class="draggable rue-morgue" id="' + id_name + '"><img src="' + value + '"></div>';
        $("div.tents").append(object);
    });
    
    $.each(rue_morgue.tiles, function (ind, val) {
        $(".minitiles").append('<div class="rue-morgue ' + ind + '"></div>');
        $.each(val, function(index, value) {
            var id_name = value.slice(value.lastIndexOf("/") + 1, value.lastIndexOf("."));
            var object = '<div class="draggable rue-morgue tile" id="' + id_name + '" title="' + id_name + '"><img src="' + value + '"></div>';
            $(".minitiles .rue-morgue." + ind).append(object);
        });
    });
});