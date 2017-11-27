/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: '_1Campaa_lanzamiento',
                type: 'image',
                rect: ['251px', '370px','521px','296px','auto', 'auto'],
                clip: ['rect(0px 521px 48px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"1.Campa%C3%B1a%20lanzamiento.png",'0px','0px']
            },
            {
                id: '_1Campaa_lanzamientoCopy',
                type: 'image',
                rect: ['251px', '370px','521px','296px','auto', 'auto'],
                clip: ['rect(0px 521px 48px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"1.Campa%C3%B1a%20lanzamiento.png",'0px','-63px']
            },
            {
                id: '_1Campaa_lanzamientoCopy2',
                type: 'image',
                rect: ['251px', '370px','521px','296px','auto', 'auto'],
                clip: ['rect(0px 521px 48px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"1.Campa%C3%B1a%20lanzamiento.png",'0px','-129px']
            },
            {
                id: '_1Campaa_lanzamientoCopy3',
                type: 'image',
                rect: ['251px', '370px','521px','296px','auto', 'auto'],
                clip: ['rect(0px 521px 48px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"1.Campa%C3%B1a%20lanzamiento.png",'0px','-190px']
            },
            {
                id: '_1Campaa_lanzamientoCopy4',
                type: 'image',
                rect: ['251px', '370px','521px','296px','auto', 'auto'],
                clip: ['rect(0px 521px 48px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"1.Campa%C3%B1a%20lanzamiento.png",'0px','-244px']
            },
            {
                id: '_11Campaa_Lanzamiento2',
                type: 'image',
                rect: ['0px', '0px','1024px','768px','auto', 'auto'],
                clip: ['rect(213px 678px 496px 351px)'],
                fill: ["rgba(0,0,0,0)",im+"1.1.Campa%C3%B1a%20Lanzamiento2.png",'0px','0px']
            },
            {
                id: '_11Campaa_Lanzamiento2Copy',
                type: 'image',
                rect: ['0px', '6px','1024px','768px','auto', 'auto'],
                clip: ['rect(498px 678px 554px 351px)'],
                fill: ["rgba(0,0,0,0)",im+"1.1.Campa%C3%B1a%20Lanzamiento2.png",'0px','0px']
            },
            {
                id: '_11Campaa_Lanzamiento2Copy2',
                type: 'image',
                rect: ['0px', '97px','1024px','768px','auto', 'auto'],
                clip: ['rect(565px 543px 622px 484px)'],
                fill: ["rgba(0,0,0,0)",im+"1.1.Campa%C3%B1a%20Lanzamiento2.png",'0px','-98px']
            },
            {
                id: '_11Campaa_Lanzamiento2Copy3',
                type: 'image',
                rect: ['0px', '97px','1024px','768px','auto', 'auto'],
                clip: ['rect(545px 590px 566px 435px)'],
                fill: ["rgba(0,0,0,0)",im+"1.1.Campa%C3%B1a%20Lanzamiento2.png",'0px','-98px']
            },
            {
                id: 'hotspot',
                display: 'none',
                type: 'rect',
                rect: ['490', '666','auto','auto','auto', 'auto']
            },
            {
                id: 'labels2',
                type: 'image',
                rect: ['762px', '441px','1044px','615px','auto', 'auto'],
                clip: ['rect(0px 216px 141px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"labels2.png",'0px','0px']
            }],
            symbolInstances: [
            {
                id: 'hotspot',
                symbolName: 'hotspot'
            }
            ]
        },
    states: {
        "Base State": {
            "${__1Campaa_lanzamientoCopy2}": [
                ["style", "top", '370px'],
                ["style", "clip", [0,521,48,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "opacity", '0'],
                ["style", "left", '251px'],
                ["style", "background-position", [0,-129], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${__1Campaa_lanzamiento}": [
                ["style", "top", '370px'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,521,48,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '251px']
            ],
            "${__11Campaa_Lanzamiento2}": [
                ["style", "top", '-102px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "clip", [213,678,496,351], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${__1Campaa_lanzamientoCopy4}": [
                ["style", "top", '370px'],
                ["style", "clip", [0,521,48,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "opacity", '0'],
                ["style", "left", '251px'],
                ["style", "background-position", [0,-244], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${__11Campaa_Lanzamiento2Copy2}": [
                ["style", "top", '51px'],
                ["style", "cursor", 'auto'],
                ["style", "background-position", [0,-98], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '0'],
                ["style", "clip", [565,543,622,484], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px']
            ],
            "${__11Campaa_Lanzamiento2Copy}": [
                ["style", "top", '52px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "clip", [498,678,554,351], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_hotspot}": [
                ["style", "display", 'none']
            ],
            "${__11Campaa_Lanzamiento2Copy3}": [
                ["style", "top", '97px'],
                ["style", "left", '0px'],
                ["style", "opacity", '0'],
                ["style", "clip", [545,590,566,435], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [0,-98], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_labels2}": [
                ["style", "top", '370px'],
                ["style", "opacity", '0'],
                ["style", "left", '762px'],
                ["style", "clip", [0,216,141,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '1024px'],
                ["style", "height", '768px'],
                ["style", "overflow", 'hidden']
            ],
            "${__1Campaa_lanzamientoCopy}": [
                ["style", "top", '370px'],
                ["style", "background-position", [0,-63], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '0'],
                ["style", "left", '251px'],
                ["style", "clip", [0,521,48,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${__1Campaa_lanzamientoCopy3}": [
                ["style", "top", '370px'],
                ["style", "background-position", [0,-190], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '0'],
                ["style", "left", '251px'],
                ["style", "clip", [0,521,48,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6250,
            autoPlay: true,
            timeline: [
                { id: "eid9", tween: [ "style", "${__1Campaa_lanzamientoCopy}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 250 },
                { id: "eid10", tween: [ "style", "${__1Campaa_lanzamientoCopy}", "opacity", '0', { fromValue: '1'}], position: 1250, duration: 250 },
                { id: "eid38", tween: [ "style", "${_labels2}", "top", '441px', { fromValue: '370px'}], position: 5750, duration: 250, easing: "easeOutBack" },
                { id: "eid28", tween: [ "style", "${__11Campaa_Lanzamiento2Copy2}", "opacity", '1', { fromValue: '0'}], position: 5250, duration: 500, easing: "easeOutBack" },
                { id: "eid22", tween: [ "style", "${__11Campaa_Lanzamiento2Copy}", "top", '6px', { fromValue: '52px'}], position: 4250, duration: 500, easing: "easeOutBack" },
                { id: "eid2", tween: [ "style", "${__1Campaa_lanzamiento}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid3", tween: [ "style", "${__1Campaa_lanzamiento}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 250 },
                { id: "eid20", tween: [ "style", "${__11Campaa_Lanzamiento2}", "opacity", '1', { fromValue: '0'}], position: 4250, duration: 500, easing: "easeOutBack" },
                { id: "eid15", tween: [ "style", "${__1Campaa_lanzamientoCopy4}", "opacity", '1', { fromValue: '0'}], position: 3380, duration: 250 },
                { id: "eid16", tween: [ "style", "${__1Campaa_lanzamientoCopy4}", "opacity", '0', { fromValue: '1'}], position: 4000, duration: 250 },
                { id: "eid26", tween: [ "style", "${__11Campaa_Lanzamiento2Copy2}", "top", '97px', { fromValue: '51px'}], position: 5250, duration: 500, easing: "easeOutBack" },
                { id: "eid30", tween: [ "style", "${__11Campaa_Lanzamiento2Copy3}", "opacity", '1', { fromValue: '0'}], position: 5750, duration: 500, easing: "easeOutBack" },
                { id: "eid36", tween: [ "style", "${_labels2}", "opacity", '1', { fromValue: '0'}], position: 5750, duration: 250, easing: "easeOutBack" },
                { id: "eid34", tween: [ "style", "${_hotspot}", "display", 'block', { fromValue: 'none'}], position: 6250, duration: 0, easing: "easeOutBack" },
                { id: "eid24", tween: [ "style", "${__11Campaa_Lanzamiento2Copy}", "opacity", '1', { fromValue: '0'}], position: 4250, duration: 500, easing: "easeOutBack" },
                { id: "eid11", tween: [ "style", "${__1Campaa_lanzamientoCopy2}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 250 },
                { id: "eid12", tween: [ "style", "${__1Campaa_lanzamientoCopy2}", "opacity", '0', { fromValue: '1'}], position: 2250, duration: 250 },
                { id: "eid13", tween: [ "style", "${__1Campaa_lanzamientoCopy3}", "opacity", '1', { fromValue: '0'}], position: 2500, duration: 250 },
                { id: "eid14", tween: [ "style", "${__1Campaa_lanzamientoCopy3}", "opacity", '0', { fromValue: '1'}], position: 3130, duration: 250 },
                { id: "eid18", tween: [ "style", "${__11Campaa_Lanzamiento2}", "top", '0px', { fromValue: '-102px'}], position: 4250, duration: 500, easing: "easeOutBack" }            ]
        }
    }
},
"hotspot": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '45px', '45px', 'auto', 'auto'],
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    id: 'Rectangle',
                    opacity: 0.5,
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "cursor", 'pointer'],
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '45px']
            ],
            "${symbolSelector}": [
                ["style", "height", '45px'],
                ["style", "width", '45px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: false,
            timeline: [
                { id: "eid32", tween: [ "style", "${_Rectangle}", "opacity", '0.5', { fromValue: '0'}], position: 0, duration: 250, easing: "easeOutBack" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-14967639");
