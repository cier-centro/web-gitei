/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['Helvetica']='';
    fonts['cabin, \'Trebuchet MS\', \'Myriad Pro\', \'Gill Sans MT\', Helvetica, sans-serif']='<script src=\"http://use.edgefonts.net/cabin:n4,i4,n7,i7,n5,i5,n6,i6:all.js\"></script>';

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
    scaleToFit: "both",
    centerStage: "both",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'F1_D5',
                type: 'image',
                rect: ['5px', '72px','1304px','596px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"F1_D5.png",'0px','0px']
            },
            {
                id: 'Titulo',
                display: 'block',
                type: 'text',
                rect: ['110px', '206px','625px','197px','auto', 'auto'],
                text: "¿Qué es la <br>fluidez creativa?",
                align: "center",
                font: ['cabin, Trebuchet MS, Myriad Pro, Gill Sans MT, Helvetica, sans-serif', 81, "rgba(255,255,255,1.00)", "bold", "none", "normal"]
            },
            {
                id: 'slide_1',
                type: 'rect',
                rect: ['5px', '72px','auto','auto','auto', 'auto']
            },
            {
                id: 'per',
                type: 'rect',
                rect: ['948px', '42px','auto','auto','auto', 'auto'],
                clip: ['rect(-33.73828125px 492px 757.2340087890625px -29.78448486328125px)'],
                transform: [[],[],[],['0.65201','0.65201']]
            }],
            symbolInstances: [
            {
                id: 'per',
                symbolName: 'per',
                autoPlay: {

                }
            },
            {
                id: 'slide_1',
                symbolName: 'slide_1',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_label}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '1366px']
            ],
            "${_slide_1}": [
                ["style", "left", '5px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "min-width", '320px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "max-width", '1366px'],
                ["style", "width", '1366px']
            ],
            "${_Titulo}": [
                ["style", "line-height", '83px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '110px'],
                ["style", "width", '625px'],
                ["style", "top", '206px'],
                ["style", "height", '197px'],
                ["style", "text-align", 'center'],
                ["transform", "scaleY", '1'],
                ["style", "display", 'block'],
                ["style", "font-family", 'cabin, \'Trebuchet MS\', \'Myriad Pro\', \'Gill Sans MT\', Helvetica, sans-serif'],
                ["transform", "scaleX", '1'],
                ["style", "font-size", '81px']
            ],
            "${_per}": [
                ["style", "top", '42px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "left", '948px'],
                ["style", "clip", [-33.73828125,492,757.2340087890625,-29.78448486328125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "-webkit-transform-origin", [34.85,33.52], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [34.85,33.52],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [34.85,33.52],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [34.85,33.52],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [34.85,33.52],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [34.85,33.52],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_F1_D5}": [
                ["style", "left", '5px'],
                ["style", "top", '72px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 15000,
            autoPlay: true,
            labels: {
                "slide_1": 0
            },
            timeline: [
                { id: "eid2095", tween: [ "transform", "${_per}", "scaleX", '-0.66075', { fromValue: '0'}], position: 0, duration: 0, easing: "swing" },
                { id: "eid2097", tween: [ "transform", "${_per}", "scaleY", '0.66354', { fromValue: '0'}], position: 0, duration: 0, easing: "swing" }            ]
        }
    }
},
"Hot_Spot": {
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
                    rect: ['0px', '0px', '40px', '40px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(255,255,255,0.35)'],
                ["style", "height", '40px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '40px']
            ],
            "${symbolSelector}": [
                ["style", "height", '40px'],
                ["style", "width", '40px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            labels: {
                "iniciar": 0,
                "loop": 2000
            },
            timeline: [
                { id: "eid694", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(255,255,255,0.35)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0.35)'}], position: 1000, duration: 0 },
                { id: "eid695", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000 },
                { id: "eid696", tween: [ "style", "${_Rectangle}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 1000, easing: "easeInQuad" }            ]
        }
    }
},
"slide_1": {
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
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '596px'],
                ["style", "width", '1304px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 15000,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"bt_audio": {
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
                    id: 'fondo_bt_audio',
                    type: 'image',
                    rect: ['5px', '5px', '84px', '156px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fondo_bt_audio.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '0px', '90px', '90px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    type: 'image',
                    id: 'bt_audio',
                    rect: ['0px', '0px', '90px', '180px', 'auto', 'auto'],
                    clip: ['rect(0px 90px 180px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/bt_audio.png', '0px', '-97px']
                },
                {
                    transform: [[0, 0], [], [], ['1', '0.92222']],
                    rect: ['0px', '-4px', '90px', '90px', 'auto', 'auto'],
                    clip: ['rect(0px 90px 90px 0px)'],
                    type: 'rect',
                    id: 'ht_spot',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    type: 'image',
                    id: 'bt_reini',
                    rect: ['4px', '80px', '86px', '80px', 'auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/bt_reini.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['1', '0.91111']],
                    rect: ['2px', '79px', '90px', '90px', 'auto', 'auto'],
                    clip: ['rect(0px 90px 90px 0px)'],
                    type: 'rect',
                    id: 'ht_spot2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(192,192,192,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_fondo_bt_audio}": [
                ["style", "left", '5px'],
                ["style", "top", '5px']
            ],
            "${_ht_spot2}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "top", '79px'],
                ["transform", "scaleY", '0.91111'],
                ["style", "left", '2px'],
                ["style", "height", '90px'],
                ["style", "cursor", 'pointer'],
                ["style", "clip", [0,90,90,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '90px']
            ],
            "${symbolSelector}": [
                ["style", "height", '90px'],
                ["style", "overflow", 'visible'],
                ["style", "width", '90px']
            ],
            "${_bt_audio}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "height", '180px'],
                ["style", "background-position", [0,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "clip", [0,90,90,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '90px']
            ],
            "${_Rectangle}": [
                ["style", "top", '0px'],
                ["style", "height", '90px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '0px'],
                ["style", "width", '90px']
            ],
            "${_ht_spot}": [
                ["style", "top", '-4px'],
                ["transform", "scaleY", '0.92222'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "height", '90px'],
                ["style", "clip", [0,90,90,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "cursor", 'pointer'],
                ["style", "width", '90px']
            ],
            "${_bt_reini}": [
                ["style", "top", '80px'],
                ["style", "height", '80px'],
                ["style", "left", '4px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '86px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: false,
            labels: {
                "up": 0,
                "down": 250
            },
            timeline: [
                { id: "eid1242", tween: [ "style", "${_bt_audio}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1244", tween: [ "style", "${_bt_audio}", "left", '0px', { fromValue: '0px'}], position: 250, duration: 0 },
                { id: "eid1243", tween: [ "style", "${_bt_audio}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1245", tween: [ "style", "${_bt_audio}", "top", '1px', { fromValue: '0px'}], position: 250, duration: 0 },
                { id: "eid3", tween: [ "style", "${_bt_audio}", "background-position", [0,5], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,5]}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_bt_audio}", "background-position", [0,-97], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,5]}], position: 250, duration: 0 }            ]
        }
    }
},
"ojos": {
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
                    rect: ['-759px', '-40px', '1117px', '1000px', 'auto', 'auto'],
                    id: 'ojo',
                    type: 'image',
                    clip: ['rect(40px 917px 122px 558px)'],
                    fill: ['rgba(0,0,0,0)', 'images/amarilla.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ojo}": [
                ["style", "top", '-40px'],
                ["style", "left", '-759px'],
                ["style", "clip", [40,917,122,558], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '67px'],
                ["style", "width", '151px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 14000,
            autoPlay: true,
            timeline: [
                { id: "eid1298", tween: [ "style", "${_ojo}", "left", '-759px', { fromValue: '-759px'}], position: 0, duration: 0 },
                { id: "eid1302", tween: [ "style", "${_ojo}", "left", '-564px', { fromValue: '-759px'}], position: 250, duration: 0 },
                { id: "eid1303", tween: [ "style", "${_ojo}", "left", '-759px', { fromValue: '-564px'}], position: 500, duration: 0 },
                { id: "eid1322", tween: [ "style", "${_ojo}", "left", '-759px', { fromValue: '-759px'}], position: 3000, duration: 0 },
                { id: "eid1323", tween: [ "style", "${_ojo}", "left", '-564px', { fromValue: '-759px'}], position: 3250, duration: 0 },
                { id: "eid1324", tween: [ "style", "${_ojo}", "left", '-759px', { fromValue: '-564px'}], position: 3500, duration: 0 },
                { id: "eid1326", tween: [ "style", "${_ojo}", "left", '-759px', { fromValue: '-759px'}], position: 8000, duration: 0 },
                { id: "eid1327", tween: [ "style", "${_ojo}", "left", '-564px', { fromValue: '-759px'}], position: 8250, duration: 0 },
                { id: "eid1328", tween: [ "style", "${_ojo}", "left", '-759px', { fromValue: '-564px'}], position: 8500, duration: 0 },
                { id: "eid1299", tween: [ "style", "${_ojo}", "top", '-40px', { fromValue: '-40px'}], position: 0, duration: 0 },
                { id: "eid1325", tween: [ "style", "${_ojo}", "top", '-40px', { fromValue: '-40px'}], position: 3000, duration: 0 },
                { id: "eid1329", tween: [ "style", "${_ojo}", "top", '-40px', { fromValue: '-40px'}], position: 8000, duration: 0 }            ]
        }
    }
},
"boca": {
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
                    rect: ['-835px', '-144px', '1117px', '1000px', 'auto', 'auto'],
                    id: 'bocCopy',
                    type: 'image',
                    clip: ['rect(126px 937px 218px 550px)'],
                    fill: ['rgba(0,0,0,0)', 'images/amarilla.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bocCopy}": [
                ["style", "top", '-144px'],
                ["style", "left", '-835px'],
                ["style", "clip", [126,937,218,443.3330078125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '67px'],
                ["style", "width", '90px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1629,
            autoPlay: false,
            labels: {
                "mute": 0,
                "ini": 250
            },
            timeline: [
                { id: "eid2147", tween: [ "style", "${_bocCopy}", "clip", [126,937,218,443.3330078125], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [126,937,218,443.3330078125]}], position: 250, duration: 0 },
                { id: "eid1317", tween: [ "style", "${_bocCopy}", "left", '-835px', { fromValue: '-835px'}], position: 250, duration: 0 },
                { id: "eid1318", tween: [ "style", "${_bocCopy}", "left", '-734px', { fromValue: '-835px'}], position: 376, duration: 0 },
                { id: "eid1307", tween: [ "style", "${_bocCopy}", "left", '-644px', { fromValue: '-735px'}], position: 500, duration: 0 },
                { id: "eid1319", tween: [ "style", "${_bocCopy}", "left", '-555px', { fromValue: '-644px'}], position: 626, duration: 0 },
                { id: "eid2152", tween: [ "style", "${_bocCopy}", "left", '-463px', { fromValue: '-555px'}], position: 751, duration: 0 },
                { id: "eid1309", tween: [ "style", "${_bocCopy}", "left", '-644px', { fromValue: '-463px'}], position: 886, duration: 0 },
                { id: "eid1310", tween: [ "style", "${_bocCopy}", "left", '-734px', { fromValue: '-644px'}], position: 1012, duration: 0 },
                { id: "eid1320", tween: [ "style", "${_bocCopy}", "left", '-644px', { fromValue: '-734px'}], position: 1138, duration: 0 },
                { id: "eid2154", tween: [ "style", "${_bocCopy}", "left", '-463px', { fromValue: '-644px'}], position: 1250, duration: 0 },
                { id: "eid1321", tween: [ "style", "${_bocCopy}", "left", '-734px', { fromValue: '-463px'}], position: 1378, duration: 0 },
                { id: "eid1314", tween: [ "style", "${_bocCopy}", "left", '-555px', { fromValue: '-734px'}], position: 1503, duration: 0 },
                { id: "eid1313", tween: [ "style", "${_bocCopy}", "left", '-835px', { fromValue: '-555px'}], position: 1629, duration: 0 }            ]
        }
    }
},
"per": {
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
                    rect: ['-806px', '-597px', '1117px', '1000px', 'auto', 'auto'],
                    id: 'pelo',
                    type: 'image',
                    clip: ['rect(546px 1089px 918px 874px)'],
                    fill: ['rgba(0,0,0,0)', 'images/amarilla.png', '0px', '0px']
                },
                {
                    rect: ['155px', '266px', '306px', '204px', 'auto', 'auto'],
                    id: 'DER',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0)'],
                    c: [
                    {
                        rect: ['72px', '-18px', '234px', '224px', 'auto', 'auto'],
                        id: 'MANO2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(192,192,192,0)'],
                        c: [
                        {
                            rect: ['-723px', '-220px', '1117px', '1000px', 'auto', 'auto'],
                            id: 'antbra_2',
                            type: 'image',
                            clip: ['rect(282px 855px 436px 728px)'],
                            fill: ['rgba(0,0,0,0)', 'images/amarilla.png', '0px', '0px']
                        },
                        {
                            rect: ['-771px', '-220px', '1117px', '1000px', 'auto', 'auto'],
                            id: 'mano_2',
                            type: 'image',
                            clip: ['rect(232px 1003px 326px 864px)'],
                            fill: ['rgba(0,0,0,0)', 'images/amarilla.png', '0px', '0px']
                        }]
                    },
                    {
                        rect: ['-601px', '-238px', '1117px', '1000px', 'auto', 'auto'],
                        id: 'bra_2',
                        type: 'image',
                        clip: ['rect(244px 725px 422px 598px)'],
                        fill: ['rgba(0,0,0,0)', 'images/amarilla.png', '0px', '0px']
                    }]
                },
                {
                    rect: ['10px', '78px', '1117px', '1000px', 'auto', 'auto'],
                    id: 'piernas',
                    type: 'image',
                    clip: ['rect(426px 359px 972px 24px)'],
                    fill: ['rgba(0,0,0,0)', 'images/amarilla.png', '0px', '0px']
                },
                {
                    rect: ['10px', '118px', '1117px', '1000px', 'auto', 'auto'],
                    id: 'tronco',
                    type: 'image',
                    clip: ['rect(72px 299px 424px 54px)'],
                    fill: ['rgba(0,0,0,0)', 'images/amarilla.png', '0px', '0px']
                },
                {
                    rect: ['-382px', '-8px', '1117px', '1000px', 'auto', 'auto'],
                    id: 'antbra_1',
                    type: 'image',
                    clip: ['rect(452px 485px 636px 416px)'],
                    fill: ['rgba(0,0,0,0)', 'images/amarilla.png', '0px', '0px']
                },
                {
                    rect: ['-382px', '-48px', '1117px', '1000px', 'auto', 'auto'],
                    id: 'mano_1',
                    type: 'image',
                    clip: ['rect(640px 473px 764px 404px)'],
                    fill: ['rgba(0,0,0,0)', 'images/amarilla.png', '0px', '0px']
                },
                {
                    rect: ['15px', '439px', '110px', '278px', 'auto', 'auto'],
                    id: 'MANO',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0)']
                },
                {
                    rect: ['-382px', '42px', '1117px', '1000px', 'auto', 'auto'],
                    id: 'bra_1',
                    type: 'image',
                    clip: ['rect(242px 525px 456px 404px)'],
                    fill: ['rgba(0,0,0,0)', 'images/amarilla.png', '0px', '0px']
                },
                {
                    rect: ['25px', '287px', '118px', '430px', 'auto', 'auto'],
                    id: 'IZQ',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0)']
                },
                {
                    rect: ['-526px', '-519px', '1117px', '1000px', 'auto', 'auto'],
                    id: 'cabeza',
                    type: 'image',
                    clip: ['rect(528px 809px 912px 586px)'],
                    fill: ['rgba(0,0,0,0)', 'images/amarilla.png', '0px', '0px']
                },
                {
                    id: 'boca',
                    type: 'rect',
                    rect: ['150px', '185px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'ojos',
                    type: 'rect',
                    rect: ['123px', '118px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'boca',
                symbolName: 'boca',
                autoPlay: {

               }
            },
            {
                id: 'ojos',
                symbolName: 'ojos',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_IZQ}": [
                ["style", "-webkit-transform-origin", [62.71,8.37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [62.71,8.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [62.71,8.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [62.71,8.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [62.71,8.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [62.71,8.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '287px'],
                ["style", "left", '25px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_cabeza}": [
                ["style", "-webkit-transform-origin", [61.68,76.97], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [61.68,76.97],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [61.68,76.97],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [61.68,76.97],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [61.68,76.97],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [61.68,76.97],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["style", "top", '-519px'],
                ["style", "clip", [528,809,912,586], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-526px']
            ],
            "${_bra_1}": [
                ["style", "-webkit-transform-origin", [42.94,28.03], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [42.94,28.03],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [42.94,28.03],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [42.94,28.03],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [42.94,28.03],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [42.94,28.03],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '42px'],
                ["style", "clip", [242,525,456,404], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-382px']
            ],
            "${_piernas}": [
                ["style", "top", '78px'],
                ["style", "left", '10px'],
                ["style", "clip", [426,359,972,24], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "-webkit-transform-origin", [18.98,47], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [18.98,47],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [18.98,47],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [18.98,47],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [18.98,47],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [18.98,47],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_bra_2}": [
                ["style", "top", '-238px'],
                ["style", "-webkit-transform-origin", [57.39,27.4], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [57.39,27.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [57.39,27.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [57.39,27.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [57.39,27.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [57.39,27.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-601px'],
                ["style", "clip", [244,725,422,598], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_DER}": [
                ["style", "-webkit-transform-origin", [13.09,17.65], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [13.09,17.65],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [13.09,17.65],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [13.09,17.65],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [13.09,17.65],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [13.09,17.65],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '266px'],
                ["style", "left", '167px'],
                ["transform", "rotateZ", '10deg']
            ],
            "${_pelo}": [
                ["style", "-webkit-transform-origin", [86.75,76.97], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [86.75,76.97],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [86.75,76.97],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [86.75,76.97],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [86.75,76.97],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [86.75,76.97],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["style", "top", '-519px'],
                ["style", "clip", [546,1089,918,874], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-806px']
            ],
            "${_tronco}": [
                ["style", "top", '118px'],
                ["style", "left", '10px'],
                ["style", "clip", [72,299,424,54], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "-webkit-transform-origin", [17.73,42], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [17.73,42],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [17.73,42],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [17.73,42],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [17.73,42],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [17.73,42],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_antbra_1}": [
                ["style", "-webkit-transform-origin", [40.79,47.17], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [40.79,47.17],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [40.79,47.17],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [40.79,47.17],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [40.79,47.17],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [40.79,47.17],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '-8px'],
                ["style", "clip", [452,485,636,416], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-382px']
            ],
            "${_MANO}": [
                ["style", "-webkit-transform-origin", [53.29,8.88], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [53.29,8.88],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [53.29,8.88],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [53.29,8.88],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [53.29,8.88],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [53.29,8.88],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '439px'],
                ["style", "left", '15px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_mano_1}": [
                ["style", "-webkit-transform-origin", [40.08,65.57], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [40.08,65.57],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [40.08,65.57],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [40.08,65.57],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [40.08,65.57],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [40.08,65.57],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '-48px'],
                ["style", "clip", [640,473,764,404], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-382px']
            ],
            "${_boca}": [
                ["style", "-webkit-transform-origin", [14.44,98.01], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [14.44,98.01],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [14.44,98.01],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [14.44,98.01],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [14.44,98.01],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [14.44,98.01],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '185px'],
                ["style", "left", '150px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_MANO2}": [
                ["style", "-webkit-transform-origin", [16.24,81.25], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [16.24,81.25],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [16.24,81.25],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [16.24,81.25],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [16.24,81.25],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [16.24,81.25],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '17deg']
            ],
            "${_antbra_2}": [
                ["style", "-webkit-transform-origin", [68.13,40.2], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [68.13,40.2],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [68.13,40.2],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [68.13,40.2],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [68.13,40.2],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [68.13,40.2],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '-220px'],
                ["style", "clip", [282,855,436,728], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-723px']
            ],
            "${_mano_2}": [
                ["style", "-webkit-transform-origin", [78.87,30.2], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [78.87,30.2],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [78.87,30.2],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [78.87,30.2],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [78.87,30.2],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [78.87,30.2],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '-10deg'],
                ["style", "top", '-220px'],
                ["style", "clip", [232,1003,326,864], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-771px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1092px'],
                ["style", "width", '492px']
            ],
            "${_ojos}": [
                ["style", "-webkit-transform-origin", [26.49,198.01], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [26.49,198.01],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [26.49,198.01],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [26.49,198.01],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [26.49,198.01],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [26.49,198.01],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '118px'],
                ["style", "left", '123px'],
                ["transform", "rotateZ", '0deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 15000,
            autoPlay: true,
            timeline: [
                { id: "eid1830", tween: [ "transform", "${_ojos}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 1000, duration: 3714 },
                { id: "eid1831", tween: [ "transform", "${_ojos}", "rotateZ", '2deg', { fromValue: '-3deg'}], position: 4714, duration: 5571 },
                { id: "eid1832", tween: [ "transform", "${_ojos}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 10286, duration: 3714 },
                { id: "eid1834", tween: [ "transform", "${_boca}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 1000, duration: 3714 },
                { id: "eid1835", tween: [ "transform", "${_boca}", "rotateZ", '2deg', { fromValue: '-3deg'}], position: 4714, duration: 5571 },
                { id: "eid1836", tween: [ "transform", "${_boca}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 10286, duration: 3714 },
                { id: "eid1853", tween: [ "transform", "${_mano_2}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 0, duration: 750 },
                { id: "eid1854", tween: [ "transform", "${_mano_2}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 7750, duration: 750 },
                { id: "eid1845", tween: [ "transform", "${_MANO}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 6750, duration: 2250 },
                { id: "eid1846", tween: [ "transform", "${_MANO}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 9000, duration: 2250 },
                { id: "eid1911", tween: [ "style", "${_pelo}", "top", '-459px', { fromValue: '-519px'}], position: 15000, duration: 0 },
                { id: "eid1837", tween: [ "style", "${_cabeza}", "-webkit-transform-origin", [61.68,76.97], { valueTemplate: '@@0@@% @@1@@%', fromValue: [61.68,76.97]}], position: 1000, duration: 0 },
                { id: "eid2446", tween: [ "style", "${_cabeza}", "-moz-transform-origin", [61.68,76.97], { valueTemplate: '@@0@@% @@1@@%', fromValue: [61.68,76.97]}], position: 1000, duration: 0 },
                { id: "eid2447", tween: [ "style", "${_cabeza}", "-ms-transform-origin", [61.68,76.97], { valueTemplate: '@@0@@% @@1@@%', fromValue: [61.68,76.97]}], position: 1000, duration: 0 },
                { id: "eid2448", tween: [ "style", "${_cabeza}", "msTransformOrigin", [61.68,76.97], { valueTemplate: '@@0@@% @@1@@%', fromValue: [61.68,76.97]}], position: 1000, duration: 0 },
                { id: "eid2449", tween: [ "style", "${_cabeza}", "-o-transform-origin", [61.68,76.97], { valueTemplate: '@@0@@% @@1@@%', fromValue: [61.68,76.97]}], position: 1000, duration: 0 },
                { id: "eid2450", tween: [ "style", "${_cabeza}", "transform-origin", [61.68,76.97], { valueTemplate: '@@0@@% @@1@@%', fromValue: [61.68,76.97]}], position: 1000, duration: 0 },
                { id: "eid1843", tween: [ "transform", "${_IZQ}", "rotateZ", '-6deg', { fromValue: '0deg'}], position: 4750, duration: 2750 },
                { id: "eid1844", tween: [ "transform", "${_IZQ}", "rotateZ", '0deg', { fromValue: '-6deg'}], position: 10500, duration: 2750 },
                { id: "eid1949", tween: [ "style", "${_pelo}", "-webkit-transform-origin", [86.75,76.97], { valueTemplate: '@@0@@% @@1@@%', fromValue: [86.75,76.97]}], position: 1000, duration: 0 },
                { id: "eid2451", tween: [ "style", "${_pelo}", "-moz-transform-origin", [86.75,76.97], { valueTemplate: '@@0@@% @@1@@%', fromValue: [86.75,76.97]}], position: 1000, duration: 0 },
                { id: "eid2452", tween: [ "style", "${_pelo}", "-ms-transform-origin", [86.75,76.97], { valueTemplate: '@@0@@% @@1@@%', fromValue: [86.75,76.97]}], position: 1000, duration: 0 },
                { id: "eid2453", tween: [ "style", "${_pelo}", "msTransformOrigin", [86.75,76.97], { valueTemplate: '@@0@@% @@1@@%', fromValue: [86.75,76.97]}], position: 1000, duration: 0 },
                { id: "eid2454", tween: [ "style", "${_pelo}", "-o-transform-origin", [86.75,76.97], { valueTemplate: '@@0@@% @@1@@%', fromValue: [86.75,76.97]}], position: 1000, duration: 0 },
                { id: "eid2455", tween: [ "style", "${_pelo}", "transform-origin", [86.75,76.97], { valueTemplate: '@@0@@% @@1@@%', fromValue: [86.75,76.97]}], position: 1000, duration: 0 },
                { id: "eid1829", tween: [ "style", "${_ojos}", "-webkit-transform-origin", [26.49,198.01], { valueTemplate: '@@0@@% @@1@@%', fromValue: [26.49,198.01]}], position: 1000, duration: 0 },
                { id: "eid2456", tween: [ "style", "${_ojos}", "-moz-transform-origin", [26.49,198.01], { valueTemplate: '@@0@@% @@1@@%', fromValue: [26.49,198.01]}], position: 1000, duration: 0 },
                { id: "eid2457", tween: [ "style", "${_ojos}", "-ms-transform-origin", [26.49,198.01], { valueTemplate: '@@0@@% @@1@@%', fromValue: [26.49,198.01]}], position: 1000, duration: 0 },
                { id: "eid2458", tween: [ "style", "${_ojos}", "msTransformOrigin", [26.49,198.01], { valueTemplate: '@@0@@% @@1@@%', fromValue: [26.49,198.01]}], position: 1000, duration: 0 },
                { id: "eid2459", tween: [ "style", "${_ojos}", "-o-transform-origin", [26.49,198.01], { valueTemplate: '@@0@@% @@1@@%', fromValue: [26.49,198.01]}], position: 1000, duration: 0 },
                { id: "eid2460", tween: [ "style", "${_ojos}", "transform-origin", [26.49,198.01], { valueTemplate: '@@0@@% @@1@@%', fromValue: [26.49,198.01]}], position: 1000, duration: 0 },
                { id: "eid1838", tween: [ "transform", "${_cabeza}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 1000, duration: 3714 },
                { id: "eid1839", tween: [ "transform", "${_cabeza}", "rotateZ", '2deg', { fromValue: '-3deg'}], position: 4714, duration: 5571 },
                { id: "eid1840", tween: [ "transform", "${_cabeza}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 10286, duration: 3714 },
                { id: "eid1950", tween: [ "transform", "${_pelo}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 1000, duration: 3714 },
                { id: "eid1951", tween: [ "transform", "${_pelo}", "rotateZ", '2deg', { fromValue: '-3deg'}], position: 4714, duration: 5571 },
                { id: "eid1952", tween: [ "transform", "${_pelo}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 10286, duration: 3714 },
                { id: "eid1833", tween: [ "style", "${_boca}", "-webkit-transform-origin", [14.44,98.01], { valueTemplate: '@@0@@% @@1@@%', fromValue: [14.44,98.01]}], position: 1000, duration: 0 },
                { id: "eid2461", tween: [ "style", "${_boca}", "-moz-transform-origin", [14.44,98.01], { valueTemplate: '@@0@@% @@1@@%', fromValue: [14.44,98.01]}], position: 1000, duration: 0 },
                { id: "eid2462", tween: [ "style", "${_boca}", "-ms-transform-origin", [14.44,98.01], { valueTemplate: '@@0@@% @@1@@%', fromValue: [14.44,98.01]}], position: 1000, duration: 0 },
                { id: "eid2463", tween: [ "style", "${_boca}", "msTransformOrigin", [14.44,98.01], { valueTemplate: '@@0@@% @@1@@%', fromValue: [14.44,98.01]}], position: 1000, duration: 0 },
                { id: "eid2464", tween: [ "style", "${_boca}", "-o-transform-origin", [14.44,98.01], { valueTemplate: '@@0@@% @@1@@%', fromValue: [14.44,98.01]}], position: 1000, duration: 0 },
                { id: "eid2465", tween: [ "style", "${_boca}", "transform-origin", [14.44,98.01], { valueTemplate: '@@0@@% @@1@@%', fromValue: [14.44,98.01]}], position: 1000, duration: 0 },
                { id: "eid1849", tween: [ "transform", "${_DER}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 1500, duration: 2750 },
                { id: "eid1850", tween: [ "transform", "${_DER}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 4250, duration: 2750 },
                { id: "eid1851", tween: [ "transform", "${_MANO2}", "rotateZ", '0deg', { fromValue: '17deg'}], position: 750, duration: 2250 },
                { id: "eid1852", tween: [ "transform", "${_MANO2}", "rotateZ", '17deg', { fromValue: '0deg'}], position: 5500, duration: 2250 }            ]
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
})(jQuery, AdobeEdge, "EDGE-5531445");
