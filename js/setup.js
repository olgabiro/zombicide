$(document).ready(function () {
    "use strict";

    const parts = {
        "part1": "zombicide",
        "part2": "prison-outbreak",
        "part3": "rue-morgue"
    };

    $('#part1').attr("checked", true);
    $(".rue-morgue").hide();
    $(".prison-outbreak").hide();
    
    $(".zombicide div").addClass("zombicide");
    $(".rue-morgue div").addClass("rue-morgue");
    $(".prison-outbreak div").addClass("prison-outbreak");
    
    $(".tiles :checkbox").change(function () {
        const className = $(this).attr("id"),
            elements = $("." + parts[className]);
        if ($(this).is(":checked")) {
            elements.each(function () {
                if (!$(this).hasClass("hidden")) {
                    $(this).show();
                }
            });
        } else {
            elements.each(function () {
                if ($(this).hasClass("on-board") || $(this).hasClass("boardtile")) {
                    $(this).remove();
                } else {
                    $(this).hide();
                }
                
            });
        }
    });
    
    $("#sidebar .menu").hide().addClass("hidden");
    
    $("#sidebar p").click(function () {
        const nextMenu = $(this).next();
        const arrow = $(this).find("i");
        if (nextMenu.hasClass("hidden")) {
            arrow.removeClass("fa-caret-right");
            arrow.addClass("fa-caret-down");
            nextMenu.show();
            nextMenu.removeClass("hidden");
        } else {
            arrow.removeClass("fa-caret-down");
            arrow.addClass("fa-caret-right");
            nextMenu.hide();
            nextMenu.addClass("hidden");
        }
    });
});