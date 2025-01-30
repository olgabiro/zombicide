const common = {
    doors: [
        {
            id: "red-doors",
            path: "pictures/common/doors/red-open.png",
            zombicide: 1,
            rm: 1,
            po: 1
        },
        {
            id: "blue-doors",
            path: "pictures/common/doors/blue-open.png",
            zombicide: 1,
            rm: 1,
            po: 1
        },
        {
            id: "green-doors",
            path: "pictures/common/doors/green-open.jpg",
            zombicide: 1,
            rm: 1,
            po: 1
        }
    ], 
    cars: [
        {
            id: "police-car",
            path: "pictures/common/cars/police.jpg",
            zombicide: 1,
            rm: 1,
            po: 1
        },
        {
            id: "pimp",
            path: "pictures/common/cars/pimp.jpg",
            zombicide: 1,
            rm: 1,
            po: 1
        }
    ],
    spawns: [
        {
            id: "blue-spawn",
            path: "pictures/common/spawns/blue.jpg",
            zombicide: 1,
            rm: 1,
            po: 1
        },
        {
            id: "red-spawn",
            path: "pictures/common/spawns/red.jpg",
            zombicide: 1,
            rm: 1,
            po: 1
        }
    ],
    objectives: [
        {
            id: "blue-objective",
            path: "pictures/common/objectives/blue.jpg",
            zombicide: 1,
            rm: 1,
            po: 1
        },
        {
            id: "red-objective",
            path: "pictures/common/objectives/red.jpg",
            zombicide: 1,
            rm: 1,
            po: 1
        },
        {
            id: "green-objective",
            path: "pictures/common/objectives/green.jpg",
            zombicide: 1,
            rm: 1,
            po: 1
        }
    ],
    others: [
        {
            id: "exit",
            path: "pictures/common/other/exit.jpg",
            zombicide: 1,
            rm: 1,
            po: 1
        },
        {
            id: "start",
            path: "pictures/common/other/start.jpg",
            zombicide: 1,
            rm: 1,
            po: 1
        },
        {
            id: "noise",
            path: "pictures/common/other/noise.png",
            zombicide: 1,
            rm: 1,
            po: 1
        }
    ]
};

let actualCount = {};
let maxCount = {};

$.each(common, function (outerIndex, outerValue) {
   $.each(outerValue, function (innerIndex, innerValue) {
       actualCount[innerValue.id] = 0;
       maxCount[innerValue.id] = innerValue.zombicide;
   }); 
});