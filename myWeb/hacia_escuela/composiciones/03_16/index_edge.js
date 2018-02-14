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
                id: 'F1_D17',
                type: 'image',
                rect: ['5px', '72px','1304px','596px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"F1_D17.png",'0px','0px']
            },
            {
                id: 'per',
                type: 'rect',
                rect: ['-13px', '-93px','auto','auto','auto', 'auto'],
                clip: ['rect(0px 560px 824.810302734375px 0px)'],
                transform: [[],[],[],['0.70714','0.70714']]
            },
            {
                id: 'txt4',
                type: 'image',
                rect: ['5px', '72px','1304px','596px','auto', 'auto'],
                clip: ['rect(449.3330078125px 1264px 566.66650390625px 677.33349609375px)'],
                fill: ["rgba(0,0,0,0)",im+"cont.png",'0px','0px']
            },
            {
                id: 'txt3',
                type: 'image',
                rect: ['5px', '72px','1304px','596px','auto', 'auto'],
                clip: ['rect(269.33349609375px 1264px 433.33349609375px 675.99951171875px)'],
                fill: ["rgba(0,0,0,0)",im+"cont.png",'0px','0px']
            },
            {
                id: 'txt2',
                type: 'image',
                rect: ['5px', '72px','1304px','596px','auto', 'auto'],
                clip: ['rect(160px 1265.3330078125px 256px 676.00048828125px)'],
                fill: ["rgba(0,0,0,0)",im+"cont.png",'0px','0px']
            },
            {
                id: 'txt1',
                type: 'image',
                rect: ['5px', '72px','1304px','596px','auto', 'auto'],
                clip: ['rect(33.33349609375px 1265.333984375px 147.999755859375px 675.99951171875px)'],
                fill: ["rgba(0,0,0,0)",im+"cont.png",'0px','0px']
            },
            {
                id: 'globo',
                type: 'image',
                rect: ['5px', '72px','1304px','596px','auto', 'auto'],
                clip: ['rect(29.333251953125px 649.3330078125px 282.66650390625px 238.6669921875px)'],
                fill: ["rgba(0,0,0,0)",im+"cont.png",'0px','0px']
            },
            {
                id: 'bt_audio',
                type: 'rect',
                rect: ['307px', '359px','auto','auto','auto', 'auto'],
                title: 'Au1'
            },
            {
                id: 'Au1',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['1457', '261','320px','45px','auto', 'auto'],
                source: ['media/F1_E3_D16_N.mp3'],
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
            "${_slide_1}": [
                ["style", "left", '5px']
            ],
            "${_txt3}": [
                ["style", "top", '42px'],
                ["style", "opacity", '0'],
                ["style", "left", '5px'],
                ["style", "clip", [269.33349609375,1264,433.33349609375,675.99951171875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_per}": [
                ["style", "top", '-93px'],
                ["transform", "scaleY", '0.70714'],
                ["transform", "scaleX", '0.70714'],
                ["style", "left", '-13px'],
                ["style", "clip", [0,560,824.810302734375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "min-width", '320px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "max-width", '1366px'],
                ["style", "width", '1366px']
            ],
            "${_globo}": [
                ["style", "top", '72px'],
                ["transform", "scaleY", '0'],
                ["style", "left", '5px'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "clip", [29.333251953125,649.3330078125,282.66650390625,238.6669921875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "-webkit-transform-origin", [19.4,42.39], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [19.4,42.39],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [19.4,42.39],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [19.4,42.39],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [19.4,42.39],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [19.4,42.39],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_txt4}": [
                ["style", "top", '42px'],
                ["style", "opacity", '0'],
                ["style", "left", '5px'],
                ["style", "clip", [449.3330078125,1264,566.66650390625,677.33349609375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_F1_D17}": [
                ["style", "left", '5px'],
                ["style", "top", '72px']
            ],
            "${_bt_audio}": [
                ["style", "left", '307px'],
                ["style", "top", '359px']
            ],
            "${_txt1}": [
                ["style", "top", '42px'],
                ["style", "opacity", '0'],
                ["style", "left", '5px'],
                ["style", "clip", [33.33349609375,1265.333984375,147.999755859375,675.99951171875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
            "${_txt2}": [
                ["style", "top", '42px'],
                ["style", "opacity", '0'],
                ["style", "left", '5px'],
                ["style", "clip", [160,1265.3330078125,256,676.00048828125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
                { id: "eid2555", tween: [ "style", "${_txt1}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 500, easing: "swing" },
                { id: "eid2523", tween: [ "style", "${_txt2}", "top", '72px', { fromValue: '42px'}], position: 1000, duration: 500, easing: "swing" },
                { id: "eid2551", tween: [ "style", "${_txt3}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 500, easing: "swing" },
                { id: "eid2549", tween: [ "style", "${_txt4}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500, easing: "swing" },
                { id: "eid2553", tween: [ "style", "${_txt2}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "swing" },
                { id: "eid2525", tween: [ "style", "${_txt1}", "top", '72px', { fromValue: '42px'}], position: 750, duration: 500, easing: "swing" },
                { id: "eid2515", tween: [ "transform", "${_globo}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 750, easing: "swing" },
                { id: "eid2517", tween: [ "style", "${_globo}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 750, easing: "swing" },
                { id: "eid2513", tween: [ "transform", "${_globo}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 750, easing: "swing" },
                { id: "eid2519", tween: [ "style", "${_txt4}", "top", '72px', { fromValue: '42px'}], position: 1500, duration: 500, easing: "swing" },
                { id: "eid2521", tween: [ "style", "${_txt3}", "top", '72px', { fromValue: '42px'}], position: 1250, duration: 500, easing: "swing" }            ]
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
                    type: 'image',
                    id: 'bocCopy',
                    rect: ['-675px', '-95px', '1117px', '1088px', 'auto', 'auto'],
                    clip: ['rect(188px 1055px 262px 362px)'],
                    fill: ['rgba(0,0,0,0)', 'images/profesor.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bocCopy}": [
                ["style", "top", '-188px'],
                ["style", "left", '-921px'],
                ["style", "clip", [188,1055,262,362], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '71px'],
                ["style", "width", '117px'],
                ["style", "overflow", 'hidden']
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
                "mute": 0,
                "ini": 250
            },
            timeline: [
                { id: "eid2487", tween: [ "style", "${_bocCopy}", "left", '-921px', { fromValue: '-921px'}], position: 250, duration: 0 },
                { id: "eid2489", tween: [ "style", "${_bocCopy}", "left", '-780px', { fromValue: '-921px'}], position: 373, duration: 0 },
                { id: "eid2490", tween: [ "style", "${_bocCopy}", "left", '-641px', { fromValue: '-780px'}], position: 500, duration: 0 },
                { id: "eid2491", tween: [ "style", "${_bocCopy}", "left", '-500px', { fromValue: '-641px'}], position: 627, duration: 0 },
                { id: "eid2492", tween: [ "style", "${_bocCopy}", "left", '-363px', { fromValue: '-500px'}], position: 750, duration: 0 },
                { id: "eid2493", tween: [ "style", "${_bocCopy}", "left", '-641px', { fromValue: '-363px'}], position: 877, duration: 0 },
                { id: "eid2494", tween: [ "style", "${_bocCopy}", "left", '-780px', { fromValue: '-641px'}], position: 1000, duration: 0 },
                { id: "eid2495", tween: [ "style", "${_bocCopy}", "left", '-921px', { fromValue: '-780px'}], position: 1123, duration: 0 },
                { id: "eid2496", tween: [ "style", "${_bocCopy}", "left", '-363px', { fromValue: '-921px'}], position: 1250, duration: 0 },
                { id: "eid2497", tween: [ "style", "${_bocCopy}", "left", '-641px', { fromValue: '-363px'}], position: 1369, duration: 0 },
                { id: "eid2498", tween: [ "style", "${_bocCopy}", "left", '-500px', { fromValue: '-641px'}], position: 1496, duration: 0 },
                { id: "eid2499", tween: [ "style", "${_bocCopy}", "left", '-363px', { fromValue: '-500px'}], position: 1619, duration: 0 },
                { id: "eid2500", tween: [ "style", "${_bocCopy}", "left", '-921px', { fromValue: '-363px'}], position: 1750, duration: 0 },
                { id: "eid2501", tween: [ "style", "${_bocCopy}", "left", '-780px', { fromValue: '-921px'}], position: 1873, duration: 0 },
                { id: "eid2503", tween: [ "style", "${_bocCopy}", "left", '-641px', { fromValue: '-780px'}], position: 2000, duration: 0 },
                { id: "eid2488", tween: [ "style", "${_bocCopy}", "top", '-188px', { fromValue: '-188px'}], position: 250, duration: 0 }            ]
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
                    type: 'rect',
                    id: 'DER',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['169px', '338px', '169px', '468px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0)'],
                    c: [
                    {
                        type: 'rect',
                        id: 'MANO2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['39px', '144px', '128px', '329px', 'auto', 'auto'],
                        fill: ['rgba(192,192,192,0)'],
                        c: [
                        {
                            type: 'image',
                            id: 'mano_2',
                            rect: ['-39px', '-224px', '169px', '554px', 'auto', 'auto'],
                            clip: ['rect(414.66650390625px 169px 554px 56px)'],
                            fill: ['rgba(0,0,0,0)', 'images/brazo.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'antbra_2',
                            rect: ['-39px', '-194px', '169px', '554px', 'auto', 'auto'],
                            clip: ['rect(194.66650390625px 115.666015625px 412.66650390625px 38.6669921875px)'],
                            fill: ['rgba(0,0,0,0)', 'images/brazo.png', '0px', '0px']
                        }]
                    },
                    {
                        type: 'image',
                        id: 'bra_2',
                        rect: ['0px', '0px', '169px', '554px', 'auto', 'auto'],
                        clip: ['rect(0px 94.3330078125px 192.6669921875px 0px)'],
                        fill: ['rgba(0,0,0,0)', 'images/brazo.png', '0px', '0px']
                    }]
                },
                {
                    type: 'image',
                    id: 'piernas',
                    rect: ['-15px', '140px', '1117px', '1088px', 'auto', 'auto'],
                    clip: ['rect(456px 369px 1078px 18px)'],
                    fill: ['rgba(0,0,0,0)', 'images/profesor.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'tronco',
                    rect: ['-15px', '228px', '1117px', '1088px', 'auto', 'auto'],
                    clip: ['rect(30px 297px 440px 44px)'],
                    fill: ['rgba(0,0,0,0)', 'images/profesor.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'IZQ',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['6px', '346px', '100px', '468px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        type: 'rect',
                        id: 'MANO',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['-2px', '138px', '90px', '328px', 'auto', 'auto'],
                        fill: ['rgba(192,192,192,0)'],
                        c: [
                        {
                            type: 'image',
                            id: 'mano_1',
                            rect: ['-426px', '-571px', '1117px', '1088px', 'auto', 'auto'],
                            clip: ['rect(758px 517px 910px 432px)'],
                            fill: ['rgba(0,0,0,0)', 'images/profesor.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'antbra_1',
                            rect: ['-426px', '-521px', '1117px', '1088px', 'auto', 'auto'],
                            clip: ['rect(522px 499px 746px 428px)'],
                            fill: ['rgba(0,0,0,0)', 'images/profesor.png', '0px', '0px']
                        }]
                    },
                    {
                        type: 'image',
                        id: 'bra_1',
                        rect: ['-428px', '-308px', '1117px', '1088px', 'auto', 'auto'],
                        clip: ['rect(306px 525px 506px 434px)'],
                        fill: ['rgba(0,0,0,0)', 'images/profesor.png', '0px', '0px']
                    }]
                },
                {
                    type: 'image',
                    rect: ['-533px', '-564px', '1117px', '1088px', 'auto', 'auto'],
                    id: 'cabeza',
                    opacity: 1,
                    clip: ['rect(570px 847px 900px 542px)'],
                    fill: ['rgba(0,0,0,0)', 'images/profesor.png', '0px', '0px']
                },
                {
                    id: 'boca',
                    type: 'rect',
                    rect: ['126px', '233px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'ojos',
                    type: 'rect',
                    rect: ['116px', '151px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    id: 'gafas',
                    rect: ['-814px', '-553px', '1117px', '1088px', 'auto', 'auto'],
                    clip: ['rect(698px 1117px 790px 872px)'],
                    fill: ['rgba(0,0,0,0)', 'images/profesor.png', '0px', '0px']
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
                ["style", "top", '346px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "-webkit-transform-origin", [51.97,7.98], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [51.97,7.98],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [51.97,7.98],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [51.97,7.98],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [51.97,7.98],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [51.97,7.98],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '6px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)']
            ],
            "${_mano_1}": [
                ["style", "top", '-571px'],
                ["style", "-webkit-transform-origin", [42.26,73.13], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [42.26,73.13],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [42.26,73.13],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [42.26,73.13],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [42.26,73.13],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [42.26,73.13],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-426px'],
                ["style", "clip", [758,517,910,432], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_cabeza}": [
                ["style", "top", '-564px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "-webkit-transform-origin", [62.22,81.68], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [62.22,81.68],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [62.22,81.68],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [62.22,81.68],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [62.22,81.68],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [62.22,81.68],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "opacity", '1'],
                ["style", "clip", [570,847,900,542], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-533px']
            ],
            "${_bra_1}": [
                ["style", "top", '-308px'],
                ["style", "-webkit-transform-origin", [42.97,31.74], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [42.97,31.74],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [42.97,31.74],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [42.97,31.74],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [42.97,31.74],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [42.97,31.74],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-428px'],
                ["style", "clip", [306,525,506,434], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_piernas}": [
                ["style", "top", '140px'],
                ["style", "-webkit-transform-origin", [16.68,47.86], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [16.68,47.86],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [16.68,47.86],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [16.68,47.86],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [16.68,47.86],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [16.68,47.86],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-15px'],
                ["style", "clip", [456,369,1078,18], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '1217px'],
                ["style", "width", '560px']
            ],
            "${_DER}": [
                ["style", "-webkit-transform-origin", [22.88,7.69], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [22.88,7.69],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [22.88,7.69],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [22.88,7.69],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [22.88,7.69],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [22.88,7.69],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '-5deg']
            ],
            "${_tronco}": [
                ["style", "top", '228px'],
                ["style", "-webkit-transform-origin", [16.8,38.3], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [16.8,38.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [16.8,38.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [16.8,38.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [16.8,38.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [16.8,38.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-15px'],
                ["style", "clip", [30,297,440,44], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_antbra_1}": [
                ["style", "top", '-521px'],
                ["style", "-webkit-transform-origin", [42.26,51.5], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [42.26,51.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [42.26,51.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [42.26,51.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [42.26,51.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [42.26,51.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-426px'],
                ["style", "clip", [522,499,746,428], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_MANO2}": [
                ["style", "-webkit-transform-origin", [24.73,12.16], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [24.73,12.16],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [24.73,12.16],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [24.73,12.16],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [24.73,12.16],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [24.73,12.16],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '-7deg']
            ],
            "${_boca}": [
                ["style", "-webkit-transform-origin", [30.77,129.11], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [30.77,129.11],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [30.77,129.11],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [30.77,129.11],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [30.77,129.11],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [30.77,129.11],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '233px'],
                ["style", "left", '126px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_bra_2}": [
                ["style", "-webkit-transform-origin", [22.88,6.5], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [22.88,6.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [22.88,6.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [22.88,6.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [22.88,6.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [22.88,6.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "clip", [0,94.3330078125,192.6669921875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_antbra_2}": [
                ["style", "-webkit-transform-origin", [41.81,42.24], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [41.81,42.24],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [41.81,42.24],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [41.81,42.24],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [41.81,42.24],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [41.81,42.24],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "clip", [194.66650390625,115.666015625,412.66650390625,38.6669921875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-39px'],
                ["style", "top", '-194px']
            ],
            "${_mano_2}": [
                ["style", "top", '-224px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "left", '-39px'],
                ["style", "clip", [414.66650390625,169,554,56], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "-webkit-transform-origin", [56.8,78.94], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [56.8,78.94],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [56.8,78.94],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [56.8,78.94],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [56.8,78.94],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [56.8,78.94],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_MANO}": [
                ["style", "-webkit-transform-origin", [51.16,11.99], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [51.16,11.99],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [51.16,11.99],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [51.16,11.99],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [51.16,11.99],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [51.16,11.99],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg']
            ],
            "${_gafas}": [
                ["style", "-webkit-transform-origin", [87.38,80.67], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [87.38,80.67],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [87.38,80.67],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [87.38,80.67],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [87.38,80.67],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [87.38,80.67],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["style", "top", '-553px'],
                ["style", "clip", [698,1117,790,872], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-814px']
            ],
            "${_ojos}": [
                ["style", "-webkit-transform-origin", [33.33,244.6], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [33.33,244.6],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [33.33,244.6],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [33.33,244.6],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [33.33,244.6],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [33.33,244.6],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '151px'],
                ["style", "left", '116px'],
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
                { id: "eid2529", tween: [ "transform", "${_ojos}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 500, duration: 3714 },
                { id: "eid2530", tween: [ "transform", "${_ojos}", "rotateZ", '-5deg', { fromValue: '3deg'}], position: 4215, duration: 5571 },
                { id: "eid2531", tween: [ "transform", "${_ojos}", "rotateZ", '0deg', { fromValue: '-5deg'}], position: 9786, duration: 3714 },
                { id: "eid2532", tween: [ "transform", "${_boca}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 500, duration: 3714 },
                { id: "eid2533", tween: [ "transform", "${_boca}", "rotateZ", '-5deg', { fromValue: '3deg'}], position: 4215, duration: 5571 },
                { id: "eid2534", tween: [ "transform", "${_boca}", "rotateZ", '0deg', { fromValue: '-5deg'}], position: 9786, duration: 3714 },
                { id: "eid2505", tween: [ "transform", "${_mano_2}", "rotateZ", '-8deg', { fromValue: '0deg'}], position: 3818, duration: 764 },
                { id: "eid2511", tween: [ "transform", "${_mano_2}", "rotateZ", '0deg', { fromValue: '-8deg'}], position: 5918, duration: 764 },
                { id: "eid2540", tween: [ "transform", "${_MANO}", "rotateZ", '-15deg', { fromValue: '0deg'}], position: 6500, duration: 2250 },
                { id: "eid2541", tween: [ "transform", "${_MANO}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 8750, duration: 2250 },
                { id: "eid2526", tween: [ "transform", "${_gafas}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 500, duration: 3714 },
                { id: "eid2527", tween: [ "transform", "${_gafas}", "rotateZ", '-5deg', { fromValue: '3deg'}], position: 4215, duration: 5571 },
                { id: "eid2528", tween: [ "transform", "${_gafas}", "rotateZ", '0deg', { fromValue: '-5deg'}], position: 9786, duration: 3714 },
                { id: "eid2538", tween: [ "transform", "${_IZQ}", "rotateZ", '6deg', { fromValue: '0deg'}], position: 4500, duration: 2750 },
                { id: "eid2539", tween: [ "transform", "${_IZQ}", "rotateZ", '0deg', { fromValue: '6deg'}], position: 10250, duration: 2750 },
                { id: "eid2535", tween: [ "transform", "${_cabeza}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 500, duration: 3714 },
                { id: "eid2536", tween: [ "transform", "${_cabeza}", "rotateZ", '-5deg', { fromValue: '3deg'}], position: 4215, duration: 5571 },
                { id: "eid2537", tween: [ "transform", "${_cabeza}", "rotateZ", '0deg', { fromValue: '-5deg'}], position: 9786, duration: 3714 },
                { id: "eid2502", tween: [ "transform", "${_DER}", "rotateZ", '-7deg', { fromValue: '-5deg'}], position: 0, duration: 3055 },
                { id: "eid2509", tween: [ "transform", "${_DER}", "rotateZ", '-5deg', { fromValue: '-7deg'}], position: 7445, duration: 3055 },
                { id: "eid2504", tween: [ "transform", "${_MANO2}", "rotateZ", '-18deg', { fromValue: '-7deg'}], position: 955, duration: 3055 },
                { id: "eid2510", tween: [ "transform", "${_MANO2}", "rotateZ", '-7deg', { fromValue: '-18deg'}], position: 6491, duration: 3055 }            ]
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
                    rect: ['-776px', '-112px', '1117px', '1088px', 'auto', 'auto'],
                    id: 'ojo',
                    type: 'image',
                    clip: ['rect(112px 909px 180px 572px)'],
                    fill: ['rgba(0,0,0,0)', 'images/profesor.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '71px'],
                ["style", "width", '138px'],
                ["style", "overflow", 'hidden']
            ],
            "${_ojo}": [
                ["style", "top", '-112px'],
                ["style", "left", '-776px'],
                ["style", "clip", [112,909,180,572], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
                { id: "eid2476", tween: [ "style", "${_ojo}", "left", '-776px', { fromValue: '-776px'}], position: 0, duration: 0 },
                { id: "eid2477", tween: [ "style", "${_ojo}", "left", '-584px', { fromValue: '-776px'}], position: 250, duration: 0 },
                { id: "eid2478", tween: [ "style", "${_ojo}", "left", '-776px', { fromValue: '-584px'}], position: 500, duration: 0 },
                { id: "eid2479", tween: [ "style", "${_ojo}", "left", '-776px', { fromValue: '-776px'}], position: 5000, duration: 0 },
                { id: "eid2480", tween: [ "style", "${_ojo}", "left", '-584px', { fromValue: '-776px'}], position: 5250, duration: 0 },
                { id: "eid2481", tween: [ "style", "${_ojo}", "left", '-776px', { fromValue: '-584px'}], position: 5500, duration: 0 },
                { id: "eid2483", tween: [ "style", "${_ojo}", "left", '-776px', { fromValue: '-776px'}], position: 8500, duration: 0 },
                { id: "eid2484", tween: [ "style", "${_ojo}", "left", '-584px', { fromValue: '-776px'}], position: 8750, duration: 0 },
                { id: "eid2485", tween: [ "style", "${_ojo}", "left", '-776px', { fromValue: '-584px'}], position: 9000, duration: 0 },
                { id: "eid2475", tween: [ "style", "${_ojo}", "top", '-112px', { fromValue: '-112px'}], position: 0, duration: 0 },
                { id: "eid2482", tween: [ "style", "${_ojo}", "top", '-112px', { fromValue: '-112px'}], position: 5000, duration: 0 },
                { id: "eid2486", tween: [ "style", "${_ojo}", "top", '-112px', { fromValue: '-112px'}], position: 8500, duration: 0 }            ]
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
                ["style", "clip", [0,90,90,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "height", '180px'],
                ["style", "left", '0px'],
                ["style", "background-position", [0,5], {valueTemplate:'@@0@@px @@1@@px'} ],
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
