$(document).ready(function () {
    "use strict";
    
    var tiles = {},
        tileSize = 200;
    
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
        var lastX = 0,
            lastY = 0;
        
        $("#canvas .boardtile").each(function (index) {
            var x = tiles[$(this).attr("id")].x - lastX,
                y = tiles[$(this).attr("id")].y - lastY;
            
            $(this).css("left", x).css("top", y);
            lastX += tileSize;
            
            console.log($("#canvas").css("width"), lastX)
            if (lastX + tileSize >= parseInt($("#canvas").css("width"))) {
                lastX = 0;
                lastY += tileSize;
            }
            console.log($(this).attr("id"), x, y)
        });
    }
    
    $(".draggable").draggable({
        opacity: 0.35
    });
    
    $(".minitiles").droppable({
        drop: function (event, ui) {
            ui.draggable.removeClass("boardtile").css("left", "initial").css("top", "initial").css("right", "initial");
            $(this).append(ui.draggable);
        }
    });

    $("#canvas").droppable({
        drop: function (event, ui) {            
            if (ui.draggable.hasClass("tile")) {
                var canvasCoords = $(this).offset(),
                    coords = findCoordinates(event.pageX, event.pageY, canvasCoords.left, canvasCoords.top);
                ui.draggable.addClass("boardtile");
                $(this).append(ui.draggable);
                tiles[ui.draggable.attr("id")] = coords;
                updateBoard();
            }
        }
    });
    
    $("div.menu").droppable({
        drop: function (event, ui) {
            console.log("ten kod sie wykonuje!");
            ui.draggable.css("left", 0).css("top", 0);
        }
    });
});
