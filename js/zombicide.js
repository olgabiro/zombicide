$(document).ready(function () {
    "use strict";
    
    var tiles = {
            "season1" : ["1A", "1B", "1C", "1D"],
            "season2": [],
            "season3": ["1R", "2R", "3R", "4R", "5R", "6R", "7R", "8R"]
        },
        parts = {
            "part1" : "zombicide",
            "part2" : "prison-outbreak",
            "part3" : "rue-morgue"
        },
        tileSize = 30;
    
    function findCoordinates(x, y, startX, startY) {
        var resultX = 0,
            resultY = 0;

        while (resultX + startX + tileSize + 2 < x) {
            resultX += tileSize + 2;
        }

        while (resultY + startY + tileSize + 2 < y) {
            resultY += tileSize + 2;
        }

        return {x : resultX, y : resultY};
    }
    
    $(".draggable").draggable({
        opacity: 0.35
    });
    
    $(".minitiles").droppable({
        drop: function (event, ui) {
            ui.draggable.removeClass("boardtile").css("left", "initial").css("top", "initial").css("right", "initial");
            if (ui.draggable.hasClass("zombicide")) {
                $(this).children(".zombicide").append(ui.draggable);
            } else if (ui.draggable.hasClass("prison-outbreak")) {
                $(this).children(".prison-outbreak").append(ui.draggable);
            } else if (ui.draggable.hasClass(".rue-morgue")) {
                $(this).children(".rue-morgue").append(ui.draggable);
            } else {
                ui.draggable.hide();
            }
            
        }
    });    
    $("#canvas").sortable();
    $("#canvas").droppable({
        drop: function (event, ui) {
            var canvasCoords = $(this).offset(),
                coords = findCoordinates(event.pageX, event.pageY, canvasCoords.left, canvasCoords.top);
            ui.draggable.addClass("boardtile").css("left", coords.x).css("top", coords.y);
//            removeClass("ui-draggable-handle").removeClass("ui-draggable")
            $(this).append(ui.draggable);
        }
    });
    
    $('#part1').attr("checked", true);
    $(".rue-morgue").hide();
    $(".prison-outbreak").hide();
    
    $(".zombicide div").addClass("zombicide");
    $(".rue-morgue div").addClass("rue-morgue");
    $(".prison-outbreak div").addClass("prison-outbreak");
    
    $(".tiles :checkbox").change(function () {
        var className = $(this).attr("id"),
            elements = $("." + parts[className]);
        if ($(this).is(":checked")) {
            elements.each(function () {
                if (!$(this).hasClass("hidden")) {
                    $(this).show();
                }
            });
        } else {
            elements.hide();
        }
    });
    
    $("sidebar .menu").hide().addClass("hidden");
    
    $("sidebar p").click(function () {
        var nextMenu = $(this).next();
        if (nextMenu.hasClass("hidden")) {
            nextMenu.show();
            nextMenu.removeClass("hidden");
        } else {
            nextMenu.hide();
            nextMenu.addClass("hidden");
        }
    });
});
