function showGrid(tileSize, canvasCoords, canvasSize) {
    let coords;
    hideGrid();
    let xOffset = tileSize + canvasCoords.left;
    while (xOffset < canvasCoords.left + canvasSize.width) {
        coords = {
            top: canvasCoords.top,
            left: xOffset,
            length: canvasSize.height
        };
        drawLine(coords, "vertical");
        xOffset += tileSize;
    }

    let yOffset = tileSize + canvasCoords.top;
    while (yOffset < canvasCoords.top + canvasSize.height) {
        coords = {
            top: yOffset,
            left: canvasCoords.left,
            length: canvasSize.width
        };
        drawLine(coords, "horizontal");
        yOffset += tileSize;
    }
}

function drawLine(coords, orientation) {
    const line = document.createElement('div');
    $(line).addClass("gridLine")
            .css("position", "absolute")
            .css("top", coords.top)
            .css("left", coords.left);
    if (orientation === "horizontal") {
        $(line).css("border-bottom", "1px solid rgba(0, 0, 0, 0.25)").css("width", coords.length);
    } else if (orientation === "vertical") {
        $(line).css("border-left", "1px solid rgba(0, 0, 0, 0.25)").css("height", coords.length);
    }
    $("body").append(line);
}

function hideGrid() {
    $(".gridLine").remove();
}

$(document).ready(() => {
    const canvas = $("#canvas");
    const canvasCoords = canvas.offset();
    const canvasSize = {
        width: canvas.width(),
        height: canvas.height()
    };
    showGrid(tileSize, canvasCoords, canvasSize);
    
    $(window).resize(() => {
        const canvasCoords = canvas.offset();
        const canvasSize = {
            width: canvas.width(),
            height: canvas.height()
        };
        if (canvasSize.width > 100) {
            showGrid(tileSize, canvasCoords, canvasSize);
        }
    })
});