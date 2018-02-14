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
                id: 'F1_D6',
                type: 'image',
                rect: ['5px', '72px','1304px','596px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"F1_D6.png",'0px','0px']
            },
            {
                id: 'slide_1',
                type: 'rect',
                rect: ['5px', '72px','auto','auto','auto', 'auto']
            },
            {
                id: 'per',
                type: 'rect',
                rect: ['-12px', '-60px','auto','auto','auto', 'auto'],
                clip: ['rect(0px 602px 776.7815551757813px 0px)'],
                transform: [[],[],[],['0.73998','0.73998']]
            },
            {
                id: 'globo',
                type: 'image',
                rect: ['5', '72','1304px','596px','auto', 'auto'],
                clip: ['rect(41.333251953125px 1238.666015625px 558.66650390625px 361.33349609375px)'],
                fill: ["rgba(0,0,0,0)",im+"globo.png",'0px','0px']
            },
            {
                id: 'txt',
                type: 'image',
                rect: ['5', '72','1304px','596px','auto', 'auto'],
                clip: ['rect(61.333251953125px 1212px 525.333251953125px 550.6669921875px)'],
                fill: ["rgba(0,0,0,0)",im+"txt.png",'0px','0px']
            },
            {
                id: 'bt_audio',
                type: 'rect',
                rect: ['422px', '310px','auto','auto','auto', 'auto'],
                title: 'Au1'
            },
            {
                id: 'Au1',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['1471', '182','320px','45px','auto', 'auto'],
                source: ['media/F1_E2_D6_N.mp3'],
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
                ["style", "clip", [61.333251953125,1212,525.333251953125,550.6669921875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "opacity", '0']
            ],
            "${_globo}": [
                ["transform", "scaleX", '0'],
                ["style", "clip", [41.333251953125,1238.666015625,558.66650390625,361.33349609375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleY", '0'],
                ["style", "-webkit-transform-origin", [28.4,33.67], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [28.4,33.67],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [28.4,33.67],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [28.4,33.67],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [28.4,33.67],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [28.4,33.67],{valueTemplate:'@@0@@% @@1@@%'}]
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
            "${_bt_audio}": [
                ["transform", "scaleX", '0'],
                ["style", "left", '422px'],
                ["transform", "scaleY", '0'],
                ["style", "top", '310px']
            ],
            "${_F1_D6}": [
                ["style", "top", '72px'],
                ["style", "left", '5px']
            ],
            "${_per}": [
                ["style", "top", '-60px'],
                ["transform", "scaleY", '0.73998'],
                ["transform", "scaleX", '0.73998'],
                ["style", "left", '-12px'],
                ["style", "clip", [0,602,776.7815551757812,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "min-width", '320px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "max-width", '1366px'],
                ["style", "width", '1366px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 14000,
            autoPlay: true,
            labels: {
                "slide_1": 0
            },
            timeline: [
                { id: "eid2598", tween: [ "transform", "${_globo}", "scaleY", '1', { fromValue: '0'}], position: 750, duration: 750, easing: "easeInOutBack" },
                { id: "eid2593", tween: [ "transform", "${_bt_audio}", "scaleX", '1', { fromValue: '0'}], position: 250, duration: 500, easing: "swing" },
                { id: "eid2596", tween: [ "transform", "${_globo}", "scaleX", '1', { fromValue: '0'}], position: 750, duration: 750, easing: "easeInOutBack" },
                { id: "eid2594", tween: [ "transform", "${_bt_audio}", "scaleY", '1', { fromValue: '0'}], position: 250, duration: 500, easing: "swing" },
                { id: "eid2600", tween: [ "style", "${_txt}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 500, easing: "swing" }            ]
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
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
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
                    type: 'rect',
                    id: 'RectangleCopy',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '0px', '176px', '80px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    type: 'image',
                    id: 'bocCopy',
                    rect: ['-706px', '-38px', '1117px', '1088px', 'auto', 'auto'],
                    clip: ['rect(206px 933px 290px 454px)'],
                    fill: ['rgba(0,0,0,0)', 'images/profesora.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bocCopy}": [
                ["style", "top", '-204px'],
                ["style", "left", '-837px'],
                ["style", "clip", [206,933,290,454], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_RectangleCopy}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "left", '0px'],
                ["style", "height", '80px']
            ],
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "width", '90px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1750,
            autoPlay: true,
            labels: {
                "mute": 0,
                "ini": 250
            },
            timeline: [
                { id: "eid2491", tween: [ "style", "${_bocCopy}", "left", '-837px', { fromValue: '-837px'}], position: 250, duration: 0 },
                { id: "eid2493", tween: [ "style", "${_bocCopy}", "left", '-736px', { fromValue: '-800px'}], position: 373, duration: 0 },
                { id: "eid2494", tween: [ "style", "${_bocCopy}", "left", '-646px', { fromValue: '-699px'}], position: 500, duration: 0 },
                { id: "eid2495", tween: [ "style", "${_bocCopy}", "left", '-555px', { fromValue: '-608px'}], position: 618, duration: 0 },
                { id: "eid2496", tween: [ "style", "${_bocCopy}", "left", '-466px', { fromValue: '-519px'}], position: 750, duration: 0 },
                { id: "eid2497", tween: [ "style", "${_bocCopy}", "left", '-645px', { fromValue: '-429px'}], position: 882, duration: 0 },
                { id: "eid2498", tween: [ "style", "${_bocCopy}", "left", '-555px', { fromValue: '-608px'}], position: 1000, duration: 0 },
                { id: "eid2499", tween: [ "style", "${_bocCopy}", "left", '-837px', { fromValue: '-519px'}], position: 1127, duration: 0 },
                { id: "eid2500", tween: [ "style", "${_bocCopy}", "left", '-736px', { fromValue: '-800px'}], position: 1250, duration: 0 },
                { id: "eid2501", tween: [ "style", "${_bocCopy}", "left", '-645px', { fromValue: '-699px'}], position: 1377, duration: 0 },
                { id: "eid2508", tween: [ "style", "${_bocCopy}", "left", '-466px', { fromValue: '-645px'}], position: 1500, duration: 0 },
                { id: "eid2503", tween: [ "style", "${_bocCopy}", "left", '-737px', { fromValue: '-466px'}], position: 1627, duration: 0 },
                { id: "eid2504", tween: [ "style", "${_bocCopy}", "left", '-837px', { fromValue: '-699px'}], position: 1750, duration: 0 },
                { id: "eid2492", tween: [ "style", "${_bocCopy}", "top", '-204px', { fromValue: '-204px'}], position: 250, duration: 0 }            ]
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
                    type: 'rect',
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '0px', '176px', '53px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    type: 'image',
                    id: 'ojoCopy2',
                    rect: ['-758px', '-119px', '1117px', '1088px', 'auto', 'auto'],
                    clip: ['rect(116px 929px 180px 550px)'],
                    fill: ['rgba(0,0,0,0)', 'images/profesora.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ojoCopy2}": [
                ["style", "top", '-119px'],
                ["style", "left", '-758px'],
                ["style", "clip", [116,929,180,550], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Rectangle}": [
                ["style", "height", '53px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)']
            ],
            "${symbolSelector}": [
                ["style", "height", '53px'],
                ["style", "width", '176px'],
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
                { id: "eid2476", tween: [ "style", "${_ojoCopy2}", "left", '-758px', { fromValue: '-758px'}], position: 0, duration: 0 },
                { id: "eid2477", tween: [ "style", "${_ojoCopy2}", "left", '-559px', { fromValue: '-758px'}], position: 250, duration: 0 },
                { id: "eid2478", tween: [ "style", "${_ojoCopy2}", "left", '-758px', { fromValue: '-559px'}], position: 500, duration: 0 },
                { id: "eid2479", tween: [ "style", "${_ojoCopy2}", "left", '-758px', { fromValue: '-758px'}], position: 3750, duration: 0 },
                { id: "eid2480", tween: [ "style", "${_ojoCopy2}", "left", '-559px', { fromValue: '-758px'}], position: 4000, duration: 0 },
                { id: "eid2481", tween: [ "style", "${_ojoCopy2}", "left", '-758px', { fromValue: '-559px'}], position: 4250, duration: 0 },
                { id: "eid2483", tween: [ "style", "${_ojoCopy2}", "left", '-758px', { fromValue: '-758px'}], position: 8250, duration: 0 },
                { id: "eid2484", tween: [ "style", "${_ojoCopy2}", "left", '-559px', { fromValue: '-758px'}], position: 8500, duration: 0 },
                { id: "eid2485", tween: [ "style", "${_ojoCopy2}", "left", '-758px', { fromValue: '-559px'}], position: 8750, duration: 0 },
                { id: "eid2475", tween: [ "style", "${_ojoCopy2}", "top", '-119px', { fromValue: '-119px'}], position: 0, duration: 0 },
                { id: "eid2482", tween: [ "style", "${_ojoCopy2}", "top", '-119px', { fromValue: '-119px'}], position: 3750, duration: 0 },
                { id: "eid2486", tween: [ "style", "${_ojoCopy2}", "top", '-119px', { fromValue: '-119px'}], position: 8250, duration: 0 }            ]
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
                    id: 'piernas',
                    rect: ['36px', '90px', '1117px', '1088px', 'auto', 'auto'],
                    clip: ['rect(356px 359px 1088px 44px)'],
                    fill: ['rgba(0,0,0,0)', 'images/profesora.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'DER',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['195px', '294px', '416px', '194px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0)'],
                    c: [
                    {
                        type: 'rect',
                        id: 'MANO2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['68px', '80px', '354px', '114px', 'auto', 'auto'],
                        fill: ['rgba(192,192,192,0)'],
                        c: [
                        {
                            type: 'image',
                            id: 'antbra_2',
                            rect: ['-738px', '-387px', '1117px', '1088px', 'auto', 'auto'],
                            clip: ['rect(428px 969px 496px 736px)'],
                            fill: ['rgba(0,0,0,0)', 'images/profesora.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'mano_2',
                            rect: ['-769px', '-386px', '1117px', '1088px', 'auto', 'auto'],
                            clip: ['rect(384px 1117px 488px 966px)'],
                            fill: ['rgba(0,0,0,0)', 'images/profesora.png', '0px', '0px']
                        }]
                    },
                    {
                        type: 'image',
                        id: 'bra_2',
                        rect: ['-601px', '-305px', '1117px', '1088px', 'auto', 'auto'],
                        clip: ['rect(302px 723px 484px 600px)'],
                        fill: ['rgba(0,0,0,0)', 'images/profesora.png', '0px', '0px']
                    }]
                },
                {
                    type: 'image',
                    id: 'tronco',
                    rect: ['36px', '203px', '1117px', '1088px', 'auto', 'auto'],
                    clip: ['rect(0px 283px 358px 36px)'],
                    fill: ['rgba(0,0,0,0)', 'images/profesora.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'IZQ',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['53px', '294px', '90px', '482px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0)'],
                    c: [
                    {
                        type: 'rect',
                        id: 'MANO',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['0px', '136px', '84px', '338px', 'auto', 'auto'],
                        fill: ['rgba(192,192,192,0)'],
                        c: [
                        {
                            type: 'image',
                            id: 'antbra_1',
                            rect: ['-425px', '-522px', '1117px', '1088px', 'auto', 'auto'],
                            clip: ['rect(520px 493px 756px 426px)'],
                            fill: ['rgba(0,0,0,0)', 'images/profesora.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'mano_1',
                            rect: ['-430px', '-563px', '1117px', '1088px', 'auto', 'auto'],
                            clip: ['rect(774px 507px 900px 428px)'],
                            fill: ['rgba(0,0,0,0)', 'images/profesora.png', '0px', '0px']
                        }]
                    },
                    {
                        type: 'image',
                        id: 'bra_1',
                        rect: ['-427px', '-305px', '1117px', '1088px', 'auto', 'auto'],
                        clip: ['rect(308px 515px 512px 424px)'],
                        fill: ['rgba(0,0,0,0)', 'images/profesora.png', '0px', '0px']
                    }]
                },
                {
                    type: 'rect',
                    id: 'CABEZA',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['5px', '8px', '354px', '294px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0)'],
                    c: [
                    {
                        type: 'image',
                        rect: ['-520px', '-580px', '1117px', '1088px', 'auto', 'auto'],
                        id: 'cabeza',
                        opacity: 1,
                        clip: ['rect(578px 867px 886px 520px)'],
                        fill: ['rgba(0,0,0,0)', 'images/profesora.png', '0px', '0px']
                    },
                    {
                        id: 'boca',
                        type: 'rect',
                        rect: ['107px', '173px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'ojos',
                        type: 'rect',
                        rect: ['120px', '125px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        type: 'image',
                        id: 'gafas',
                        rect: ['-781px', '-580px', '1117px', '1088px', 'auto', 'auto'],
                        clip: ['rect(698px 1089px 794px 876px)'],
                        fill: ['rgba(0,0,0,0)', 'images/profesora.png', '0px', '0px']
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
                ["style", "-webkit-transform-origin", [62.21,8.16], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [62.21,8.16],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [62.21,8.16],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [62.21,8.16],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [62.21,8.16],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [62.21,8.16],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '294px'],
                ["style", "left", '53px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_CABEZA}": [
                ["style", "-webkit-transform-origin", [46.7,90.71], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [46.7,90.71],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [46.7,90.71],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [46.7,90.71],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [46.7,90.71],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [46.7,90.71],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '5px'],
                ["style", "top", '8px']
            ],
            "${_cabeza}": [
                ["style", "-webkit-transform-origin", [61.35,77.82], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [61.35,77.82],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [61.35,77.82],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [61.35,77.82],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [61.35,77.82],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [61.35,77.82],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["style", "top", '-580px'],
                ["style", "opacity", '1'],
                ["style", "clip", [578,867,886,520], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-520px']
            ],
            "${_bra_1}": [
                ["style", "top", '-305px'],
                ["style", "-webkit-transform-origin", [43.24,31.65], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [43.24,31.65],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [43.24,31.65],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [43.24,31.65],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [43.24,31.65],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [43.24,31.65],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-427px'],
                ["style", "clip", [308,515,512,424], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_piernas}": [
                ["style", "top", '90px'],
                ["style", "-webkit-transform-origin", [16.2,40.5], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [16.2,40.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [16.2,40.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [16.2,40.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [16.2,40.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [16.2,40.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '36px'],
                ["style", "clip", [356,359,1088,44], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '1184px'],
                ["style", "width", '602px']
            ],
            "${_DER}": [
                ["style", "-webkit-transform-origin", [7.21,10.64], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [7.21,10.64],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [7.21,10.64],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [7.21,10.64],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [7.21,10.64],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [7.21,10.64],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '294px'],
                ["style", "left", '195px'],
                ["transform", "rotateZ", '10deg']
            ],
            "${_tronco}": [
                ["style", "top", '203px'],
                ["style", "-webkit-transform-origin", [16.2,30.11], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [16.2,30.11],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [16.2,30.11],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [16.2,30.11],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [16.2,30.11],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [16.2,30.11],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '36px'],
                ["style", "clip", [0,283,358,36], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_antbra_1}": [
                ["style", "top", '-522px'],
                ["style", "-webkit-transform-origin", [40.76,50.61], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [40.76,50.61],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [40.76,50.61],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [40.76,50.61],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [40.76,50.61],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [40.76,50.61],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-425px'],
                ["style", "clip", [520,493,756,426], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_MANO2}": [
                ["style", "-webkit-transform-origin", [8.84,63.75], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [8.84,63.75],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [8.84,63.75],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [8.84,63.75],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [8.84,63.75],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [8.84,63.75],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '17deg']
            ],
            "${_antbra_2}": [
                ["style", "top", '-387px'],
                ["style", "-webkit-transform-origin", [68.87,42.25], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [68.87,42.25],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [68.87,42.25],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [68.87,42.25],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [68.87,42.25],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [68.87,42.25],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-738px'],
                ["style", "clip", [428,969,496,736], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_boca}": [
                ["style", "top", '176px'],
                ["style", "-webkit-transform-origin", [9.2,113.35], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [9.2,113.35],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [9.2,113.35],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [9.2,113.35],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [9.2,113.35],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [9.2,113.35],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '156px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_MANO}": [
                ["style", "-webkit-transform-origin", [36.06,8.47], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [36.06,8.47],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [36.06,8.47],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [36.06,8.47],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [36.06,8.47],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [36.06,8.47],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg']
            ],
            "${_gafas}": [
                ["style", "-webkit-transform-origin", [84.72,77.82], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [84.72,77.82],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [84.72,77.82],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [84.72,77.82],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [84.72,77.82],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [84.72,77.82],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["style", "clip", [698,1089,794,876], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-781px'],
                ["style", "top", '-580px']
            ],
            "${_mano_2}": [
                ["style", "top", '-386px'],
                ["transform", "rotateZ", '-10deg'],
                ["style", "left", '-769px'],
                ["style", "clip", [384,1117,488,966], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "-webkit-transform-origin", [87.88,42.16], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [87.88,42.16],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [87.88,42.16],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [87.88,42.16],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [87.88,42.16],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [87.88,42.16],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_bra_2}": [
                ["style", "top", '-305px'],
                ["style", "-webkit-transform-origin", [56.49,29.93], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [56.49,29.93],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [56.49,29.93],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [56.49,29.93],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [56.49,29.93],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [56.49,29.93],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-601px'],
                ["style", "clip", [302,723,484,600], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_mano_1}": [
                ["style", "top", '-563px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "left", '-430px'],
                ["style", "clip", [774,507,900,428], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "-webkit-transform-origin", [42.2,72.52], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [42.2,72.52],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [42.2,72.52],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [42.2,72.52],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [42.2,72.52],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [42.2,72.52],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_ojos}": [
                ["style", "-webkit-transform-origin", [25.73,267.32], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [25.73,267.32],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [25.73,267.32],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [25.73,267.32],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [25.73,267.32],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [25.73,267.32],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '125px'],
                ["style", "left", '120px'],
                ["transform", "rotateZ", '0deg']
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
                { id: "eid2572", tween: [ "transform", "${_ojos}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 500, duration: 3714 },
                { id: "eid2573", tween: [ "transform", "${_ojos}", "rotateZ", '2deg', { fromValue: '-3deg'}], position: 4214, duration: 5571 },
                { id: "eid2574", tween: [ "transform", "${_ojos}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 9786, duration: 3714 },
                { id: "eid2575", tween: [ "transform", "${_boca}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 500, duration: 3714 },
                { id: "eid2576", tween: [ "transform", "${_boca}", "rotateZ", '2deg', { fromValue: '-3deg'}], position: 4214, duration: 5571 },
                { id: "eid2577", tween: [ "transform", "${_boca}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 9786, duration: 3714 },
                { id: "eid2591", tween: [ "transform", "${_mano_2}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 6250, duration: 750 },
                { id: "eid2592", tween: [ "transform", "${_mano_2}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 12750, duration: 750 },
                { id: "eid2583", tween: [ "transform", "${_MANO}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 2250, duration: 2250 },
                { id: "eid2584", tween: [ "transform", "${_MANO}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 4500, duration: 2250 },
                { id: "eid2569", tween: [ "transform", "${_gafas}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 500, duration: 3714 },
                { id: "eid2570", tween: [ "transform", "${_gafas}", "rotateZ", '2deg', { fromValue: '-3deg'}], position: 4214, duration: 5571 },
                { id: "eid2571", tween: [ "transform", "${_gafas}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 9786, duration: 3714 },
                { id: "eid2581", tween: [ "transform", "${_IZQ}", "rotateZ", '-6deg', { fromValue: '0deg'}], position: 250, duration: 2750 },
                { id: "eid2582", tween: [ "transform", "${_IZQ}", "rotateZ", '0deg', { fromValue: '-6deg'}], position: 6000, duration: 2750 },
                { id: "eid2578", tween: [ "transform", "${_cabeza}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 500, duration: 3714 },
                { id: "eid2579", tween: [ "transform", "${_cabeza}", "rotateZ", '2deg', { fromValue: '-3deg'}], position: 4214, duration: 5571 },
                { id: "eid2580", tween: [ "transform", "${_cabeza}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 9786, duration: 3714 },
                { id: "eid2585", tween: [ "transform", "${_mano_1}", "rotateZ", '-23deg', { fromValue: '0deg'}], position: 1000, duration: 750 },
                { id: "eid2586", tween: [ "transform", "${_mano_1}", "rotateZ", '0deg', { fromValue: '-23deg'}], position: 7500, duration: 750 },
                { id: "eid2587", tween: [ "transform", "${_DER}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 6500, duration: 2750 },
                { id: "eid2588", tween: [ "transform", "${_DER}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 9250, duration: 2750 },
                { id: "eid2589", tween: [ "transform", "${_MANO2}", "rotateZ", '0deg', { fromValue: '17deg'}], position: 5750, duration: 2250 },
                { id: "eid2590", tween: [ "transform", "${_MANO2}", "rotateZ", '17deg', { fromValue: '0deg'}], position: 10500, duration: 2250 }            ]
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
                ["style", "clip", [0,90,90,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "height", '90px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '2px'],
                ["style", "width", '90px']
            ],
            "${symbolSelector}": [
                ["style", "height", '90px'],
                ["style", "width", '90px'],
                ["style", "overflow", 'visible']
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
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["transform", "scaleY", '0.92222'],
                ["style", "top", '-4px'],
                ["style", "height", '90px'],
                ["style", "cursor", 'pointer'],
                ["style", "clip", [0,90,90,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '90px']
            ],
            "${_bt_reini}": [
                ["style", "top", '80px'],
                ["style", "height", '80px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '4px'],
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
                { id: "eid3", tween: [ "style", "${_bt_audio}", "background-position", [0,5], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,5]}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_bt_audio}", "background-position", [0,-97], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,5]}], position: 250, duration: 0 },
                { id: "eid1243", tween: [ "style", "${_bt_audio}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1245", tween: [ "style", "${_bt_audio}", "top", '1px', { fromValue: '0px'}], position: 250, duration: 0 },
                { id: "eid1242", tween: [ "style", "${_bt_audio}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1244", tween: [ "style", "${_bt_audio}", "left", '0px', { fromValue: '0px'}], position: 250, duration: 0 }            ]
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
