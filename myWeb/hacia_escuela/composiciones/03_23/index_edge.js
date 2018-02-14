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
                id: 'F1_D30',
                type: 'image',
                rect: ['5px', '72px','1304px','596px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"F1_D30.png",'0px','0px']
            },
            {
                id: 'per',
                type: 'rect',
                rect: ['755px', '-73px','auto','auto','auto', 'auto'],
                clip: ['rect(0px 556px 824.3335571289063px 0px)'],
                transform: [[],[],[],['0.7','0.7']]
            },
            {
                id: 'Titulo',
                display: 'block',
                type: 'text',
                rect: ['108px', '166px','625px','197px','auto', 'auto'],
                text: "¿Qué estrategias puedo<br>usar para mejorar mi<br>fluidez creativa?",
                align: "center",
                font: ['cabin, Trebuchet MS, Myriad Pro, Gill Sans MT, Helvetica, sans-serif', 55, "rgba(255,255,255,1.00)", "bold", "none", "normal"]
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
            "${_F1_D30}": [
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
            "${_per}": [
                ["style", "top", '-73px'],
                ["transform", "scaleY", '0.7'],
                ["transform", "scaleX", '0.7'],
                ["style", "left", '755px'],
                ["style", "clip", [0,556,824.3335571289063,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Titulo}": [
                ["style", "line-height", '59px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "left", '108px'],
                ["style", "width", '625px'],
                ["style", "top", '166px'],
                ["style", "font-size", '55px'],
                ["style", "text-align", 'center'],
                ["transform", "scaleX", '1'],
                ["style", "display", 'block'],
                ["style", "font-family", 'cabin, \'Trebuchet MS\', \'Myriad Pro\', \'Gill Sans MT\', Helvetica, sans-serif'],
                ["style", "height", '197px'],
                ["transform", "scaleY", '1']
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
                    id: 'bocCopy',
                    type: 'image',
                    rect: ['-876px', '-91px', '1117px', '1000px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/euler.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bocCopy}": [
                ["style", "top", '-91px'],
                ["style", "clip", [92,981,166,444], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-876px']
            ],
            "${symbolSelector}": [
                ["style", "height", '68px'],
                ["style", "width", '106px'],
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
                { id: "eid2272", tween: [ "style", "${_bocCopy}", "top", '-91px', { fromValue: '-91px'}], position: 250, duration: 0 },
                { id: "eid2307", tween: [ "style", "${_bocCopy}", "top", '-71px', { fromValue: '-91px'}], position: 750, duration: 0 },
                { id: "eid2309", tween: [ "style", "${_bocCopy}", "top", '-91px', { fromValue: '-71px'}], position: 877, duration: 0 },
                { id: "eid2317", tween: [ "style", "${_bocCopy}", "top", '-71px', { fromValue: '-91px'}], position: 1636, duration: 0 },
                { id: "eid2318", tween: [ "style", "${_bocCopy}", "top", '-91px', { fromValue: '-71px'}], position: 1763, duration: 0 },
                { id: "eid2273", tween: [ "style", "${_bocCopy}", "left", '-876px', { fromValue: '-876px'}], position: 250, duration: 0 },
                { id: "eid2274", tween: [ "style", "${_bocCopy}", "left", '-749px', { fromValue: '-876px'}], position: 374, duration: 0 },
                { id: "eid2304", tween: [ "style", "${_bocCopy}", "left", '-635px', { fromValue: '-749px'}], position: 500, duration: 0 },
                { id: "eid2305", tween: [ "style", "${_bocCopy}", "left", '-524px', { fromValue: '-635px'}], position: 614, duration: 0 },
                { id: "eid2306", tween: [ "style", "${_bocCopy}", "left", '-431px', { fromValue: '-524px'}], position: 750, duration: 0 },
                { id: "eid2308", tween: [ "style", "${_bocCopy}", "left", '-749px', { fromValue: '-431px'}], position: 877, duration: 0 },
                { id: "eid2310", tween: [ "style", "${_bocCopy}", "left", '-524px', { fromValue: '-749px'}], position: 1000, duration: 0 },
                { id: "eid2311", tween: [ "style", "${_bocCopy}", "left", '-635px', { fromValue: '-524px'}], position: 1123, duration: 0 },
                { id: "eid2312", tween: [ "style", "${_bocCopy}", "left", '-876px', { fromValue: '-635px'}], position: 1250, duration: 0 },
                { id: "eid2313", tween: [ "style", "${_bocCopy}", "left", '-635px', { fromValue: '-876px'}], position: 1386, duration: 0 },
                { id: "eid2314", tween: [ "style", "${_bocCopy}", "left", '-524px', { fromValue: '-635px'}], position: 1500, duration: 0 },
                { id: "eid2315", tween: [ "style", "${_bocCopy}", "left", '-431px', { fromValue: '-524px'}], position: 1636, duration: 0 },
                { id: "eid2316", tween: [ "style", "${_bocCopy}", "left", '-749px', { fromValue: '-431px'}], position: 1763, duration: 0 },
                { id: "eid2319", tween: [ "style", "${_bocCopy}", "left", '-524px', { fromValue: '-749px'}], position: 1877, duration: 0 },
                { id: "eid2320", tween: [ "style", "${_bocCopy}", "left", '-876px', { fromValue: '-524px'}], position: 2000, duration: 0 }            ]
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
                    id: 'ojoCopy',
                    rect: ['-859px', '-24px', '1117px', '1000px', 'auto', 'auto'],
                    clip: ['rect(24px 979px 90px 676px)'],
                    fill: ['rgba(0,0,0,0)', 'images/euler.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '60px'],
                ["style", "width", '106px'],
                ["style", "overflow", 'hidden']
            ],
            "${_ojoCopy}": [
                ["style", "top", '-24px'],
                ["style", "left", '-859px'],
                ["style", "clip", [24,979,90,676], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
                { id: "eid2294", tween: [ "style", "${_ojoCopy}", "top", '-24px', { fromValue: '-24px'}], position: 0, duration: 0 },
                { id: "eid2295", tween: [ "style", "${_ojoCopy}", "left", '-859px', { fromValue: '-859px'}], position: 0, duration: 0 },
                { id: "eid2296", tween: [ "style", "${_ojoCopy}", "left", '-699px', { fromValue: '-859px'}], position: 250, duration: 0 },
                { id: "eid2297", tween: [ "style", "${_ojoCopy}", "left", '-859px', { fromValue: '-699px'}], position: 500, duration: 0 },
                { id: "eid2298", tween: [ "style", "${_ojoCopy}", "left", '-859px', { fromValue: '-859px'}], position: 3750, duration: 0 },
                { id: "eid2299", tween: [ "style", "${_ojoCopy}", "left", '-699px', { fromValue: '-859px'}], position: 4000, duration: 0 },
                { id: "eid2300", tween: [ "style", "${_ojoCopy}", "left", '-859px', { fromValue: '-699px'}], position: 4250, duration: 0 },
                { id: "eid2301", tween: [ "style", "${_ojoCopy}", "left", '-859px', { fromValue: '-859px'}], position: 8000, duration: 0 },
                { id: "eid2302", tween: [ "style", "${_ojoCopy}", "left", '-699px', { fromValue: '-859px'}], position: 8250, duration: 0 },
                { id: "eid2303", tween: [ "style", "${_ojoCopy}", "left", '-859px', { fromValue: '-699px'}], position: 8500, duration: 0 }            ]
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
                    id: 'Rectangle8',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '556px', '1091px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0)']
                },
                {
                    id: 'piernas',
                    type: 'image',
                    rect: ['162', '161px', '1117px', '1000px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/euler.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'IZQ',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['105px', '358px', '279px', '348px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0)'],
                    c: [
                    {
                        type: 'rect',
                        id: 'MANO2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['-3px', '124px', '246px', '224px', 'auto', 'auto'],
                        fill: ['rgba(192,192,192,0)'],
                        c: [
                        {
                            id: 'antbra_2',
                            type: 'image',
                            rect: ['-381px', '-380px', '1117px', '1000px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/euler.png', '0px', '0px']
                        },
                        {
                            id: 'mano_2',
                            type: 'image',
                            rect: ['-352px', '-438px', '1117px', '1000px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/euler.png', '0px', '0px']
                        }]
                    },
                    {
                        id: 'bra_2',
                        type: 'image',
                        rect: ['-384px', '-197px', '1117px', '1000px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/euler.png', '0px', '0px']
                    }]
                },
                {
                    id: 'tronco',
                    type: 'image',
                    rect: ['162', '221px', '1117px', '1000px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/euler.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'DER',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['399px', '348px', '106px', '438px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        type: 'rect',
                        id: 'MANO',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['1px', '134px', '96px', '302px', 'auto', 'auto'],
                        fill: ['rgba(192,192,192,0)'],
                        c: [
                        {
                            id: 'mano_1',
                            type: 'image',
                            rect: ['-822px', '-421px', '1117px', '1000px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/euler.png', '0px', '0px']
                        },
                        {
                            id: 'antbra_1',
                            type: 'image',
                            rect: ['-821px', '-376px', '1117px', '1000px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/euler.png', '0px', '0px']
                        }]
                    },
                    {
                        id: 'bra_1',
                        type: 'image',
                        rect: ['-817px', '-187px', '1117px', '1000px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/euler.png', '0px', '0px']
                    }]
                },
                {
                    type: 'rect',
                    id: 'CABEZA',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['254px', '61px', '260px', '287px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0)'],
                    c: [
                    {
                        type: 'image',
                        id: 'cabeza',
                        opacity: 1,
                        rect: ['-393px', '-680px', '1117px', '1000px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/euler.png', '0px', '0px']
                    },
                    {
                        id: 'ojos',
                        type: 'rect',
                        rect: ['39px', '124px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'boca',
                        type: 'rect',
                        rect: ['39px', '191px', 'auto', 'auto', 'auto', 'auto']
                    }]
                }
            ],
            symbolInstances: [
            {
                id: 'ojos',
                symbolName: 'ojos',
                autoPlay: {

               }
            },
            {
                id: 'boca',
                symbolName: 'boca',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_IZQ}": [
                ["style", "top", '358px'],
                ["style", "-webkit-transform-origin", [84.95,5.75], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [84.95,5.75],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [84.95,5.75],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [84.95,5.75],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [84.95,5.75],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [84.95,5.75],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '28deg']
            ],
            "${_mano_1}": [
                ["style", "top", '-421px'],
                ["style", "-webkit-transform-origin", [78.07,61.7], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [78.07,61.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [78.07,61.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [78.07,61.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [78.07,61.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [78.07,61.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "clip", [594,909,726,822], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-822px']
            ],
            "${_cabeza}": [
                ["style", "top", '-680px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "-webkit-transform-origin", [48.16,93.9], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [48.16,93.9],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [48.16,93.9],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [48.16,93.9],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [48.16,93.9],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [48.16,93.9],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "opacity", '1'],
                ["style", "clip", [684,657,972,396], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-393px']
            ],
            "${_bra_1}": [
                ["style", "-webkit-transform-origin", [77.17,22.3], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [77.17,22.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [77.17,22.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [77.17,22.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [77.17,22.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [77.17,22.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '-187px'],
                ["style", "left", '-817px'],
                ["style", "clip", [186,913,370,820], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_piernas}": [
                ["style", "-webkit-transform-origin", [16.29,46.7], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [16.29,46.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [16.29,46.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [16.29,46.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [16.29,46.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [16.29,46.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "clip", [414,341,1000,34], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "top", '161px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1091px'],
                ["style", "width", '556px']
            ],
            "${_DER}": [
                ["style", "-webkit-transform-origin", [42.45,8.22], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [42.45,8.22],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [42.45,8.22],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [42.45,8.22],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [42.45,8.22],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [42.45,8.22],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "top", '348px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_Rectangle8}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "height", '1091px']
            ],
            "${_mano_2}": [
                ["style", "-webkit-transform-origin", [40.29,57.4], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [40.29,57.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [40.29,57.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [40.29,57.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [40.29,57.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [40.29,57.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["style", "top", '-438px'],
                ["style", "left", '-352px'],
                ["style", "clip", [550,477,668,348], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_MANO}": [
                ["style", "-webkit-transform-origin", [58.29,14.57], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [58.29,14.57],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [58.29,14.57],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [58.29,14.57],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [58.29,14.57],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [58.29,14.57],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '1px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_tronco}": [
                ["style", "top", '221px'],
                ["style", "clip", [28,305,412,112], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "-webkit-transform-origin", [16.65,37.5], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [16.65,37.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [16.65,37.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [16.65,37.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [16.65,37.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [16.65,37.5],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_boca}": [
                ["style", "top", '191px'],
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '39px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_CABEZA}": [
                ["style", "-webkit-transform-origin", [55.77,90.24], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [55.77,90.24],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [55.77,90.24],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [55.77,90.24],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [55.77,90.24],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [55.77,90.24],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '61px']
            ],
            "${_antbra_2}": [
                ["style", "top", '-380px'],
                ["style", "-webkit-transform-origin", [52.55,40.4], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [52.55,40.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [52.55,40.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [52.55,40.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [52.55,40.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [52.55,40.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "clip", [380,621,538,460], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-381px']
            ],
            "${_antbra_1}": [
                ["style", "top", '-376px'],
                ["style", "-webkit-transform-origin", [78.51,42], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [78.51,42],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [78.51,42],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [78.51,42],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [78.51,42],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [78.51,42],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "clip", [374,913,586,842], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-821px']
            ],
            "${_bra_2}": [
                ["style", "top", '-197px'],
                ["style", "-webkit-transform-origin", [55.6,21.7], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [55.6,21.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [55.6,21.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [55.6,21.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [55.6,21.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [55.6,21.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-384px'],
                ["style", "clip", [194,661,372,564], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_MANO2}": [
                ["style", "-webkit-transform-origin", [83.73,10.71], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [83.73,10.71],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [83.73,10.71],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [83.73,10.71],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [83.73,10.71],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [83.73,10.71],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '77deg']
            ],
            "${_ojos}": [
                ["style", "top", '124px'],
                ["style", "-webkit-transform-origin", [100,225], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,225],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,225],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,225],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,225],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,225],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '39px'],
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
                { id: "eid2373", tween: [ "transform", "${_ojos}", "rotateZ", '2deg', { fromValue: '0deg'}], position: 500, duration: 3714 },
                { id: "eid2374", tween: [ "transform", "${_ojos}", "rotateZ", '-3deg', { fromValue: '2deg'}], position: 4215, duration: 5571 },
                { id: "eid2375", tween: [ "transform", "${_ojos}", "rotateZ", '0deg', { fromValue: '-3deg'}], position: 9786, duration: 3714 },
                { id: "eid2370", tween: [ "transform", "${_boca}", "rotateZ", '2deg', { fromValue: '0deg'}], position: 500, duration: 3714 },
                { id: "eid2371", tween: [ "transform", "${_boca}", "rotateZ", '-3deg', { fromValue: '2deg'}], position: 4215, duration: 5571 },
                { id: "eid2372", tween: [ "transform", "${_boca}", "rotateZ", '0deg', { fromValue: '-3deg'}], position: 9786, duration: 3714 },
                { id: "eid2376", tween: [ "transform", "${_cabeza}", "rotateZ", '2deg', { fromValue: '0deg'}], position: 500, duration: 3714 },
                { id: "eid2377", tween: [ "transform", "${_cabeza}", "rotateZ", '-3deg', { fromValue: '2deg'}], position: 4215, duration: 5571 },
                { id: "eid2378", tween: [ "transform", "${_cabeza}", "rotateZ", '0deg', { fromValue: '-3deg'}], position: 9786, duration: 3714 },
                { id: "eid2387", tween: [ "transform", "${_mano_2}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 5886, duration: 750 },
                { id: "eid2388", tween: [ "transform", "${_mano_2}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 6636, duration: 750 },
                { id: "eid2383", tween: [ "transform", "${_IZQ}", "rotateZ", '20deg', { fromValue: '28deg'}], position: 2386, duration: 2750 },
                { id: "eid2384", tween: [ "transform", "${_IZQ}", "rotateZ", '28deg', { fromValue: '20deg'}], position: 8136, duration: 2750 },
                { id: "eid2381", tween: [ "transform", "${_MANO}", "rotateZ", '15deg', { fromValue: '0deg'}], position: 3000, duration: 2250 },
                { id: "eid2382", tween: [ "transform", "${_MANO}", "rotateZ", '0deg', { fromValue: '15deg'}], position: 5250, duration: 2250 },
                { id: "eid2379", tween: [ "transform", "${_DER}", "rotateZ", '-6deg', { fromValue: '0deg'}], position: 1000, duration: 2750 },
                { id: "eid2380", tween: [ "transform", "${_DER}", "rotateZ", '0deg', { fromValue: '-6deg'}], position: 6750, duration: 2750 },
                { id: "eid2385", tween: [ "transform", "${_MANO2}", "rotateZ", '90deg', { fromValue: '77deg'}], position: 3636, duration: 2250 },
                { id: "eid2386", tween: [ "transform", "${_MANO2}", "rotateZ", '77deg', { fromValue: '90deg'}], position: 7386, duration: 2250 }            ]
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
