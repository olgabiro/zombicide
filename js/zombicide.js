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
        var lastX = 0,
            lastY = 0;
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
    
    $(".menu .draggable").draggable("option", "helper", "clone");
    
    $(".minitiles").droppable({
        drop: function (event, ui) {
            ui.draggable.removeClass("boardtile").css("left", "initial").css("top", "initial").css("right", "initial");
            $(this).append(ui.draggable);
        }
    });

    $("#canvas").droppable({
        drop: function (event, ui) {            
            var canvasCoords = $(this).offset(),
                coords = findCoordinates(event.pageX, event.pageY, canvasCoords.left, canvasCoords.top);
            if (ui.draggable.hasClass("tile")) {
                ui.draggable.addClass("boardtile");
                tiles[ui.draggable.attr("id")] = coords;
            }
            
            if ($(this)[0] != ui.draggable.parent()[0]) {
                if (!(ui.draggable.hasClass("tile"))) {
                    ui.draggable.clone().css("position", "fixed").css("left", event.pageX).css("top", event.pageY).appendTo($(this));
                    $(".draggable").draggable({
                       opacity: 0.35 
                    });
                } else {
                    $(this).append(ui.draggable);    
                }
            }
            
            updateBoard();
        }
    });
    
    $("div.menu").droppable({
        drop: function (event, ui) {
            ui.draggable.remove();            
        }
    });
    
    $("#canvas").on("dblclick", ".draggable", function () {
        var name = $(this).attr("id");
        if (!(name in rotation)){
            rotation[name] = 0;
        }
        rotation[name] = (rotation[name] + 90) % 360;
        $(this).find("img").css("transform", "rotate(" + rotation[name] + "deg)");
    });
});
