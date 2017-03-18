$(document).ready(function () {
    "use strict";
    
    var tiles = {},
        tileSize = 200,
        rotation = {};
    
    function findCoordinates(x, y, startX, startY) {
        var resultX = 0,
            resultY = 0;

        while (resultX + startX + tileSize < x) {
            resultX += tileSize;
        }

        while (resultY + startY + tileSize < y) {
            resultY += tileSize;
        }

        return {x : resultX, y : resultY};
    }
    
    function updateBoard() {
        
        $("#canvas .draggable").not(".boardtile").each(function () {
            $(this).appendTo("#canvas");
        });
        
        $("#canvas .boardtile").each(function (index) {
            var canvasWidth = parseInt($("#canvas").css("width")),
                rowLength = canvasWidth - (canvasWidth % tileSize),
                baseX = (index * tileSize) % rowLength,
                baseY = Math.floor((index * tileSize) / rowLength) * tileSize,
                x = tiles[$(this).attr("id")].x - baseX,
                y = tiles[$(this).attr("id")].y - baseY;
            
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
                console.log(name, tiles);
                updateBoard();
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
            
            if ($(this)[0] !== ui.draggable.parent()[0]) {
                if (!(ui.draggable.hasClass("tile"))) {
                    var x = ui.position.left - $(this).offset().left,
                        y = ui.position.top;
                    ui.draggable.clone().addClass("on-board").css("position", "absolute").css("left", x).css("top", y).appendTo($(this));
                    
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
});
