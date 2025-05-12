
$(document).ready(function () {
    "use strict";

    /************************* ADDING ZOMBICIDE ELEMENTS ***********************************/

    loadAssets(zombicide, "zombicide");

    /************************* ADDING PRISON OUTBREAK ELEMENTS ***********************************/

    loadAssets(prison_outbreak, "prison-outbreak");

    /************************* ADDING RUE MORGUE ELEMENTS ***********************************/

    loadAssets(rue_morgue, "rue-morgue");

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

function loadAssets(assetPack, seasonClass) {
    $.each(assetPack.cars, (index, value) => {
        loadAsset(value, "cars", seasonClass);
    });

    $.each(assetPack.doors, function (index, value) {
        loadAsset(value, "doors", seasonClass);
    });

    $.each(assetPack.objectives, function (index, value) {
        loadAsset(value, "objectives", seasonClass);
    });

    $.each(assetPack.others, function (index, value) {
        loadAsset(value, "other", seasonClass);
    });

    $.each(assetPack.tents, function (index, value) {
        loadAsset(value, "tents", seasonClass);
    });

    $.each(assetPack.helicopters, function (index, value) {
        loadAsset(value, "helicopter", seasonClass);
    });

    $.each(assetPack.spawns, function (index, value) {
        loadAsset(value, "spawns", seasonClass);
    });

    $.each(assetPack.tiles, function (ind, val) {
        $(".miniTiles").append(`<div class="zombicide ${ind}"></div>`);
        $.each(val, function (index, value) {
            const object = createImageForMiniTile(value, seasonClass);
            $(`.miniTiles .zombicide.${ind}`).append(object);
        });
    });
}

function loadAsset(value, className, seasonClass) {
    const object = createImage(value, seasonClass);
    $(`div.${className}`).append(object);
}

function createImage(value, seasonClass) {
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
