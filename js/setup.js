$(document).ready(function () {
    "use strict";
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