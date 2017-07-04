function showGrid(tileSize, canvaCoords, canvaSize) {
    var xOffset = tileSize;
    while (xOffset < canvaCoords.left + canvaSize.width) {
        drawLine({
            top: canvaCoords.top,
            left: xOffset,
            width: canvaCoords.top + canvaSize.height
        }, "vertical");
        xOffset += canvaSize;
    }
    
    var yOffset = tileSize;
    while (yOffset < canvaCoords.top + canvaSize.height) {
        drawLine({
            top: yOffset,
            left: canvaCoords.left,
            width: canvaCoords.left + canvaSize.width
        }, "horizontal");
        yOffset += canvaSize;
    }
}

function drawLine(coords, orientation) {
    var line = document.createElement('div');
    $(line).addClass("gridline")
            .css("position", "absolute")
            .css("border-color", "rgba(0, 0, 0, 0.25)")
            .css("top", coords.top)
            .css("left", coords.left);
    if (orientation == "horizontal") {
        $(line).css("border-bottom", "1px solid").css("width", coords.width);
    } else if (orientation == "vertical") {
        $(line).css("border-left", "1px solid").css("height", coords.width);
    }
    $("body").append(line);
}

function hideGrid() {
    $(".gridline").remove();
}