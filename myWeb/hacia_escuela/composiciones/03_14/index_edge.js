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
                id: 'F1_D18',
                type: 'image',
                rect: ['5px', '72px','1304px','596px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"F1_D18.png",'0px','0px']
            },
            {
                id: 'slide_1',
                type: 'rect',
                rect: ['5px', '72px','auto','auto','auto', 'auto']
            },
            {
                id: 'per',
                type: 'rect',
                rect: ['-42px', '-97px','auto','auto','auto', 'auto'],
                clip: ['rect(0px 560px 832.2379150390625px 0px)'],
                transform: [[],[],[],['0.7','0.7']]
            },
            {
                id: 'Titulo',
                display: 'block',
                type: 'text',
                rect: ['490px', '134px','625px','254px','auto', 'auto'],
                text: "¿Cuándo son útiles <br>las estrategias de <br>fluidez creativa?",
                align: "center",
                font: ['cabin, Trebuchet MS, Myriad Pro, Gill Sans MT, Helvetica, sans-serif', 68, "rgba(255,255,255,1.00)", "bold", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'per',
                symbolName: 'per'
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
            "${_per}": [
                ["style", "top", '-97px'],
                ["transform", "scaleY", '0.7'],
                ["transform", "scaleX", '0.7'],
                ["style", "left", '-42px'],
                ["style", "clip", [0,560,832.2379150390625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Titulo}": [
                ["style", "line-height", '72px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "left", '490px'],
                ["style", "width", '625px'],
                ["style", "top", '134px'],
                ["transform", "scaleY", '1'],
                ["style", "text-align", 'center'],
                ["style", "display", 'block'],
                ["style", "height", '254px'],
                ["style", "font-family", 'cabin, \'Trebuchet MS\', \'Myriad Pro\', \'Gill Sans MT\', Helvetica, sans-serif'],
                ["transform", "scaleX", '1'],
                ["style", "font-size", '68px']
            ],
            "${_F1_D18}": [
                ["style", "left", '5px'],
                ["style", "top", '72px']
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
            ]
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
                    type: 'image',
                    id: 'ojo',
                    rect: ['-776px', '-112px', '1117px', '1088px', 'auto', 'auto'],
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
                    rect: ['-15px', '140px', '1117px', '1088px', 'auto', 'auto'],
                    id: 'piernas',
                    type: 'image',
                    clip: ['rect(456px 369px 1078px 18px)'],
                    fill: ['rgba(0,0,0,0)', 'images/profesor.png', '0px', '0px']
                },
                {
                    rect: ['174px', '332px', '336px', '203px', 'auto', 'auto'],
                    id: 'DER',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        rect: ['-596px', '-294px', '1117px', '1088px', 'auto', 'auto'],
                        id: 'bra_2',
                        type: 'image',
                        clip: ['rect(302px 689px 492px 596px)'],
                        fill: ['rgba(0,0,0,0)', 'images/profesor.png', '0px', '0px']
                    },
                    {
                        rect: ['34px', '2px', '310px', '196px', 'auto', 'auto'],
                        id: 'MANO_2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(192,192,192,0)'],
                        c: [
                        {
                            rect: ['-802px', '-296px', '1117px', '1088px', 'auto', 'auto'],
                            id: 'mano_2',
                            type: 'image',
                            clip: ['rect(292px 1105px 412px 964px)'],
                            fill: ['rgba(0,0,0,0)', 'images/profesor.png', '0px', '0px']
                        },
                        {
                            rect: ['-740px', '-296px', '1117px', '1088px', 'auto', 'auto'],
                            id: 'antbra_2',
                            type: 'image',
                            clip: ['rect(348px 931px 488px 740px)'],
                            fill: ['rgba(0,0,0,0)', 'images/profesor.png', '0px', '0px']
                        }]
                    }]
                },
                {
                    rect: ['-15px', '228px', '1117px', '1088px', 'auto', 'auto'],
                    id: 'tronco',
                    type: 'image',
                    clip: ['rect(30px 297px 440px 44px)'],
                    fill: ['rgba(0,0,0,0)', 'images/profesor.png', '0px', '0px']
                },
                {
                    rect: ['6px', '346px', '100px', '468px', 'auto', 'auto'],
                    id: 'IZQ',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        rect: ['-2px', '138px', '90px', '328px', 'auto', 'auto'],
                        id: 'MANO',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(192,192,192,0)'],
                        c: [
                        {
                            rect: ['-426px', '-571px', '1117px', '1088px', 'auto', 'auto'],
                            id: 'mano_1',
                            type: 'image',
                            clip: ['rect(758px 517px 910px 432px)'],
                            fill: ['rgba(0,0,0,0)', 'images/profesor.png', '0px', '0px']
                        },
                        {
                            rect: ['-426px', '-521px', '1117px', '1088px', 'auto', 'auto'],
                            id: 'antbra_1',
                            type: 'image',
                            clip: ['rect(522px 499px 746px 428px)'],
                            fill: ['rgba(0,0,0,0)', 'images/profesor.png', '0px', '0px']
                        }]
                    },
                    {
                        rect: ['-428px', '-308px', '1117px', '1088px', 'auto', 'auto'],
                        id: 'bra_1',
                        type: 'image',
                        clip: ['rect(306px 525px 506px 434px)'],
                        fill: ['rgba(0,0,0,0)', 'images/profesor.png', '0px', '0px']
                    }]
                },
                {
                    rect: ['-533px', '-564px', '1117px', '1088px', 'auto', 'auto'],
                    type: 'image',
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
                    rect: ['-814px', '-553px', '1117px', '1088px', 'auto', 'auto'],
                    id: 'gafas',
                    type: 'image',
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
                ["style", "-webkit-transform-origin", [51.97,7.98], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [51.97,7.98],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [51.97,7.98],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [51.97,7.98],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [51.97,7.98],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [51.97,7.98],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '6px'],
                ["style", "top", '346px']
            ],
            "${_mano_1}": [
                ["style", "-webkit-transform-origin", [42.26,73.13], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [42.26,73.13],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [42.26,73.13],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [42.26,73.13],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [42.26,73.13],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [42.26,73.13],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '-571px'],
                ["style", "clip", [758,517,910,432], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-426px']
            ],
            "${_cabeza}": [
                ["style", "-webkit-transform-origin", [62.22,81.68], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [62.22,81.68],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [62.22,81.68],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [62.22,81.68],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [62.22,81.68],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [62.22,81.68],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["style", "top", '-564px'],
                ["style", "opacity", '1'],
                ["style", "left", '-533px'],
                ["style", "clip", [570,847,900,542], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_bra_1}": [
                ["style", "-webkit-transform-origin", [42.97,31.74], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [42.97,31.74],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [42.97,31.74],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [42.97,31.74],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [42.97,31.74],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [42.97,31.74],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '-308px'],
                ["style", "clip", [306,525,506,434], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-428px']
            ],
            "${_piernas}": [
                ["style", "-webkit-transform-origin", [16.68,47.86], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [16.68,47.86],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [16.68,47.86],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [16.68,47.86],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [16.68,47.86],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [16.68,47.86],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '140px'],
                ["style", "clip", [456,369,1078,18], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-15px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1217px'],
                ["style", "width", '560px']
            ],
            "${_DER}": [
                ["style", "-webkit-transform-origin", [11.11,20.68], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [11.11,20.68],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [11.11,20.68],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [11.11,20.68],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [11.11,20.68],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [11.11,20.68],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '174px'],
                ["style", "top", '332px']
            ],
            "${_tronco}": [
                ["style", "-webkit-transform-origin", [16.8,38.3], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [16.8,38.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [16.8,38.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [16.8,38.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [16.8,38.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [16.8,38.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '228px'],
                ["style", "clip", [30,297,440,44], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-15px']
            ],
            "${_antbra_1}": [
                ["style", "-webkit-transform-origin", [42.26,51.5], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [42.26,51.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [42.26,51.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [42.26,51.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [42.26,51.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [42.26,51.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '-521px'],
                ["style", "clip", [522,499,746,428], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-426px']
            ],
            "${_MANO_2}": [
                ["style", "-webkit-transform-origin", [10.96,86.4], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [10.96,86.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [10.96,86.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [10.96,86.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [10.96,86.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [10.96,86.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '17deg']
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
            "${_gafas}": [
                ["style", "top", '-553px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "-webkit-transform-origin", [87.38,80.67], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [87.38,80.67],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [87.38,80.67],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [87.38,80.67],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [87.38,80.67],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [87.38,80.67],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-814px'],
                ["style", "clip", [698,1117,790,872], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_bra_2}": [
                ["style", "-webkit-transform-origin", [56.7,30.88], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [56.7,30.88],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [56.7,30.88],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [56.7,30.88],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [56.7,30.88],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [56.7,30.88],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '-294px'],
                ["style", "clip", [302,689,492,596], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-596px']
            ],
            "${_mano_2}": [
                ["style", "top", '-296px'],
                ["transform", "rotateZ", '-40deg'],
                ["style", "-webkit-transform-origin", [88.45,32.48], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [88.45,32.48],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [88.45,32.48],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [88.45,32.48],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [88.45,32.48],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [88.45,32.48],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-802px'],
                ["style", "clip", [292,1105,412,964], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_antbra_2}": [
                ["style", "-webkit-transform-origin", [69.29,42.77], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [69.29,42.77],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [69.29,42.77],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [69.29,42.77],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [69.29,42.77],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [69.29,42.77],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '-296px'],
                ["style", "clip", [348,931,488,740], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-740px']
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
                { id: "eid2546", tween: [ "transform", "${_mano_2}", "rotateZ", '-27deg', { fromValue: '-40deg'}], position: 0, duration: 750 },
                { id: "eid2547", tween: [ "transform", "${_mano_2}", "rotateZ", '-40deg', { fromValue: '-27deg'}], position: 7750, duration: 750 },
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
                { id: "eid2542", tween: [ "transform", "${_DER}", "rotateZ", '-9deg', { fromValue: '0deg'}], position: 1500, duration: 2750 },
                { id: "eid2543", tween: [ "transform", "${_DER}", "rotateZ", '0deg', { fromValue: '-9deg'}], position: 4250, duration: 2750 },
                { id: "eid2544", tween: [ "transform", "${_MANO_2}", "rotateZ", '0deg', { fromValue: '17deg'}], position: 750, duration: 2250 },
                { id: "eid2545", tween: [ "transform", "${_MANO_2}", "rotateZ", '17deg', { fromValue: '0deg'}], position: 5500, duration: 2250 }            ]
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
