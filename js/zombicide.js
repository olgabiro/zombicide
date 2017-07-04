tileSize = 160;

$(document).ready(function () {
    "use strict";
    
    var tiles = {},
        rotation = {},
        others = {};
    
    function findCoordinates(x, y, startX, startY) {
        var resultX = 0,
            resultY = 0;

        while (resultX * tileSize + startX + tileSize < x) {
            resultX++;
        }

        while (resultY * tileSize + startY + tileSize < y) {
            resultY++;
        }

        return {x : resultX, y : resultY};
    }
    
    function updateBoard(size=tileSize) {
        $("#canvas .draggable").not(".boardtile").each(function () {
            $(this).appendTo("#canvas");
        });
        
        $("#canvas .boardtile").each(function (index) {
            var canvasWidth = parseInt($("#canvas").css("width")),
                rowLength = canvasWidth - (canvasWidth % size),
                baseX = (index * size) % rowLength,
                baseY = Math.floor((index * size) / rowLength) * size,
                x = tiles[$(this).attr("id")].x * size - baseX,
                y = tiles[$(this).attr("id")].y * size - baseY;
            $(this).css("left", x).css("top", y);
        });
    }
    
    $(".draggable").draggable({
        opacity: 0.35
    });
    
    $(".menu .draggable, .minitiles .draggable").draggable("option", "helper", "clone");
    
    $(".minitiles").droppable({
        drop: function (event, ui) {
            if (ui.draggable.hasClass("boardtile")) {
                var name = ui.draggable.attr("id");
                ui.draggable.remove();
                $("#" + name).parent().show();
                updateBoard();
                delete tiles[name];
            }
        }
    });
    
    function updateCoords(name, coords) {
        if (name in tiles) {
            $.each(tiles, function (index, value) {
                if (value.x === coords.x && value.y === coords.y) {
                    tiles[index] = tiles[name];
                    tiles[name] = coords;
                    return;
                }
            });
        }
        
        tiles[name] = coords;
    }

    $("#canvas").droppable({
        drop: function (event, ui) {
            var canvasCoords = $(this).offset(),
                coords = findCoordinates(event.pageX, event.pageY, canvasCoords.left, canvasCoords.top);
            
            if (ui.draggable.hasClass("tile")) {
                updateCoords(ui.draggable.attr("id"), coords);
            }
            
            else if (ui.draggable.hasClass("on-board")) {
                others[ui.draggable.attr("id")] = {
                    x : ui.offset.left - $(this).offset().left,
                    y : ui.offset.top - $(this).offset().top,
                    width: ui.draggable.width()
                };
            }
            
            if ($(this)[0] !== ui.draggable.parent()[0]) {
                if (!(ui.draggable.hasClass("tile"))) {
                    var x = ui.offset.left,
                        y = ui.offset.top;
                    
                    var id = ui.draggable.attr("id") + "1";
                    var counter = 1;
                    while (id in others) {
                        id = ui.draggable.attr("id") + counter;
                        counter += 1;
                    }
                    
                    ui.draggable.clone().addClass("on-board").css("position", "absolute").css("left", x).css("top", y).attr("id", id).appendTo($(this));
                    
                    others[id] = {
                        x : ui.offset.left - $(this).offset().left,
                        y : ui.offset.top - $(this).offset().top,
                        width: ui.draggable.width()
                    };
                    
                } else {
                    ui.draggable.clone().addClass("boardtile").appendTo($(this));
                    ui.draggable.parent().hide();
                }
                $(".draggable").draggable({
                    opacity: 0.35
                });
            }
            updateBoard();
        }
    });
    
    $("form").droppable({
        drop: function (event, ui) {
            if (ui.draggable.hasClass("on-board")) {
                delete others[ui.draggable.attr("id")];
                ui.draggable.remove();
            }
        }
    });
    
    $("#canvas").on("dblclick", ".draggable", function () {
        var name = $(this).attr("id");
        if (!(name in rotation)) {
            rotation[name] = 0;
        }
        rotation[name] = (rotation[name] + 90) % 360;
        $(this).find("img").css("transform", "rotate(" + rotation[name] + "deg)");
    });
    
    $(window).resize(function () {
        updateBoard();
    });
    
    
    function findCanvasSize(tileWidth) {
        var maxX = 0, maxY = 0;
        for (var key in tiles) {
            if (tiles[key].x > maxX) {
                maxX = tiles[key].x;
            }
            
            if (tiles[key].y > maxY) {
                maxY = tiles[key].y;
            }
        }
        
        return {
            x: (maxX + 1) * tileWidth, 
            y: (maxY + 1) * tileWidth
        };
    }
    
    function scaleCanvas(canvasPosition, tileWidth) {
        $('.boardtile img').css("width", tileWidth).css("height", tileWidth);
        $('.boardtile').css("width", tileWidth).css("height", tileWidth);
        updateBoard(tileWidth);
        
        for (var key in others) {
            var scale = tileWidth / tileSize;
            var width = others[key].width * scale;
            var padding = parseInt($("#canvas").css("padding"));
            $("#" + key + " img").width(width).height("auto");
            
            var left = (others[key].x * scale) + canvasPosition.left + padding;
            var top = (others[key].y * scale) + canvasPosition.top + padding;
            $("#" + key).css("left",left).css("top", top).width(width).height("auto");
        }
    }
    
    $("input").bind("input", function() {
        $("#" + $(this).attr("name")).text($(this).val());
    });
    
    $("select").bind("input", function() {
        var value = translation[lang][$(this).val()];
        $("#" + $(this).attr("name")).text(value);
    });
    
    $("textarea").bind("input", function() {
        $("#" + $(this).attr("name")).text($(this).val());
    });
    
    
    function resizeCanvas(newSize, offset=null) {
        var canvas = $('#canvas');
        var canvasSize = findCanvasSize(newSize);
        canvas.width(canvasSize.x).height(canvasSize.y).css("min-height", "0");
        if (newSize == tileSize) {
            canvas.width("100%").css("min-height", "500px");
        }
        if (!offset) {
            offset = canvas.offset();
        }
        scaleCanvas(offset, newSize);
    }
    
    $("#hide-canvas").click(function () {
        var canvas = $('#canvas');
        if (canvas.hasClass("minified")) {
            canvas.removeClass("minified");
            canvas.width("100%").height("500px").css("padding", "0");
            canvas.css("float", "none").css("clear", "both").css("min-height", "500px");
            $(this).text(translation[lang]["hide-canvas"]);
            scaleCanvas(canvas.position(), tileSize);
            $(".draggable").draggable("enable");
            showGrid(tileSize, canvas.offset(), {
                width: canvas.width(),
                height: canvas.height()
            });
        }
        else {
            canvas.addClass("minified");
            var newSize = tileSize / 4;
            canvas.css("padding", "0.5em").css("float", "right").css("clear", "none").css("margin-right", "2em");
            resizeCanvas(newSize);
            $(this).text(translation[lang]["show-canvas"]);
            $(".draggable").draggable("disable");
            hideGrid();
        }
    });
    
    function countElements(name) {
        var result = 0;
        for (var x in others) {
            if (x.indexOf(name) != -1) {
                result++;
            }
        }
        return result;
    }
    
    function listNeededEquipment() {
        $("#needed-elements").html("");
        var doors = countElements("doors"),
            cars = countElements("cars"),
            objectives = countElements("objectives"),
            spawns = countElements("spawns");
        
        var usedTiles = Object.keys(tiles);
        
        var ul = "<ul>";
        if (doors > 0) {
            ul += `<li>${translation[lang]["doors"]}: ${doors}`;
        }
        if (objectives > 0){
            ul += `<li>${translation[lang]["objectives"]}: ${objectives}`;
        }
        if (cars > 0) {
            ul += `<li>${translation[lang]["cars"]}: ${cars}`;
        }
        if (spawns > 0) {
            ul += `<li>${translation[lang]["spawns"]}: ${spawns}`;
        }
        ul += "</ul>";
        
        $("#needed-elements").append(ul);
        
        var tilesList = "<p>" + translation[lang]["used-tiles"] + ": ";
        for (var tile in usedTiles) {
            tilesList += usedTiles[tile];
            tilesList += ", "
        }
        tilesList = tilesList.slice(0, tilesList.lastIndexOf(","));
        tilesList += "</p>"
        
        $("#needed-elements").append(tilesList);    
    }
    
    function showScenario() {
        $(".scenario").css("display", "inherit").css("visibility", "visible");
    }
    
    function hideScenario() {
        $(".scenario").css("display", "none").css("visibility", "hidden");
    }
    
    $("#print-button").click(function () {
        if ($("#special-rules").text() == "") {            
            $("#special-rules").addClass("hidden");
            $("#special-rules").prev().addClass("hidden");
        }
        
        else {
            $("#special-rules").removeClass("hidden");
            $("#special-rules").prev().removeClass("hidden");
        }
        
        if ($("#canvas").hasClass("minified")) {
            $("#hide-canvas").click();
        }
        
        showScenario();
        
        var offset = {
            top: 132,
            left: 56
        };
        resizeCanvas(tileSize / 2, offset);
        listNeededEquipment();
        window.print();
        
        hideScenario();
        resizeCanvas(tileSize);
    });
});
