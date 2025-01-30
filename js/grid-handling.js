function showGrid(tileSize, canvaCoords, canvaSize) {
    let coords;
    hideGrid();
    let xOffset = tileSize + canvaCoords.left;
    while (xOffset < canvaCoords.left + canvaSize.width) {
        coords = {
            top: canvaCoords.top,
            left: xOffset,
            width: canvaSize.height
        };
        drawLine(coords, "vertical");
        xOffset += tileSize;
    }

    let yOffset = tileSize + canvaCoords.top;
    while (yOffset < canvaCoords.top + canvaSize.height) {
        coords = {
            top: yOffset,
            left: canvaCoords.left,
            width: canvaSize.width
        };
        drawLine(coords, "horizontal");
        yOffset += tileSize;
    }
}

function drawLine(coords, orientation) {
    const line = document.createElement('div');
    $(line).addClass("gridline")
            .css("position", "absolute")
            .css("top", coords.top)
            .css("left", coords.left);
    if (orientation === "horizontal") {
        $(line).css("border-bottom", "1px solid rgba(0, 0, 0, 0.25)").css("width", coords.width);
    } else if (orientation === "vertical") {
        $(line).css("border-left", "1px solid rgba(0, 0, 0, 0.25)").css("height", coords.width);
    }
    $("body").append(line);
}

function hideGrid() {
    $(".gridline").remove();
}

$(document).ready(function () {
    const canva = $("#canvas");
    const canvaCoords = canva.offset();
    const canvaSize = {
        width: canva.width(),
        height: canva.height()
    };
    showGrid(tileSize, canvaCoords, canvaSize);
    
    $(window).resize(function(evt) {
        const canvaCoords = canva.offset();
        const canvaSize = {
            width: canva.width(),
            height: canva.height()
        };
        if (canvaSize.width > 100) {
            showGrid(tileSize, canvaCoords, canvaSize);
        }
    })
});