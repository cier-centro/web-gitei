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
                id: 'slide_1',
                type: 'rect',
                rect: ['5px', '72px','auto','auto','auto', 'auto']
            },
            {
                id: 'txt',
                type: 'image',
                rect: ['5', '92px','1304px','596px','auto', 'auto'],
                clip: ['rect(113.333251953125px 1220px 501.33349609375px 620px)'],
                fill: ["rgba(0,0,0,0)",im+"F1_D2.png",'0px','0px']
            },
            {
                id: 'fondo',
                type: 'image',
                rect: ['-2px', '125px','1304px','596px','auto', 'auto'],
                clip: ['rect(166.666748046875px 468px 486.6669921875px 154.666015625px)'],
                fill: ["rgba(0,0,0,0)",im+"F1_D2.png",'0px','0px']
            },
            {
                id: 'bt_audio',
                type: 'rect',
                rect: ['21px', '236px','auto','auto','auto', 'auto'],
                title: 'Au1'
            },
            {
                id: 'per',
                type: 'rect',
                rect: ['96px', '100px','auto','auto','auto', 'auto'],
                clip: ['rect(-33.73828125px 492px 636.5899047851563px -29.78448486328125px)'],
                transform: [[],[],[],['0.65201','0.65201']]
            },
            {
                id: 'Au1',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['1514', '275','320px','45px','auto', 'auto'],
                source: ['media/F1_E1_D2_N.mp3'],
                preload: 'auto'
            }],
            symbolInstances: [
            {
                id: 'bt_audio',
                symbolName: 'bt_audio',
                autoPlay: {

                }
            },
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
            "${_txt}": [
                ["style", "top", '92px'],
                ["style", "clip", [113.333251953125,1220,120,620], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
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
            "${_fondo}": [
                ["style", "-webkit-transform-origin", [23.19,55.82], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [23.19,55.82],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [23.19,55.82],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [23.19,55.82],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [23.19,55.82],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [23.19,55.82],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "top", '125px'],
                ["style", "left", '-2px'],
                ["style", "clip", [102.666748046875,600,560.00048828125,93.33203125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_per}": [
                ["style", "top", '100px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "left", '96px'],
                ["style", "clip", [-33.73828125,492,636.5899047851562,-29.78448486328125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "-webkit-transform-origin", [34.85,33.52], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [34.85,33.52],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [34.85,33.52],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [34.85,33.52],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [34.85,33.52],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [34.85,33.52],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_bt_audio}": [
                ["transform", "scaleX", '0'],
                ["style", "top", '236px'],
                ["style", "left", '21px'],
                ["transform", "scaleY", '0']
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
                { id: "eid2122", tween: [ "style", "${_txt}", "clip", [113.333251953125,1220,501.33349609375,620], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [113.333251953125,1220,120,620]}], position: 1000, duration: 1000, easing: "swing" },
                { id: "eid2095", tween: [ "transform", "${_per}", "scaleX", '0.78468', { fromValue: '0'}], position: 0, duration: 750, easing: "swing" },
                { id: "eid2124", tween: [ "transform", "${_bt_audio}", "scaleX", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "swing" },
                { id: "eid2175", tween: [ "style", "${_fondo}", "clip", [102.666748046875,600,560.00048828125,93.33203125], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [102.666748046875,600,560.00048828125,93.33203125]}], position: 15000, duration: 0 },
                { id: "eid2101", tween: [ "transform", "${_fondo}", "scaleY", '0.94946', { fromValue: '0'}], position: 0, duration: 750, easing: "swing" },
                { id: "eid2126", tween: [ "transform", "${_bt_audio}", "scaleY", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "swing" },
                { id: "eid2099", tween: [ "transform", "${_fondo}", "scaleX", '0.94946', { fromValue: '0'}], position: 0, duration: 750, easing: "swing" },
                { id: "eid2097", tween: [ "transform", "${_per}", "scaleY", '0.78468', { fromValue: '0'}], position: 0, duration: 750, easing: "swing" }            ]
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
                    type: 'image',
                    id: 'pelo',
                    rect: ['-806px', '-597px', '1117px', '1000px', 'auto', 'auto'],
                    clip: ['rect(546px 1089px 918px 874px)'],
                    fill: ['rgba(0,0,0,0)', 'images/amarilla.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'DER',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['155px', '266px', '306px', '204px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0)'],
                    c: [
                    {
                        type: 'rect',
                        id: 'MANO2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['72px', '-18px', '234px', '224px', 'auto', 'auto'],
                        fill: ['rgba(192,192,192,0)'],
                        c: [
                        {
                            type: 'image',
                            id: 'antbra_2',
                            rect: ['-723px', '-220px', '1117px', '1000px', 'auto', 'auto'],
                            clip: ['rect(282px 855px 436px 728px)'],
                            fill: ['rgba(0,0,0,0)', 'images/amarilla.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'mano_2',
                            rect: ['-771px', '-220px', '1117px', '1000px', 'auto', 'auto'],
                            clip: ['rect(232px 1003px 326px 864px)'],
                            fill: ['rgba(0,0,0,0)', 'images/amarilla.png', '0px', '0px']
                        }]
                    },
                    {
                        type: 'image',
                        id: 'bra_2',
                        rect: ['-601px', '-238px', '1117px', '1000px', 'auto', 'auto'],
                        clip: ['rect(244px 725px 422px 598px)'],
                        fill: ['rgba(0,0,0,0)', 'images/amarilla.png', '0px', '0px']
                    }]
                },
                {
                    rect: ['-10px', '109px', '500px', '500px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'recorte',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(239,239,239,0.00)'],
                    c: [
                    {
                        type: 'image',
                        id: 'piernas',
                        rect: ['20px', '-31px', '1117px', '1000px', 'auto', 'auto'],
                        clip: ['rect(426px 359px 972px 24px)'],
                        fill: ['rgba(0,0,0,0)', 'images/amarilla.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        id: 'tronco',
                        rect: ['20px', '9px', '1117px', '1000px', 'auto', 'auto'],
                        clip: ['rect(72px 299px 424px 54px)'],
                        fill: ['rgba(0,0,0,0)', 'images/amarilla.png', '0px', '0px']
                    },
                    {
                        type: 'rect',
                        id: 'IZQ',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['35px', '178px', '118px', '430px', 'auto', 'auto'],
                        fill: ['rgba(192,192,192,0)'],
                        c: [
                        {
                            type: 'rect',
                            id: 'MANO',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-10px', '152px', '110px', '278px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,0)'],
                            c: [
                            {
                                type: 'image',
                                id: 'antbra_1',
                                rect: ['-397px', '-447px', '1117px', '1000px', 'auto', 'auto'],
                                clip: ['rect(452px 485px 636px 416px)'],
                                fill: ['rgba(0,0,0,0)', 'images/amarilla.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'mano_1',
                                rect: ['-397px', '-487px', '1117px', '1000px', 'auto', 'auto'],
                                clip: ['rect(640px 473px 764px 404px)'],
                                fill: ['rgba(0,0,0,0)', 'images/amarilla.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'image',
                            id: 'bra_1',
                            rect: ['-407px', '-245px', '1117px', '1000px', 'auto', 'auto'],
                            clip: ['rect(242px 525px 456px 404px)'],
                            fill: ['rgba(0,0,0,0)', 'images/amarilla.png', '0px', '0px']
                        }]
                    }]
                },
                {
                    type: 'group',
                    id: 'CABEZA',
                    clip: ['rect(514px 833px 1000px 546px)'],
                    rect: ['-526px', '-519px', '1117', '1000', 'auto', 'auto'],
                    c: [
                    {
                        type: 'image',
                        id: 'cabeza',
                        rect: ['0px', '0px', '1117px', '1000px', 'auto', 'auto'],
                        clip: ['rect(528px 809px 912px 586px)'],
                        fill: ['rgba(0,0,0,0)', 'images/amarilla.png', '0px', '0px']
                    },
                    {
                        id: 'boca',
                        type: 'rect',
                        rect: ['676px', '704px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'ojos',
                        type: 'rect',
                        rect: ['649px', '637px', 'auto', 'auto', 'auto', 'auto']
                    }]
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
                ["style", "top", '178px'],
                ["style", "left", '35px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_CABEZA}": [
                ["style", "top", '-519px'],
                ["style", "left", '-526px'],
                ["style", "clip", [514,833,1000,546], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "-webkit-transform-origin", [61.68,76.97], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [61.68,76.97],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [61.68,76.97],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [61.68,76.97],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [61.68,76.97],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [61.68,76.97],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_cabeza}": [
                ["style", "-webkit-transform-origin", [61.68,76.97], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [61.68,76.97],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [61.68,76.97],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [61.68,76.97],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [61.68,76.97],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [61.68,76.97],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["style", "top", '0px'],
                ["style", "clip", [528,809,912,586], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px']
            ],
            "${_bra_1}": [
                ["style", "-webkit-transform-origin", [42.94,28.03], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [42.94,28.03],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [42.94,28.03],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [42.94,28.03],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [42.94,28.03],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [42.94,28.03],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '-245px'],
                ["style", "clip", [242,525,456,404], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-407px']
            ],
            "${_piernas}": [
                ["style", "top", '-31px'],
                ["style", "left", '20px'],
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
                ["style", "top", '9px'],
                ["style", "left", '20px'],
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
                ["style", "top", '-447px'],
                ["style", "clip", [452,485,636,416], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-397px']
            ],
            "${_MANO}": [
                ["style", "-webkit-transform-origin", [53.29,8.88], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [53.29,8.88],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [53.29,8.88],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [53.29,8.88],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [53.29,8.88],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [53.29,8.88],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg']
            ],
            "${_recorte}": [
                ["style", "top", '109px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '500px'],
                ["color", "background-color", 'rgba(239,239,239,0.00)'],
                ["style", "left", '-10px'],
                ["style", "width", '500px']
            ],
            "${_boca}": [
                ["style", "-webkit-transform-origin", [14.44,98.01], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [14.44,98.01],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [14.44,98.01],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [14.44,98.01],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [14.44,98.01],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [14.44,98.01],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '704px'],
                ["style", "left", '676px'],
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
            "${_mano_1}": [
                ["style", "-webkit-transform-origin", [40.08,65.57], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [40.08,65.57],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [40.08,65.57],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [40.08,65.57],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [40.08,65.57],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [40.08,65.57],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '-487px'],
                ["style", "clip", [640,473,764,404], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-397px']
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
                ["style", "top", '637px'],
                ["style", "left", '649px'],
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
                { id: "eid2326", tween: [ "style", "${_cabeza}", "-moz-transform-origin", [61.68,76.97], { valueTemplate: '@@0@@% @@1@@%', fromValue: [61.68,76.97]}], position: 1000, duration: 0 },
                { id: "eid2327", tween: [ "style", "${_cabeza}", "-ms-transform-origin", [61.68,76.97], { valueTemplate: '@@0@@% @@1@@%', fromValue: [61.68,76.97]}], position: 1000, duration: 0 },
                { id: "eid2328", tween: [ "style", "${_cabeza}", "msTransformOrigin", [61.68,76.97], { valueTemplate: '@@0@@% @@1@@%', fromValue: [61.68,76.97]}], position: 1000, duration: 0 },
                { id: "eid2329", tween: [ "style", "${_cabeza}", "-o-transform-origin", [61.68,76.97], { valueTemplate: '@@0@@% @@1@@%', fromValue: [61.68,76.97]}], position: 1000, duration: 0 },
                { id: "eid2330", tween: [ "style", "${_cabeza}", "transform-origin", [61.68,76.97], { valueTemplate: '@@0@@% @@1@@%', fromValue: [61.68,76.97]}], position: 1000, duration: 0 },
                { id: "eid1843", tween: [ "transform", "${_IZQ}", "rotateZ", '-6deg', { fromValue: '0deg'}], position: 4750, duration: 2750 },
                { id: "eid1844", tween: [ "transform", "${_IZQ}", "rotateZ", '0deg', { fromValue: '-6deg'}], position: 10500, duration: 2750 },
                { id: "eid1949", tween: [ "style", "${_pelo}", "-webkit-transform-origin", [86.75,76.97], { valueTemplate: '@@0@@% @@1@@%', fromValue: [86.75,76.97]}], position: 1000, duration: 0 },
                { id: "eid2331", tween: [ "style", "${_pelo}", "-moz-transform-origin", [86.75,76.97], { valueTemplate: '@@0@@% @@1@@%', fromValue: [86.75,76.97]}], position: 1000, duration: 0 },
                { id: "eid2332", tween: [ "style", "${_pelo}", "-ms-transform-origin", [86.75,76.97], { valueTemplate: '@@0@@% @@1@@%', fromValue: [86.75,76.97]}], position: 1000, duration: 0 },
                { id: "eid2333", tween: [ "style", "${_pelo}", "msTransformOrigin", [86.75,76.97], { valueTemplate: '@@0@@% @@1@@%', fromValue: [86.75,76.97]}], position: 1000, duration: 0 },
                { id: "eid2334", tween: [ "style", "${_pelo}", "-o-transform-origin", [86.75,76.97], { valueTemplate: '@@0@@% @@1@@%', fromValue: [86.75,76.97]}], position: 1000, duration: 0 },
                { id: "eid2335", tween: [ "style", "${_pelo}", "transform-origin", [86.75,76.97], { valueTemplate: '@@0@@% @@1@@%', fromValue: [86.75,76.97]}], position: 1000, duration: 0 },
                { id: "eid1829", tween: [ "style", "${_ojos}", "-webkit-transform-origin", [26.49,198.01], { valueTemplate: '@@0@@% @@1@@%', fromValue: [26.49,198.01]}], position: 1000, duration: 0 },
                { id: "eid2336", tween: [ "style", "${_ojos}", "-moz-transform-origin", [26.49,198.01], { valueTemplate: '@@0@@% @@1@@%', fromValue: [26.49,198.01]}], position: 1000, duration: 0 },
                { id: "eid2337", tween: [ "style", "${_ojos}", "-ms-transform-origin", [26.49,198.01], { valueTemplate: '@@0@@% @@1@@%', fromValue: [26.49,198.01]}], position: 1000, duration: 0 },
                { id: "eid2338", tween: [ "style", "${_ojos}", "msTransformOrigin", [26.49,198.01], { valueTemplate: '@@0@@% @@1@@%', fromValue: [26.49,198.01]}], position: 1000, duration: 0 },
                { id: "eid2339", tween: [ "style", "${_ojos}", "-o-transform-origin", [26.49,198.01], { valueTemplate: '@@0@@% @@1@@%', fromValue: [26.49,198.01]}], position: 1000, duration: 0 },
                { id: "eid2340", tween: [ "style", "${_ojos}", "transform-origin", [26.49,198.01], { valueTemplate: '@@0@@% @@1@@%', fromValue: [26.49,198.01]}], position: 1000, duration: 0 },
                { id: "eid1838", tween: [ "transform", "${_cabeza}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 1000, duration: 3714 },
                { id: "eid1839", tween: [ "transform", "${_cabeza}", "rotateZ", '2deg', { fromValue: '-3deg'}], position: 4714, duration: 5571 },
                { id: "eid1840", tween: [ "transform", "${_cabeza}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 10286, duration: 3714 },
                { id: "eid1950", tween: [ "transform", "${_pelo}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 1000, duration: 3714 },
                { id: "eid1951", tween: [ "transform", "${_pelo}", "rotateZ", '2deg', { fromValue: '-3deg'}], position: 4714, duration: 5571 },
                { id: "eid1952", tween: [ "transform", "${_pelo}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 10286, duration: 3714 },
                { id: "eid1833", tween: [ "style", "${_boca}", "-webkit-transform-origin", [14.44,98.01], { valueTemplate: '@@0@@% @@1@@%', fromValue: [14.44,98.01]}], position: 1000, duration: 0 },
                { id: "eid2341", tween: [ "style", "${_boca}", "-moz-transform-origin", [14.44,98.01], { valueTemplate: '@@0@@% @@1@@%', fromValue: [14.44,98.01]}], position: 1000, duration: 0 },
                { id: "eid2342", tween: [ "style", "${_boca}", "-ms-transform-origin", [14.44,98.01], { valueTemplate: '@@0@@% @@1@@%', fromValue: [14.44,98.01]}], position: 1000, duration: 0 },
                { id: "eid2343", tween: [ "style", "${_boca}", "msTransformOrigin", [14.44,98.01], { valueTemplate: '@@0@@% @@1@@%', fromValue: [14.44,98.01]}], position: 1000, duration: 0 },
                { id: "eid2344", tween: [ "style", "${_boca}", "-o-transform-origin", [14.44,98.01], { valueTemplate: '@@0@@% @@1@@%', fromValue: [14.44,98.01]}], position: 1000, duration: 0 },
                { id: "eid2345", tween: [ "style", "${_boca}", "transform-origin", [14.44,98.01], { valueTemplate: '@@0@@% @@1@@%', fromValue: [14.44,98.01]}], position: 1000, duration: 0 },
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
