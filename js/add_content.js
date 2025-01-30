$(document).ready(function () {
    "use strict";
    const prison_outbreak = {
        spawns: [
            "pictures/prison-outbreak/spawns/green.png",
            "pictures/prison-outbreak/spawns/white.png",
            "pictures/prison-outbreak/spawns/yellow.png",
            "pictures/prison-outbreak/spawns/violet.png"
        ],
        cars: [
            "pictures/prison-outbreak/cars/muscle.png",
            "pictures/prison-outbreak/cars/hippie.png",
            "pictures/prison-outbreak/cars/taxi-1.png"
        ],
        doors: [
            "pictures/prison-outbreak/doors/main-white-closed.png",
            "pictures/prison-outbreak/doors/yellow-open.png",
            "pictures/prison-outbreak/doors/security-gate-2.png",
            "pictures/prison-outbreak/doors/white-closed.png",
            "pictures/prison-outbreak/doors/white-open.png",
            "pictures/prison-outbreak/doors/main-white-open.png",
            "pictures/prison-outbreak/doors/main-standard-closed.png",
            "pictures/prison-outbreak/doors/security-gate-1.png",
            "pictures/prison-outbreak/doors/cell-violet-closed.png",
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
            "pictures/prison-outbreak/objectives/white.png",
            "pictures/prison-outbreak/objectives/yellow.png",
            "pictures/prison-outbreak/objectives/violet.png"
        ],
        other: [
            "pictures/prison-outbreak/other/observation-1.png",
            "pictures/prison-outbreak/other/switch-violet.png",
            "pictures/prison-outbreak/other/observation-2.png",
            "pictures/prison-outbreak/other/switch-white.png",
            "pictures/prison-outbreak/other/torn-barbwire.png",
            "pictures/prison-outbreak/other/switch-yellow.png"
        ],
        tiles: {
            "a": ["pictures/prison-outbreak/tiles/1P.png", "pictures/prison-outbreak/tiles/15P.png"],
            "b": ["pictures/prison-outbreak/tiles/2P.png", "pictures/prison-outbreak/tiles/8P.png"],
            "c": ["pictures/prison-outbreak/tiles/3P.png", "pictures/prison-outbreak/tiles/12P.png"],
            "d": ["pictures/prison-outbreak/tiles/4P.png", "pictures/prison-outbreak/tiles/6P.png"],
            "e": ["pictures/prison-outbreak/tiles/5P.png", "pictures/prison-outbreak/tiles/14P.png"],
            "f": ["pictures/prison-outbreak/tiles/7P.png", "pictures/prison-outbreak/tiles/11P.png"],
            "g": ["pictures/prison-outbreak/tiles/9P.png", "pictures/prison-outbreak/tiles/13P.png"],
            "h": ["pictures/prison-outbreak/tiles/10P.png", "pictures/prison-outbreak/tiles/18P.png"],
            "i": ["pictures/prison-outbreak/tiles/16P.png", "pictures/prison-outbreak/tiles/17P.png"]
        }
    }, zombicide = {
        tiles: {
            "a": ["pictures/zombicide/tiles/1B.jpg", "pictures/zombicide/tiles/3B.jpg"],
            "b": ["pictures/zombicide/tiles/1C.jpg", "pictures/zombicide/tiles/3C.jpg"],
            "c": ["pictures/zombicide/tiles/2B.jpg", "pictures/zombicide/tiles/6B.jpg"],
            "d": ["pictures/zombicide/tiles/2C.jpg", "pictures/zombicide/tiles/6C.jpg"],
            "e": ["pictures/zombicide/tiles/4B.jpg", "pictures/zombicide/tiles/5B.jpg"],
            "f": ["pictures/zombicide/tiles/4C.jpg", "pictures/zombicide/tiles/5C.jpg"],
            "g": ["pictures/zombicide/tiles/4D.jpg", "pictures/zombicide/tiles/5D.jpg"],
            "h": ["pictures/zombicide/tiles/4E.jpg", "pictures/zombicide/tiles/5E.jpg"],
            "i": ["pictures/zombicide/tiles/7B.jpg", "pictures/zombicide/tiles/5F.jpg"]
        }
    }, rue_morgue = {
        spawns: [
            "pictures/rue-morgue/spawns/pink.png"
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
            "pictures/rue-morgue/doors/pink-open.png",
        ],
        objectives: [
            "pictures/rue-morgue/objectives/pink.png"
        ],
        others: [
            "pictures/rue-morgue/other/locator_2.png",
            "pictures/rue-morgue/other/locator_6.png",
            "pictures/rue-morgue/other/trigger_off.png",
            "pictures/rue-morgue/other/locator_4.png",
            "pictures/rue-morgue/other/helicopter_stairs.png",
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

    /************************* ADDING ZOMBICIDE ELEMENTS ***********************************/

    $.each(zombicide.cars, function (index, value) {
        const object = createImage(value);
        $("div.cars").append(object);
    });

    $.each(zombicide.doors, function (index, value) {
        const object = createImage(value);
        $("div.doors").append(object);
    });

    $.each(zombicide.objectives, function (index, value) {
        const object = createImage(value);
        $("div.objectives").append(object);
    });

    $.each(zombicide.others, function (index, value) {
        const object = createImage(value);
        $("div.other").append(object);
    });

    $.each(zombicide.spawns, function (index, value) {
        const object = createImage(value);
        $("div.spawns").append(object);
    });

    $.each(zombicide.tiles, function (ind, val) {
        $(".miniTiles").append('<div class="zombicide ' + ind + '"></div>');
        $.each(val, function (index, value) {
            const object = createImageForMiniTile(value, "zombicide");
            $(".miniTiles .zombicide." + ind).append(object);
        });
    });

    /************************* ADDING PRISON OUTBREAK ELEMENTS ***********************************/

    $.each(prison_outbreak.cars, function (index, value) {
        const object = createImage(value, "prison-outbreak");
        $("div.cars").append(object);
    });

    $.each(prison_outbreak.doors, function (index, value) {
        const object = createImage(value, "prison-outbreak");
        $("div.doors").append(object);
    });

    $.each(prison_outbreak.objectives, function (index, value) {
        const object = createImage(value, "prison_outbreak");
        $("div.objectives").append(object);
    });

    $.each(prison_outbreak.other, function (index, value) {
        const object = createImage(value, "prison-outbreak");
        $("div.other").append(object);
    });

    $.each(prison_outbreak.spawns, function (index, value) {
        const object = createImage(value, "prison-outbreak");
        $("div.spawns").append(object);
    });

    $.each(prison_outbreak.tiles, function (ind, val) {
        $(".miniTiles").append('<div class="prison-outbreak ' + ind + '"></div>');
        $.each(val, function (index, value) {
            const object = createImageForMiniTile(value, "prison-outbreak");
            $(".miniTiles .prison-outbreak." + ind).append(object);
        });
    });

    /************************* ADDING RUE MORGUE ELEMENTS ***********************************/

    $.each(rue_morgue.spawns, function (index, value) {
        const object = createImage(value, "rue-morgue");
        $("div.spawns").append(object);
    });

    $.each(rue_morgue.doors, function (index, value) {
        const object = createImage(value, "rue-morgue");
        $("div.doors").append(object);
    });

    $.each(rue_morgue.helicopters, function (index, value) {
        const object = createImage(value, "rue-morgue");
        $("div.helicopter").append(object);
    });

    $.each(rue_morgue.objectives, function (index, value) {
        const object = createImage(value, "rue-morgue");
        $("div.objectives").append(object);
    });

    $.each(rue_morgue.others, function (index, value) {
        const object = createImage(value, "rue-morgue");
        $("div.other").append(object);
    });

    $.each(rue_morgue.tents, function (index, value) {
        const object = createImage(value, "rue-morgue");
        $("div.tents").append(object);
    });

    $.each(rue_morgue.tiles, function (ind, val) {
        $(".miniTiles").append('<div class="rue-morgue ' + ind + '"></div>');
        $.each(val, function (index, value) {
            const object = createImageForMiniTile(value, "rue-morgue");
            $(".miniTiles .rue-morgue." + ind).append(object);
        });
    });

    /************************* ADDING COMMON ELEMENTS ***********************************/

    $.each(common.cars, function (index, value) {
        const object = createCommonObjectImage(value);
        $("div.cars").append(object);
    });

    $.each(common.doors, function (index, value) {
        const object = createCommonObjectImage(value);
        $("div.doors").append(object);
    });

    $.each(common.objectives, function (index, value) {
        const object = createCommonObjectImage(value);
        $("div.objectives").append(object);
    });

    $.each(common.others, function (index, value) {
        const object = createCommonObjectImage(value);
        $("div.other").append(object);
    });

    $.each(common.spawns, function (index, value) {
        const object = createCommonObjectImage(value)
        $("div.spawns").append(object);
    });
});

function createImage(value, seasonClass = "zombicide") {
    const id_name = value.replace(/[\/.]/g, "-");
    return `<div class="draggable ${seasonClass}" id="${id_name}"><img src="${value}" alt="${value}"></div>`;
}

function createImageForMiniTile(value, seasonClass) {
    const id_name = value.slice(value.lastIndexOf("/") + 1, value.lastIndexOf("."));
    return `<div class="draggable ${seasonClass} tile" id="${id_name}"><img src="${value}" alt="${value}"></div>`;
}

function createCommonObjectImage(value) {
    return `<div class="draggable common" id ="${value.id}"><img src="${value.path}" alt="${value.path}"></div>`;
}
